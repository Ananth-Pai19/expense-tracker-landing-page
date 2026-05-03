import { useEffect, useState } from 'react'

export default function Hero() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  // 1. Create the scroll function
  const scrollToHowItWorks = () => {
    const getStarted = document.getElementById('how-it-works')
    if (getStarted) {
      getStarted.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/underwater_animation.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-[#001a33]/60 z-0 pointer-events-none" />

      <div
        className="relative z-10"
        style={{
          transition: 'opacity 1s ease, transform 1s ease',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(24px)',
        }}
      >
        <p className="text-blue-300 font-semibold uppercase tracking-widest text-sm mb-4">
          SpendWise Expense Tracker 
        </p>
        <h1 className="text-white font-bold text-5xl md:text-7xl leading-tight mb-6 drop-shadow-lg">
          Track Expenses.<br />Your Way.
        </h1>
        <p className="text-blue-200 text-lg md:text-xl max-w-xl mx-auto mb-10 drop-shadow-md">
          Private. Personal. Powerful. Like finance tracking should have been all along.
        </p>
        {/* 2. Attach the function to the button's onClick event */}
        <div className="flex flex-col items-center gap-4">
          <button className="bg-white text-[#002244] font-bold px-8 py-4 rounded-full text-lg hover:bg-blue-100 transition-colors">
            Dive In
          </button>
          <a
            href="https://lambent-muffin-8e4506.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white text-white font-semibold px-6 py-3 rounded-full text-base hover:bg-white hover:text-[#002244] transition-colors"
          >
            View Demo →
          </a>
        </div>
        
      </div>
    </section>
  )
}