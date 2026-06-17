import { Separator } from "@/components/ui/separator"

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-border/40 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid sm:grid-cols-4 gap-8">
          <div className="sm:col-span-1">
            <div className="flex items-center gap-2.5 mb-3">
              <img
                src="/logo.png"
                alt="Maktab One logo"
                className="h-7 w-auto"
              />
              <span className="font-bold text-base tracking-tight">Maktab One</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Open-source school management system for K-12 schools, colleges, and
              educational institutions. Self-hosted. PostgreSQL. Always yours.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-sm mb-4">Product</h3>
            <div className="flex flex-col gap-2.5">
              <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</a>
              <a href="#screenshots" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Screenshots</a>
              <a href="#demo" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Demo</a>
              <a href="/pricing.md" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-sm mb-4">Resources</h3>
            <div className="flex flex-col gap-2.5">
              <a href="https://github.com/anomalyco/maktab-one" className="text-sm text-muted-foreground hover:text-foreground transition-colors">GitHub</a>
              <a href="/llms.txt" className="text-sm text-muted-foreground hover:text-foreground transition-colors">AI Context</a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-sm mb-4">Contact</h3>
            <div className="flex flex-col gap-2.5">
              <a href="mailto:hello@maktab.one" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                hello@maktab.one
              </a>
              <p className="text-sm text-muted-foreground">
                Self-hosted school management
              </p>
            </div>
          </div>
        </div>

        <Separator className="my-8 opacity-50" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Maktab One. All rights reserved.</span>
          <span>Open source. Self-hosted. Enterprise ready.</span>
        </div>
      </div>
    </footer>
  )
}
