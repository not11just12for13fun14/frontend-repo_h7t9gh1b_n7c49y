import { motion } from 'framer-motion'

const skills = [
  'Figma','Framer','React','Tailwind','Next.js','TypeScript','Adobe XD','Photoshop','Illustrator','Three.js','Spline','Motion Design'
]

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-sky-500/5 to-transparent" />
      <div className="w-[92%] md:w-[80%] mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.6 }} className="flex justify-center">
          <div className="relative">
            <div className="h-48 w-48 md:h-56 md:w-56 rounded-full bg-gradient-to-tr from-sky-400 to-violet-500 p-1">
              <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop" alt="Portrait" className="h-full w-full rounded-full object-cover" />
            </div>
            <div className="absolute -bottom-3 -right-3 px-3 py-1.5 rounded-full text-xs bg-white/80 dark:bg-zinc-900/80 backdrop-blur border border-white/40 dark:border-white/10 text-zinc-700 dark:text-zinc-300">Based in Earth 🌍</div>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 dark:text-white">Designing with intention, building with care.</h2>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300">
            I create immersive product experiences that balance clarity and character. My approach blends strategic thinking, rapid prototyping, and a love for motion.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {skills.map((s) => (
              <motion.span key={s} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="px-3 py-1.5 rounded-full text-sm bg-white/70 dark:bg-zinc-900/70 border border-white/40 dark:border-white/10 text-zinc-700 dark:text-zinc-300 backdrop-blur">
                {s}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
