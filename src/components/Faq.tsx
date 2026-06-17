"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    q: "What is Maktab One?",
    a: "Maktab One is school management software built for K-10 schools and colleges. It helps you manage student records, automate fee collection and invoicing, track academic sessions, control staff access, generate reports, and give parents a portal to view fees and progress - all while keeping your data on your own servers with no vendor lock-in.",
  },
  {
    q: "Is there a free trial available?",
    a: "Yes. We offer a free demo so you can explore the full system before making any decision. Contact our team to schedule a walkthrough and get temporary access to a live instance. After the demo, affordable plans start at 3,000 PKR/month for up to 2,000 students, with 3 months of free support included in every plan.",
  },
  {
    q: "Can I run Maktab One on my own server?",
    a: "Absolutely. Maktab One is designed to run on your own server - not someone else's cloud. You can install it on any standard server with straightforward setup instructions. We provide full documentation to guide you through the process, and our team is available to help.",
  },
  {
    q: "What features does the school management system include?",
    a: "Maktab One includes student enrollment and record management, automated fee invoicing with defaulter tracking, academic session and class management, staff access controls with 46 permission settings, financial reports and analytics, and a guardian portal where parents can view fee status and academic progress.",
  },
  {
    q: "How does fee collection and invoicing work?",
    a: "You set up your fee structure once per class and session, and Maktab One automatically generates invoices for every student. Record payments as they come in - including partial payments. The system shows you exactly who has paid and who hasn't, in real time. Discounts and concessions are also tracked with a clear history.",
  },
  {
    q: "How does the guardian portal work?",
    a: "When you enroll a student, the system automatically creates a parent account and sends an email invitation. Parents log in to see fee status, payment history, invoices, and their child's academic progress. One parent account can track multiple children. Password resets are self-service, so parents don't need to call the office.",
  },
  {
    q: "What security measures does Maktab One have?",
    a: "Security is built in. You control exactly what each staff member can see and do with 46 permission settings. Sensitive operations require extra verification. All passwords are securely protected, and every important action is logged for accountability. Because the system runs on your own servers, your data never leaves your control.",
  },
  {
    q: "Where is my school's data stored?",
    a: "Maktab One stores your data in a reliable database system on your own servers. We never access or store your school's data. You have full access to your information and can export it or move it anytime you want.",
  },
  {
    q: "How do student registrations and IDs work?",
    a: "Each student gets a unique registration number automatically when enrolled. You can also import hundreds or thousands of students at once from a spreadsheet. Every student's complete history - classes, sessions, fee records, and promotions - stays organized in their digital profile from enrollment to graduation.",
  },
  {
    q: "How can I get started with Maktab One?",
    a: "Start by booking a free demo with our team. We'll walk you through the system, answer your questions, and help you choose the right plan. When you're ready, we provide full support to get you up and running. You can also find the source code and documentation on our GitHub page, or contact us directly to schedule your demo.",
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
                <h3>
                  <button
                    onClick={() => toggle(i)}
                    className="flex items-center justify-between w-full px-6 py-5 text-left hover:bg-muted/50 transition-colors focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-2 rounded-2xl"
                    aria-expanded={openIndex === i}
                    aria-controls={`faq-panel-${i}`}
                  >
                    <span className="font-bold text-base leading-relaxed pr-4">{faq.q}</span>
                    <ChevronDown
                      className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300 ${
                        openIndex === i ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </h3>
              <motion.div
                id={`faq-panel-${i}`}
                role="region"
                aria-hidden={openIndex !== i}
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
