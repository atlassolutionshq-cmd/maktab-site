"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function CtaBanner() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
          className="relative rounded-3xl bg-primary overflow-hidden px-8 py-16 md:py-24 text-center"
        >
          <div className="absolute inset-0 noise opacity-20" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-primary-foreground">
              Ready to simplify your school operations?
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/70">
              See Maktab One in action with a free, no-obligation demo. Your data stays
              on your servers, you stay in control, and our team helps you every step of the way.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="rounded-xl font-bold h-12 px-8 text-base shadow-xl"
                onClick={() => document.getElementById("demo-form")?.scrollIntoView({ behavior: "smooth" })}
              >
                Book a Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-xl font-bold h-12 px-8 text-black border-primary-foreground/20 text-base hover:bg-white/10"
                onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
              >
                View Plans
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
