"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Play, ArrowRight } from "lucide-react"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 noise" />
      <div className="absolute top-0 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -right-32 w-96 h-96 bg-primary/8 rounded-full blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32 relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center text-center max-w-4xl mx-auto"
        >
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-8"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Open Source — Self-Hosted — Enterprise Ready
          </motion.div>

          <motion.h1
            variants={item}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.92]"
          >
            <span className="text-primary">School Management</span>
            <br />
            System for Modern Institutions
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed"
          >
            Maktab One is an open-source school management system for K-12 schools, colleges,
            and educational institutions. Manage student records, automate fee collection
            and invoicing, track academic sessions and promotions, control staff access with
            46 granular permissions, and provide guardians with a dedicated portal — all
            self-hosted on your infrastructure with zero vendor lock-in.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <a href="#demo">
              <Button size="lg" className="rounded-xl font-bold h-12 px-8 text-base shadow-lg shadow-primary/25">
                <Play className="mr-2 h-4 w-4" />
                Watch Demo
              </Button>
            </a>
            <a href="#demo-form">
              <Button
                size="lg"
                variant="outline"
                className="rounded-xl font-bold h-12 px-8 text-base"
              >
                Book a Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-16 w-full max-w-5xl"
          >
            <div className="relative rounded-2xl overflow-hidden border border-border/60 shadow-2xl bg-card">
              <img
                src="/screenshots/dashboard.png"
                alt="Maktab One school management system dashboard showing fee collection, student records, and real-time institutional analytics"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
