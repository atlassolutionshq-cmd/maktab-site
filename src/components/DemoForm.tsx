"use client"

import { type FormEvent, useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CalendarCheck, Send, CheckCircle } from "lucide-react"

interface DemoFormProps {
  inModal?: boolean
}

export default function DemoForm({ inModal = false }: DemoFormProps) {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (!submitted) return
    const timer = setTimeout(() => {
      setSubmitted(false)
      formRef.current?.reset()
    }, 5000)
    return () => clearTimeout(timer)
  }, [submitted])

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    const form = new FormData(e.currentTarget)
    const data = Object.fromEntries(form.entries())

    try {
      const res = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (!res.ok) throw new Error("Failed to send")
    } catch (error) {
      console.error("Demo request failed:", error)
    }

    setLoading(false)
    setSubmitted(true)
  }

  const successView = (
    <motion.div
      key="success"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] as const }}
      className="flex flex-col items-center justify-center py-12 text-center"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.1, type: "spring", stiffness: 200, damping: 15 }}
        className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4"
      >
        <CheckCircle className="h-7 w-7" />
      </motion.div>
      <h3 className="text-xl font-bold tracking-tight mb-2">Request sent!</h3>
      <p className="text-sm text-muted-foreground max-w-xs">
        We&apos;ll reach out within 24 hours to schedule your demo. Check your
        email and phone.
      </p>
    </motion.div>
  )

  const fields = (
    <div className="space-y-4">
      <div>
        <label htmlFor="name" className="text-sm font-medium mb-1.5 block">
          Full Name <span className="text-destructive">*</span>
        </label>
        <input
          id="name"
          name="name"
          required
          placeholder="Your full name"
          className="w-full h-11 rounded-xl border border-border bg-background px-4 text-sm outline-none hover:border-muted-foreground/30 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
        />
      </div>
      <div>
        <label htmlFor="email" className="text-sm font-medium mb-1.5 block">
          Email Address <span className="text-destructive">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="you@school.edu"
          className="w-full h-11 rounded-xl border border-border bg-background px-4 text-sm outline-none hover:border-muted-foreground/30 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
        />
      </div>
      <div>
        <label htmlFor="phone" className="text-sm font-medium mb-1.5 block">
          Phone Number <span className="text-destructive">*</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          placeholder="+92 300 1234567"
          className="w-full h-11 rounded-xl border border-border bg-background px-4 text-sm outline-none hover:border-muted-foreground/30 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
        />
      </div>
      <div>
        <label htmlFor="institution" className="text-sm font-medium mb-1.5 block">
          School / Institution <span className="text-destructive">*</span>
        </label>
        <input
          id="institution"
          name="institution"
          required
          placeholder="e.g. Beaconhouse School"
          className="w-full h-11 rounded-xl border border-border bg-background px-4 text-sm outline-none hover:border-muted-foreground/30 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
        />
      </div>
      <div>
        <label htmlFor="students" className="text-sm font-medium mb-1.5 block">
          Number of Students
        </label>
        <select
          id="students"
          name="students"
          defaultValue=""
          className="w-full h-11 rounded-xl border border-border bg-background px-4 text-sm outline-none hover:border-muted-foreground/30 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
        >
          <option value="" disabled>Select range</option>
          <option value="1-500">1 – 500</option>
          <option value="501-2000">501 – 2,000</option>
          <option value="2001-5000">2,001 – 5,000</option>
          <option value="5001+">5,000+</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="text-sm font-medium mb-1.5 block">
          Message (optional)
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          placeholder="Any specific requirements?"
          className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none hover:border-muted-foreground/30 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
        />
      </div>
    </div>
  )

  const formView = (
    <motion.div
      key="form"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
    >
      <form ref={formRef} onSubmit={handleSubmit}>
        {fields}
        <Button
          type="submit"
          disabled={loading}
          size="lg"
          className="w-full mt-6 rounded-xl font-bold h-12 text-base"
        >
          {loading ? (
            <span className="flex items-center gap-2">
              <span className="h-4 w-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
              Sending…
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <Send className="h-4 w-4" />
              {inModal ? "Send Request" : "Book a Demo"}
            </span>
          )}
        </Button>
      </form>
    </motion.div>
  )

  if (inModal) {
    return (
      <div className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
            <CalendarCheck className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-lg font-bold tracking-tight">Book a Demo</h2>
            <p className="text-xs text-muted-foreground">
              See Maktab One in action
            </p>
          </div>
        </div>
        <div className="relative min-h-[200px]">
          <AnimatePresence mode="wait">
            {submitted ? successView : formView}
          </AnimatePresence>
        </div>
      </div>
    )
  }

  return (
    <section id="demo-form" className="py-24 md:py-32 bg-muted/30">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">
            Get Started
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter">
            Book a demo
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Fill out the form and our team will walk you through Maktab One
            tailored to your institution&apos;s needs.
          </p>
        </div>

        <div className="rounded-2xl border border-border/50 bg-card p-6 md:p-8 shadow-sm">
          <div className="relative min-h-[300px]">
            <AnimatePresence mode="wait">
              {submitted ? successView : formView}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
