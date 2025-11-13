import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Dribbble, Behance } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="w-[92%] md:w-[80%] mx-auto grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 dark:text-white">Let’s build something exceptional</h2>
          <p className="mt-3 text-zinc-700 dark:text-zinc-300">Have a product in mind? I’d love to hear about it.</p>
          <div className="mt-6 flex gap-3">
            <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"><Mail className="h-4 w-4"/> Email</a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/70 dark:bg-zinc-900/70 border border-white/40 dark:border-white/10 text-zinc-900 dark:text-white"><Github className="h-4 w-4"/> GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/70 dark:bg-zinc-900/70 border border-white/40 dark:border-white/10 text-zinc-900 dark:text-white"><Linkedin className="h-4 w-4"/> LinkedIn</a>
            <a href="https://dribbble.com" target="_blank" rel="noreferrer" className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/70 dark:bg-zinc-900/70 border border-white/40 dark:border-white/10 text-zinc-900 dark:text-white"><Dribbble className="h-4 w-4"/> Dribbble</a>
            <a href="https://behance.net" target="_blank" rel="noreferrer" className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/70 dark:bg-zinc-900/70 border border-white/40 dark:border-white/10 text-zinc-900 dark:text-white"><Behance className="h-4 w-4"/> Behance</a>
          </div>
        </div>
        <motion.form initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl p-6 bg-white/70 dark:bg-zinc-900/70 backdrop-blur border border-white/40 dark:border-white/10 shadow grid gap-4">
          <div>
            <label className="block text-sm text-zinc-600 dark:text-zinc-400">Name</label>
            <input type="text" required placeholder="Your name" className="mt-1 w-full rounded-xl border border-white/40 dark:border-white/10 bg-white/60 dark:bg-zinc-800/60 px-4 py-2 outline-none focus:ring-2 focus:ring-violet-400" />
          </div>
          <div>
            <label className="block text-sm text-zinc-600 dark:text-zinc-400">Email</label>
            <input type="email" required placeholder="you@domain.com" className="mt-1 w-full rounded-xl border border-white/40 dark:border-white/10 bg-white/60 dark:bg-zinc-800/60 px-4 py-2 outline-none focus:ring-2 focus:ring-violet-400" />
          </div>
          <div>
            <label className="block text-sm text-zinc-600 dark:text-zinc-400">Message</label>
            <textarea required rows="5" placeholder="Tell me about your project" className="mt-1 w-full rounded-xl border border-white/40 dark:border-white/10 bg-white/60 dark:bg-zinc-800/60 px-4 py-2 outline-none focus:ring-2 focus:ring-violet-400" />
          </div>
          <button type="submit" className="mt-2 inline-flex justify-center px-5 py-3 rounded-xl bg-gradient-to-r from-sky-400 to-violet-500 text-white shadow-lg hover:shadow-xl transition-shadow">Send Message</button>
        </motion.form>
      </div>
    </section>
  )
}
