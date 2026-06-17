"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog } from "@/components/ui/dialog"
import DemoForm from "@/components/DemoForm"

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Screenshots", href: "#screenshots" },
  { label: "Demo", href: "#demo" },
  { label: "Contact", href: "#demo-form" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [demoOpen, setDemoOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [open])

  const closeMobile = () => setOpen(false)

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl border-b border-border/40 shadow-xs"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl flex items-center justify-between px-6 h-16">
          <Link href="/" className="flex items-center gap-2.5">
            <img
              src="/logo.png"
              alt="Maktab One logo"
              className="h-8 w-auto"
            />
            <span className="font-bold text-lg tracking-tight">Maktab One</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-4 rounded-sm"
              >
                {l.label}
              </a>
            ))}
            <Button
              size="sm"
              className="rounded-xl font-bold"
              onClick={() => setDemoOpen(true)}
            >
              Book a Demo
            </Button>
          </nav>

          <button
            className="md:hidden h-11 w-11 flex items-center justify-center rounded-xl hover:bg-muted transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden bg-white border-b border-border"
            >
              <div className="px-6 py-4 flex flex-col gap-3">
                {NAV_LINKS.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={closeMobile}
                    className="text-sm font-medium text-muted-foreground hover:text-foreground py-2 focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-4 rounded-sm"
                  >
                    {l.label}
                  </a>
                ))}
                <Button
                  size="default"
                  className="rounded-xl font-bold w-full"
                  onClick={() => { closeMobile(); setDemoOpen(true) }}
                >
                  Book a Demo
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <Dialog open={demoOpen} onClose={() => setDemoOpen(false)}>
        <DemoForm inModal />
      </Dialog>
    </>
  )
}
