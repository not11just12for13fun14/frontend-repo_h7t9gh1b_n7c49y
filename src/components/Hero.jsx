import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[92vh] grid place-items-center overflow-hidden">
      {/* 3D scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay for depth */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/20 to-white/80 dark:from-zinc-950/70 dark:via-zinc-950/30 dark:to-zinc-950/80" />

      {/* Content */}
      <div className="relative z-10 w-[92%] md:w-[80%] mx-auto pt-28 pb-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
          <span className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-full bg-white/60 dark:bg-white/10 backdrop-blur border border-white/40 dark:border-white/10 text-zinc-700 dark:text-zinc-200 shadow">
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-sky-400 to-violet-500" /> Available for freelance
          </span>
          <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight text-zinc-900 dark:text-white">
            Creative UI/UX Designer & Frontend Developer
          </h1>
          <p className="mt-5 text-lg md:text-xl text-zinc-700 dark:text-zinc-300 max-w-2xl">
            I craft interfaces that feel effortless and alive — blending elegant aesthetics, human-centered design, and delightful micro-interactions.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="group relative inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 shadow-lg shadow-violet-500/10 hover:shadow-violet-500/30 transition-shadow">
              <span className="relative z-10">View Work</span>
              <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-sky-400/0 via-fuchsia-400/0 to-violet-500/0 group-hover:from-sky-400/20 group-hover:via-fuchsia-400/20 group-hover:to-violet-500/20 transition-colors" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/70 dark:bg-zinc-900/70 backdrop-blur border border-white/40 dark:border-white/10 text-zinc-900 dark:text-white hover:bg-white/90 dark:hover:bg-zinc-900">
              Get in Touch
            </a>
          </div>
        </motion.div>
      </div>

      {/* Floating orbs */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="pointer-events-none absolute -top-10 right-10 h-64 w-64 rounded-full bg-gradient-to-br from-sky-400/30 to-violet-500/30 blur-3xl" />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="pointer-events-none absolute bottom-10 left-10 h-64 w-64 rounded-full bg-gradient-to-br from-fuchsia-400/30 to-blue-500/30 blur-3xl" />
    </section>
  )
}
