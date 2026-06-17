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
    desc: "Enroll, track, and manage student profiles with bulk CSV import supporting thousands of records. Auto-generate unique registration numbers (STU-XXX format), maintain complete academic history with session-to-session promotion tracking, and manage student documents, photographs, and contact information — all in one place.",
  },
  {
    icon: Receipt,
    title: "Fee Collection & Invoicing",
    desc: "Automate fee invoice generation based on configurable fee structures per class and session. Record payments against invoices with partial payment support, track defaulters in real time, manage concessions and discounts with audit trails, and generate collection reports — all with real-time balance updates across the system.",
  },
  {
    icon: BookOpen,
    title: "Academic Management",
    desc: "Configure academic sessions, classes, sections, and subjects with flexible scheduling. Perform end-of-year student promotions between sessions with a background job processor that handles bulk operations. Track every student's full academic journey from enrollment through graduation with complete session history.",
  },
  {
    icon: ShieldCheck,
    title: "RBAC & Security",
    desc: "Role-based access control with 46 granular permissions across 7 modules. Multi-factor authentication via JWT tokens with OTP email verification. CSRF double-submit cookie pattern, hashed refresh token rotation with server-side invalidation, and Argon2 password hashing. Full audit logging tracks all sensitive operations.",
  },
  {
    icon: BarChart3,
    title: "Reports & Analytics",
    desc: "Real-time dashboard with key institutional metrics including fee collection rates, student enrollment trends, and defaulter tracking. Generate financial reports, defaulter analysis with aging summaries, discount and concession impact reports, and collection performance analytics. All reports exportable for offline analysis.",
  },
  {
    icon: UserCheck,
    title: "Guardian Portal",
    desc: "Automated guardian account creation during student enrollment with email invitations and secure onboarding. Dedicated guardian dashboard for viewing fee status, payment history, invoices, and student academic progress. Self-service password reset flows with email verification. Guardians can track multiple students from a single account.",
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
            One platform, every workflow
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            From the front office to the finance desk — Maktab One connects every
            part of your institution with 14 integrated modules.
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
