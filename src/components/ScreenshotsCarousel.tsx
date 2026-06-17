"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

const SCREENSHOTS = [
  { src: "/screenshots/dashboard.png", label: "Dashboard", alt: "Maktab One school management dashboard overview showing fee collection, student enrollment, and key school metrics" },
  { src: "/screenshots/students.png", label: "Students", alt: "Student records list showing enrolled students with profiles and academic history in Maktab One" },
  { src: "/screenshots/recordfee.png", label: "Fee Collection", alt: "Fee collection screen for recording payments, managing invoices, and tracking outstanding balances" },
  { src: "/screenshots/roles.png", label: "Roles & Permissions", alt: "Staff access control settings showing permission management for different user roles" },
  { src: "/screenshots/staff.png", label: "Staff", alt: "Staff management screen for adding teachers and administrators with role assignments" },
  { src: "/screenshots/sections.png", label: "Sections", alt: "Academic section setup showing class groupings and scheduling for school management" },
  { src: "/screenshots/classes.png", label: "Classes", alt: "Class management showing sections and teacher assignments in Maktab One" },
  { src: "/screenshots/concessions.png", label: "Concessions", alt: "Fee concession and discount management for student fee adjustments" },
  { src: "/screenshots/guardian.png", label: "Guardian Portal", alt: "Parent portal dashboard showing fee status, payment history, and student progress" },
  { src: "/screenshots/promotion.png", label: "Promotions", alt: "End-of-year student promotion workflow for advancing students to the next session" },
  { src: "/screenshots/report.png", label: "Reports", alt: "Financial reports and analytics dashboard showing fee collection and defaulter summaries" },
  { src: "/screenshots/logs.png", label: "Activity Logs", alt: "System activity logs tracking important actions and changes across the platform" },
  { src: "/screenshots/settings.png", label: "Settings", alt: "System configuration and settings panel for customizing Maktab One" },
]

export default function ScreenshotsCarousel() {
  const [active, setActive] = useState(0)
  const [direction, setDirection] = useState(1)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  const prev = () => { setDirection(-1); setActive((a) => (a === 0 ? SCREENSHOTS.length - 1 : a - 1)) }
  const next = () => { setDirection(1); setActive((a) => (a === SCREENSHOTS.length - 1 ? 0 : a + 1)) }

  return (
    <section id="screenshots" ref={ref} className="py-24 md:py-32 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">
            Product Tour
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter">
            See it in action
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Real screenshots from the live application showing every feature.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          <motion.div
            key={active}
            initial={{ opacity: 0, x: direction * 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
            className="rounded-2xl overflow-hidden border border-border/60 shadow-xl bg-card aspect-video flex items-center justify-center"
          >
            <img
              src={SCREENSHOTS[active].src}
              alt={SCREENSHOTS[active].alt}
              className="w-full h-full object-contain"
            />
          </motion.div>

          <div className="flex items-center justify-between mt-6">
            <button
              onClick={prev}
              className="h-11 w-11 rounded-full border border-border hover:bg-muted flex items-center justify-center transition-colors focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-2"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            <div className="flex items-center gap-2">
              {SCREENSHOTS.map((s, i) => (
                <button
                  key={s.label}
                  onClick={() => setActive(i)}
                  className="h-4 w-4 flex items-center justify-center rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-2"
                  aria-label={`View ${s.label}`}
                >
                  <span
                    className={`rounded-full transition-all duration-300 ${
                      i === active
                        ? "h-1.5 w-6 bg-primary"
                        : "h-1.5 w-1.5 bg-border hover:bg-muted-foreground/30"
                    }`}
                  />
                </button>
              ))}
            </div>

            <button
              onClick={next}
              className="h-11 w-11 rounded-full border border-border hover:bg-muted flex items-center justify-center transition-colors focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-2"
              aria-label="Next image"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          <p className="text-center text-sm font-medium text-muted-foreground mt-3">
            {SCREENSHOTS[active].label}
          </p>
        </div>
      </div>
    </section>
  )
}
