import { useEffect, useState } from 'react'

export default function Hero() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center text-center px-6"
      style={{ backgroundColor: '#002244' }}
    >
      <div
        style={{
          transition: 'opacity 1s ease, transform 1s ease',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(24px)',
        }}
      >
        <p className="text-blue-300 font-semibold uppercase tracking-widest text-sm mb-4">
          Placeholder tagline
        </p>
        <h1 className="text-white font-bold text-5xl md:text-7xl leading-tight mb-6">
          Placeholder Headline.<br />Goes Here.
        </h1>
        <p className="text-blue-200 text-lg md:text-xl max-w-xl mx-auto mb-10">
          Placeholder subheadline — one or two sentences describing what the app does and who it's for.
        </p>
        <button className="bg-white text-[#002244] font-bold px-8 py-4 rounded-full text-lg hover:bg-blue-100 transition-colors">
          Get Started Free
        </button>
      </div>
    </section>
  )
}