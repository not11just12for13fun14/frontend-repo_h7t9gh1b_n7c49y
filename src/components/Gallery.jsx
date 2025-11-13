import { motion } from 'framer-motion'

const shots = [
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1556157381-36f255d75ade?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1487014679447-9f8336841d58?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop',
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-24">
      <div className="w-[92%] md:w-[80%] mx-auto">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 dark:text-white">Design Showcase</h2>
        </div>
      </div>
      <div className="mt-8 overflow-x-auto pb-6">
        <div className="flex gap-6 w-max mx-4 md:mx-10">
          {shots.map((s, i) => (
            <motion.div key={s} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="relative h-64 w-[420px] shrink-0 overflow-hidden rounded-2xl bg-white/70 dark:bg-zinc-900/70 border border-white/40 dark:border-white/10">
              <img src={s} alt="Design shot" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-sm text-white/90">Explorations {i+1}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
