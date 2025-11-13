import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const items = [
  {
    id: 1,
    title: 'Fintech Dashboard',
    tag: 'UX Case Study',
    cover: 'https://images.unsplash.com/photo-1551281044-8d8d1ae5c5e5?q=80&w=1200&auto=format&fit=crop',
    overview: 'Redesigned a data-dense analytics dashboard with clear hierarchy and motion cues to guide focus.',
    tools: ['Figma','Framer','React','Tailwind']
  },
  {
    id: 2,
    title: 'Health App',
    tag: 'Product Design',
    cover: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop',
    overview: 'A mobile experience that turns complex tracking into simple daily rituals.',
    tools: ['Figma','iOS','Motion']
  },
  {
    id: 3,
    title: 'E-commerce Rebrand',
    tag: 'UI Revamp',
    cover: 'https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?q=80&w=1200&auto=format&fit=crop',
    overview: 'Elevated visuals and micro-interactions to increase conversion while keeping the brand playful.',
    tools: ['Figma','Next.js','Storytelling']
  },
  {
    id: 4,
    title: '3D Marketing Site',
    tag: 'Creative Dev',
    cover: 'https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1200&auto=format&fit=crop',
    overview: 'Integrated Spline and scroll-based parallax for an immersive brand launch.',
    tools: ['Spline','Three.js','Framer Motion']
  }
]

export default function Projects() {
  const [active, setActive] = useState(null)

  return (
    <section id="projects" className="py-24">
      <div className="w-[92%] md:w-[80%] mx-auto">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 dark:text-white">Selected Work</h2>
            <p className="mt-2 text-zinc-700 dark:text-zinc-300">A mix of product design, prototypes, and creative development.</p>
          </div>
          <a href="#contact" className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900 text-white dark:bg-white dark:text-zinc-900">Start a project</a>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((p) => (
            <motion.button key={p.id} onClick={() => setActive(p)} whileHover={{ y: -4 }} className="text-left overflow-hidden rounded-2xl bg-white/70 dark:bg-zinc-900/70 backdrop-blur border border-white/40 dark:border-white/10 shadow group">
              <div className="relative aspect-[16/11] overflow-hidden">
                <img src={p.cover} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 left-3 text-xs px-2 py-1 rounded bg-white/70 dark:bg-zinc-800/70 border border-white/30 dark:border-white/10">{p.tag}</div>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium text-zinc-900 dark:text-white">{p.title}</h3>
                  <ExternalLink className="h-4 w-4 text-zinc-600 dark:text-zinc-300" />
                </div>
                <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300 line-clamp-2">{p.overview}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {p.tools.map(t => (
                    <span key={t} className="text-xs px-2 py-1 rounded bg-black/5 dark:bg-white/5 text-zinc-700 dark:text-zinc-300">{t}</span>
                  ))}
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[60] grid place-items-center bg-black/60 p-4" onClick={() => setActive(null)}>
            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 20, opacity: 0 }} transition={{ type: 'spring', stiffness: 120, damping: 16 }} onClick={(e) => e.stopPropagation()} className="w-full max-w-3xl overflow-hidden rounded-3xl bg-white dark:bg-zinc-950 border border-white/40 dark:border-white/10">
              <div className="relative aspect-[16/9]">
                <img src={active.cover} alt={active.title} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-semibold text-zinc-900 dark:text-white">{active.title}</h3>
                  <span className="text-xs px-2 py-1 rounded bg-black/5 dark:bg-white/5 text-zinc-700 dark:text-zinc-300">{active.tag}</span>
                </div>
                <p className="mt-3 text-zinc-700 dark:text-zinc-300">{active.overview}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {active.tools.map(t => (
                    <span key={t} className="text-xs px-2 py-1 rounded bg-black/5 dark:bg-white/5 text-zinc-700 dark:text-zinc-300">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
