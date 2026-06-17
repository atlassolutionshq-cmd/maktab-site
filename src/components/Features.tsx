"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import {
  Users,
  Receipt,
  BookOpen,
  ShieldCheck,
  BarChart3,
  UserCheck,
} from "lucide-react"

const features = [
  {
    icon: Users,
    title: "Student Management",
    desc: "Enroll students, keep digital records, and track their full academic journey from day one to graduation. Import thousands of records at once from a spreadsheet. Every student gets a unique ID, and their complete history - classes, sessions, promotions - stays organized in one place.",
  },
  {
    icon: Receipt,
    title: "Fee Collection & Invoicing",
    desc: "Automate invoices based on your fee structure per class and session. Record payments, handle partial payments, track defaulters instantly, and manage discounts - all with a clear record of every transaction. Know exactly who has paid and who hasn't, in real time.",
  },
  {
    icon: BookOpen,
    title: "Academic Management",
    desc: "Set up academic sessions, classes, sections, and subjects your way. Promote students between sessions in bulk at year-end. Every student's journey - from enrollment to graduation - is tracked and accessible, making academic planning effortless.",
  },
  {
    icon: ShieldCheck,
    title: "Staff Access & Data Security",
    desc: "Control exactly what each staff member can see and do with 46 permission settings. Sensitive operations require additional verification. Passwords are securely hashed, and every important action is logged for accountability. Your data stays yours - always.",
  },
  {
    icon: BarChart3,
    title: "Reports & Analytics",
    desc: "See your school's key numbers at a glance - fee collection rates, enrollment trends, and defaulter summaries. Generate financial reports, analyze discount impact, and track collection performance. All reports can be exported for offline review or sharing with stakeholders.",
  },
  {
    icon: UserCheck,
    title: "Guardian Portal",
    desc: "Parents get their own account automatically when their child enrolls. They can view fee status, payment history, invoices, and academic progress from one dashboard. Password resets are self-service. One parent can track all their children from a single login.",
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const cardAnim = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
}

export default function Features() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="features" ref={ref} className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">
            Everything you need
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter">
            One platform for your whole school
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            From the front office to the finance desk - Maktab One connects every
            part of your institution in one place.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={cardAnim}
              className="group p-6 rounded-2xl border border-border/50 bg-card hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="h-11 w-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold tracking-tight mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
