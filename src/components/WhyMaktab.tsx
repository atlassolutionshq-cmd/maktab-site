"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Database, Lock, School, Cpu } from "lucide-react"

const reasons = [
  {
    icon: School,
    title: "Built for Schools, Not Generic CRM",
    desc: "Purpose-built for K-12 schools, colleges, and educational institutions — not a repurposed CRM. Native support for academic sessions, class-section hierarchies, fee structure per session, bulk student promotions, attendance tracking, and student lifecycle management from enrollment to graduation.",
  },
  {
    icon: Database,
    title: "Data You Own — Zero Vendor Lock-In",
    desc: "Self-hosted on your own VPS or server with PostgreSQL. Full database access, complete data portability, no subscription traps, and no third-party data processing. Maktab One never accesses or stores your institutional data. Export everything at any time.",
  },
  {
    icon: Lock,
    title: "Enterprise-Grade Security",
    desc: "Role-based access control with 46 granular permissions across 7 modules. JWT authentication with OTP email verification for sensitive operations. CSRF double-submit cookie pattern prevents cross-site request forgery. Hashed refresh token rotation with server-side invalidation. Argon2 password hashing. Full audit logging for compliance.",
  },
  {
    icon: Cpu,
    title: "Modern Open-Source Stack",
    desc: "Built with Express.js 5, Prisma 7 ORM, PostgreSQL, Next.js 16 with React 19, Tailwind CSS 4, and shadcn/ui. Clean modular monolith architecture with 17 feature modules. Swagger API documentation. Runs on any Linux VPS with Docker Compose and Caddy reverse proxy.",
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
            Built different by design
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Not another edtech platform. A purpose-built institutional system
            that puts you in control of your data, security, and infrastructure.
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
