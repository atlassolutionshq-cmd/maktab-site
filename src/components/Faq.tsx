"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    q: "What is Maktab One?",
    a: "Maktab One is an open-source school management system for K-12 schools, colleges, and educational institutions. It provides student management, fee collection and invoicing, academic session tracking, role-based access control, reports and analytics, and a guardian portal — all self-hosted on your infrastructure with no vendor lock-in.",
  },
  {
    q: "Is there a free trial available?",
    a: "Yes. Maktab One offers a free demo so you can explore the full system before committing. Contact our team to schedule a walkthrough and get temporary access to a live instance. After the demo period, you can choose one of our affordable subscription plans starting at 3,000 PKR/month for up to 2,000 students, with 3 months of free support included in every plan.",
  },
  {
    q: "Can I self-host Maktab One on my own server?",
    a: "Yes. Maktab One is designed for self-hosting on your own infrastructure. It runs on any Linux VPS or server with Docker Compose and PostgreSQL. Deployment is straightforward with our Docker Compose setup and Caddy reverse proxy for automatic SSL. Full deployment instructions are available in our documentation.",
  },
  {
    q: "What features does the school management system include?",
    "a": "Maktab One includes student enrollment and profile management with bulk CSV import, automated fee invoice generation with partial payment support, defaulter tracking in real time, academic session configuration with class and section management, end-of-year student promotions, role-based access control with 46 granular permissions, financial reports and analytics, and a dedicated guardian portal for fee tracking and student progress.",
  },
  {
    q: "How does fee collection and invoicing work?",
    a: "Fee collection is fully automated in Maktab One. You configure fee structures per class and academic session, and the system auto-generates invoices for each student. Payments can be recorded against invoices with partial payment support. The system tracks defaulters in real time, manages concessions and discounts with full audit trails, and generates collection reports. All balances update in real time across the system.",
  },
  {
    q: "How does the guardian portal work?",
    a: "When a student is enrolled, Maktab One automatically creates a guardian account and sends an email invitation. Guardians log into their dedicated dashboard to view fee status, payment history, invoices, and student academic progress. Self-service password reset is available via email verification. A single guardian account can track multiple students.",
  },
  {
    q: "What security measures does Maktab One implement?",
    a: "Maktab One implements enterprise-grade security: role-based access control with 46 permissions across 7 modules, JWT authentication with OTP email verification for sensitive operations, CSRF double-submit cookie pattern to prevent cross-site request forgery, hashed refresh token rotation with server-side invalidation, Argon2 password hashing, and comprehensive audit logging of all sensitive operations.",
  },
  {
    q: "What database does Maktab One use?",
    a: "Maktab One uses PostgreSQL as its database. We chose PostgreSQL for its reliability, performance, and rich feature set. Your data is stored in your own PostgreSQL instance on your infrastructure — Maktab One never accesses or stores your institutional data. You have full database access and can export or migrate your data at any time.",
  },
  {
    q: "How do student registrations and IDs work?",
    a: "Maktab One auto-generates unique student registration numbers using a configurable prefix format (e.g., STU-001, STU-002). Students can also be imported in bulk via CSV for large enrollments. Each student profile maintains complete academic history, including session-to-session promotion tracking, class assignments, and fee records.",
  },
  {
    q: "How can I get started with Maktab One?",
    a: "You can get started by booking a free demo with our team. We'll walk you through the system and help you choose the right plan for your institution. Once you're ready, we provide full deployment support. Visit our GitHub repository for source code and documentation, or contact us directly to schedule your demo.",
  },
]

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section ref={ref} className="py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">
            FAQ
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Everything you need to know about Maktab One school management system.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] as const }}
              className="rounded-2xl border border-border/50 bg-card overflow-hidden"
            >
                <button
                  onClick={() => toggle(i)}
                  className="flex items-center justify-between w-full px-6 py-5 text-left"
                  aria-expanded={openIndex === i}
                >
                  <span className="font-bold text-base leading-relaxed pr-4">{faq.q}</span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300 ${
                      openIndex === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === i ? "auto" : 0,
                  opacity: openIndex === i ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
                className="overflow-hidden"
              >
                <p className="px-6 pb-5 text-base text-muted-foreground leading-relaxed">
                  {faq.a}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
