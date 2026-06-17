import { Separator } from "@/components/ui/separator"
import Image from "next/image"

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-border/40 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid sm:grid-cols-4 gap-8">
          <div className="sm:col-span-1">
            <div className="flex items-center gap-2.5 mb-3">
              <Image
                src="/logo.png"
                alt="Maktab One logo"
                className="h-7 w-auto"
                width={50}
                height={50}
              />
              <span className="font-bold text-base tracking-tight">Maktab One</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              School management software for K-10 schools and colleges. Run it on
              your own servers. Your data stays yours. Always.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-sm mb-4">Product</h3>
            <div className="flex flex-col gap-2.5">
              <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-4 rounded-sm">Features</a>
              <a href="#screenshots" className="text-sm text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-4 rounded-sm">Screenshots</a>
              <a href="#demo" className="text-sm text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-4 rounded-sm">Demo</a>
              <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-4 rounded-sm">Pricing</a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-sm mb-4">Resources</h3>
            <div className="flex flex-col gap-2.5">
              <a href="https://github.com/anomalyco/maktab-one" className="text-sm text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-4 rounded-sm">GitHub</a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-sm mb-4">Contact</h3>
            <div className="flex flex-col gap-2.5">
              <a href="mailto:info@maktabone.org" className="text-sm text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-4 rounded-sm">
                hello@maktab.one
              </a>
              <p className="text-sm text-muted-foreground">
                School management software
              </p>
            </div>
          </div>
        </div>

        <Separator className="my-8 opacity-50" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Maktab One. All rights reserved.</span>
          <span>Your data. Your rules. Zero lock-in.</span>
        </div>
      </div>
    </footer>
  )
}
