import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import CursorTrail from './components/CursorTrail'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-zinc-50 dark:from-zinc-950 dark:to-zinc-900 text-zinc-900 dark:text-white selection:bg-violet-500/20 selection:text-violet-600 dark:selection:text-violet-300">
      <Navbar />
      <CursorTrail />
      <main className="[scroll-behavior:smooth]">
        <Hero />
        <About />
        <Projects />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <footer className="py-10 text-center text-sm text-zinc-600 dark:text-zinc-400">
        © {new Date().getFullYear()} Astra — Designed & built with care.
      </footer>
    </div>
  )
}

export default App
