"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Database, Lock, School, Cpu } from "lucide-react"

const reasons = [
  {
    icon: School,
    title: "Built for Schools, Not Repurposed Software",
    desc: "Maktab One was designed specifically for K-10 schools and colleges - it's not a generic system squeezed into an educational shape. Everything from academic sessions and class hierarchies to fee structures and student promotions works the way your school actually operates.",
  },
  {
    icon: Database,
    title: "Your Data Stays Yours - Always",
    desc: "Run Maktab One on your own servers, not someone else's cloud. You have full access to your data, can export it anytime, and no third party ever touches your student or financial records. No subscription traps, no hidden fees, no vendor lock-in.",
  },
  {
    icon: Lock,
    title: "Security You Can Rely On",
    desc: "Control who sees what with 46 staff permission settings. Sensitive operations need extra approval. Passwords are protected with strong encryption, and every important action is logged. Your school's data is safe, private, and always under your control.",
  },
  {
    icon: Cpu,
    title: "Built on Proven Modern Technology",
    desc: "Maktab One uses reliable, well-supported technologies that are trusted by schools and businesses worldwide. The code is open-source, meaning it's transparent, auditable, and free from hidden backdoors. Deploy on any standard server with straightforward setup instructions.",
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
}

export default function WhyMaktab() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section ref={ref} className="py-24 md:py-32 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">
            Why Maktab One
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter">
            Why schools choose Maktab One
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Not another edtech platform. A system built for schools that puts
            you in control of your data, your security, and your operations.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid md:grid-cols-2 gap-6"
        >
          {reasons.map((r) => (
            <motion.div
              key={r.title}
              variants={item}
              className="rounded-2xl border border-border/40 bg-card p-7 flex gap-5"
            >
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-0.5">
                <r.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold tracking-tight mb-2">{r.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
