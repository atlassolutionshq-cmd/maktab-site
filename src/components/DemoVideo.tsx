"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"

export default function DemoVideo() {
  const [playing, setPlaying] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  const handlePlay = () => {
    setPlaying(true)
    videoRef.current?.play()
  }

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
          className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden border border-border/60 shadow-xl bg-card aspect-video"
        >
          {!playing && (
            <div
              className="absolute inset-0 z-10 flex items-center justify-center group cursor-pointer"
              onClick={handlePlay}
            >
              <img
                src="/screenshots/dashboard.png"
                alt="Maktab One demo video - click to play"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
              <div className="relative z-10 flex flex-col items-center gap-3">
                <div className="h-16 w-16 rounded-full bg-white/90 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <svg className="h-6 w-6 text-foreground ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <span className="text-white font-bold text-sm">Play Overview</span>
              </div>
            </div>
          )}
          <video
            ref={videoRef}
            src="/demo.mov"
            className="w-full h-full object-contain"
            controls
            playsInline
            onEnded={() => setPlaying(false)}
            onPause={() => {}}
          />
        </motion.div>
      </div>
    </section>
  )
}
