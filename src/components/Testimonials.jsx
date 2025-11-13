import { motion } from 'framer-motion'

const items = [
  { name: 'Maya K.', role: 'Product Lead', quote: 'A rare blend of taste and rigor. Every detail is intentional and delightful.' },
  { name: 'Jon S.', role: 'CTO', quote: 'Translates complex requirements into interfaces that just make sense.' },
  { name: 'Lena P.', role: 'Founder', quote: 'From strategy to polish — elevates the entire product experience.' },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24">
      <div className="w-[92%] md:w-[80%] mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 dark:text-white">What clients say</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <motion.div key={t.name} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="rounded-2xl p-6 bg-white/70 dark:bg-zinc-900/70 backdrop-blur border border-white/40 dark:border-white/10 shadow">
              <div className="text-zinc-700 dark:text-zinc-300">“{t.quote}”</div>
              <div className="mt-4 text-sm text-zinc-500">{t.name} — {t.role}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
