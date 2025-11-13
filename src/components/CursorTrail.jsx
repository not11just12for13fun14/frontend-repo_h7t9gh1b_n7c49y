import { useEffect, useState } from 'react'
import { motion, useSpring } from 'framer-motion'

export default function CursorTrail() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const springX = useSpring(-100, { stiffness: 300, damping: 30, mass: 0.4 })
  const springY = useSpring(-100, { stiffness: 300, damping: 30, mass: 0.4 })

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY })
      springX.set(e.clientX)
      springY.set(e.clientY)
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [springX, springY])

  return (
    <>
      {/* Soft glow */}
      <motion.div
        className="pointer-events-none fixed z-[55] hidden md:block"
        style={{ left: springX, top: springY }}
      >
        <div className="-translate-x-1/2 -translate-y-1/2 h-16 w-16 rounded-full bg-gradient-to-br from-sky-400/30 to-violet-500/30 blur-2xl" />
      </motion.div>
      {/* Tiny core */}
      <motion.div
        className="pointer-events-none fixed z-[56] hidden md:block mix-blend-screen"
        style={{ left: pos.x, top: pos.y }}
      >
        <div className="-translate-x-1/2 -translate-y-1/2 h-2.5 w-2.5 rounded-full bg-white/80 shadow-[0_0_20px_6px_rgba(99,102,241,0.35)]" />
      </motion.div>
    </>
  )
}
