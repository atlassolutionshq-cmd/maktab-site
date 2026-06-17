"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, ArrowRight, Sparkles } from "lucide-react"

const plans = [
  {
    name: "Starter",
    price: "3,000",
    currency: "PKR",
    period: "/month",
    students: "Up to 2,000 students",
    popular: false,
    features: [
      "Student management with bulk import",
      "Fee collection & automated invoicing",
      "Academic session & class management",
      "Staff access controls",
      "Guardian portal",
      "Email support",
    ],
    cta: "Get Started",
  },
  {
    name: "Professional",
    price: "5,500",
    currency: "PKR",
    period: "/month",
    students: "Up to 5,000 students",
    popular: true,
    features: [
      "Everything in Starter",
      "Advanced reports & analytics",
      "Priority email & phone support",
      "Custom fee structures",
      "Bulk student promotions",
      "Dedicated onboarding assistance",
    ],
    cta: "Get Started",
  },
  {
    name: "Enterprise",
    price: "Custom",
    currency: "",
    period: "",
    students: "5,000+ students",
    popular: false,
    features: [
      "Everything in Professional",
      "Unlimited students",
      "Custom feature development",
      "Single sign-on (SSO) integration",
      "SLA guarantee",
      "Dedicated account manager",
    ],
    cta: "Contact Us",
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const cardAnim = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
}

export default function Pricing() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="pricing" ref={ref} className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">
            Pricing
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            All plans include 3 months of free support. No hidden fees. No
            long-term contracts.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto items-start"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={cardAnim}
              className={`relative rounded-2xl border bg-card p-6 md:p-8 flex flex-col ${
                plan.popular
                  ? "border-primary/40 shadow-lg shadow-primary/10 ring-1 ring-primary/20 md:scale-[1.05]"
                  : "border-border/50 shadow-sm"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground font-bold text-xs px-4 py-1 rounded-full shadow-lg shadow-primary/25 flex items-center gap-1.5">
                    <Sparkles className="h-3 w-3" />
                    Most Popular
                  </Badge>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-bold tracking-tight mb-1">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{plan.students}</p>
                <div className="flex items-baseline gap-0.5">
                  {plan.currency && (
                    <span className="text-lg font-semibold text-muted-foreground">
                      {plan.currency}
                    </span>
                  )}
                  <span className="text-4xl md:text-5xl font-black tracking-tighter">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-sm text-muted-foreground ml-1">
                      {plan.period}
                    </span>
                  )}
                </div>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>

              <Button
                size="lg"
                variant={plan.popular ? "default" : "outline"}
                className={`rounded-xl font-bold h-12 w-full text-base ${
                  plan.popular ? "shadow-lg shadow-primary/25" : ""
                }`}
                onClick={() => document.getElementById("demo-form")?.scrollIntoView({ behavior: "smooth" })}
              >
                {plan.cta}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <p className="text-xs text-center text-muted-foreground mt-3">
                3 months free support included
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
