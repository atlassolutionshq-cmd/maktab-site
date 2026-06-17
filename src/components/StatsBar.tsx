"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useInView } from "framer-motion"

const stats = [
  { value: 14, suffix: "+", label: "Feature Modules" },
  { value: 46, suffix: "", label: "Staff Access Controls" },
  { value: 99.9, suffix: "%", label: "Guaranteed Uptime" },
  { value: 5, suffix: "K+", label: "Students per Instance" },
]

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })
  const [count, setCount] = useState(to === 99.9 ? 99.9 : 0)

  useEffect(() => {
    if (!isInView || to === 99.9) return

    const duration = 1500
    const steps = 30
    const increment = to / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= to) {
        setCount(to)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isInView, to])

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  )
}

export default function StatsBar() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} aria-labelledby="stats-heading" className="py-24 md:py-32 border-y border-border/40 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 id="stats-heading" className="sr-only">Maktab One by the numbers</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as const }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-black tracking-tighter text-primary">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-1 text-sm font-medium text-muted-foreground">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
