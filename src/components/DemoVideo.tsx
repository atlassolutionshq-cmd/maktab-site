"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Play, Mail } from "lucide-react"

export default function DemoVideo() {
  const [showPrompt, setShowPrompt] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="demo" ref={ref} className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">
            Watch
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter">
            See Maktab One in action
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            A quick walkthrough of student records, fee collection, class
            management, and the parent portal.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
          className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden border border-border/60 shadow-xl bg-card aspect-video flex items-center justify-center group cursor-pointer"
          onClick={() => setShowPrompt(true)}
        >
          <img
            src="/screenshots/dashboard.png"
            alt="Maktab One product demo walkthrough showing student management, fee collection, and academic tracking features"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
          {showPrompt ? (
            <div className="relative z-10 flex flex-col items-center gap-3 px-6 text-center">
              <div className="h-14 w-14 rounded-full bg-white/90 flex items-center justify-center">
                <Mail className="h-6 w-6 text-foreground" />
              </div>
              <p className="text-white font-bold text-sm max-w-xs">
                Request a live demo instead. Our team will walk you through the system.
              </p>
              <span
                className="text-white/70 text-xs underline cursor-pointer hover:text-white transition-colors"
                onClick={(e) => { e.stopPropagation(); setShowPrompt(false) }}
              >
                Dismiss
              </span>
            </div>
          ) : (
            <div className="relative z-10 flex flex-col items-center gap-3">
              <div className="h-16 w-16 rounded-full bg-white/90 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                <Play className="h-6 w-6 text-foreground ml-0.5" />
              </div>
              <span className="text-white font-bold text-sm">Play Overview</span>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
