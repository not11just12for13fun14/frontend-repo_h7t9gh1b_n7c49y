import { useEffect, useState } from 'react'
import { Menu, X, Sun, Moon, ExternalLink, Sparkles } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      setProgress(pct)
    }
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (dark) document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
  }, [dark])

  const navItems = [
    { href: '#hero', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Work' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <>
      {/* Scroll progress */}
      <div className="fixed top-0 left-0 h-1 bg-gradient-to-r from-sky-400 via-fuchsia-400 to-violet-500 z-50" style={{ width: `${progress}%` }} />

      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] md:w-[80%]">
        <div className="backdrop-blur-xl bg-white/60 dark:bg-zinc-900/60 border border-white/30 dark:border-white/10 shadow-2xl rounded-2xl px-4 md:px-6 py-3 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-2 group">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-sky-400 to-violet-500 grid place-items-center text-white shadow-lg">
              <Sparkles className="h-4 w-4" />
            </div>
            <span className="font-semibold tracking-tight text-zinc-900 dark:text-white">Astra</span>
          </a>
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((n) => (
              <a key={n.href} href={n.href} className="text-sm text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors">
                {n.label}
              </a>
            ))}
            <a href="#projects" className="text-sm px-3 py-1.5 rounded-full bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 shadow hover:shadow-md transition-all">View Work</a>
            <button aria-label="Toggle theme" onClick={() => setDark(!dark)} className="p-2 rounded-lg border border-white/40 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5">
              {dark ? <Sun className="h-5 w-5 text-amber-300" /> : <Moon className="h-5 w-5 text-sky-500" />}
            </button>
          </div>
          <button className="md:hidden p-2 rounded-lg border border-white/40 dark:border-white/10" onClick={() => setOpen(!open)}>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {/* Mobile menu */}
        {open && (
          <div className="md:hidden mt-2 backdrop-blur-xl bg-white/70 dark:bg-zinc-900/70 border border-white/40 dark:border-white/10 rounded-2xl p-4 shadow-2xl">
            <div className="grid gap-3">
              {navItems.map((n) => (
                <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="text-zinc-800 dark:text-zinc-200 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 px-3">
                  {n.label}
                </a>
              ))}
              <a href="#projects" onClick={() => setOpen(false)} className="flex items-center justify-center gap-2 text-sm px-3 py-2 rounded-xl bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 shadow">
                View Work <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}
