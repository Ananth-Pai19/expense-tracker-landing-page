import useFadeIn from '../hooks/useFadeIn'
import screenshot from "../assets/AppScreenshot2.png"

const features = [
  { title: 'Future Balance Projection', description: 'Predicts liquidity by subtracting Rent, EMI, SIPs, and Habits from your live balance.' },
  { title: 'Account-Based Dashboard', description: 'A swipeable interface to manage multiple bank accounts with integrated spending charts and physical card details.' },
  { title: 'Privacy-First Architecture', description: 'Your finances should be tracked only by you - no one else.' },
]

export default function Features() {
  const { sectionRef, sentinelRef, visible } = useFadeIn()

  return (
    <section ref={sectionRef} className="py-32 flex items-center px-8 md:px-20 gap-16">

      {/* Left: text */}
      <div
        className="flex-1 flex flex-col gap-10"
        style={{
          transition: 'opacity 0.9s ease, transform 0.9s ease',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(24px)',
        }}
      >
        <p className="text-blue-300 font-semibold uppercase tracking-widest text-sm">Features</p>
        <h2 className="text-white font-bold text-4xl md:text-5xl leading-tight">
          Everything you need,<br />nothing you don't.
        </h2>
        <div className="flex flex-col gap-8">
          {features.map((f, i) => (
            <div key={i} className="flex gap-4 items-start">
              <div className="mt-1 w-2 h-2 rounded-full bg-blue-400 shrink-0" />
              <div>
                <h3 className="text-white font-semibold text-lg mb-1">{f.title}</h3>
                <p className="text-blue-200 text-base">{f.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right: image card */}
      <div
        className="flex-1 hidden md:flex items-center justify-center p-4" // Added a little padding just so it doesn't touch the screen edges
        style={{
          transition: 'opacity 0.9s ease 0.3s, transform 0.9s ease 0.3s',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(24px)',
        }}
      >
        {/* We removed the wrapper div. Styles are now directly on the image. */}
        <img
          src={screenshot}
          alt="App screenshot"
          className="w-full block rounded-2xl border border-blue-800"
          style={{
            boxShadow: '0 8px 40px 0 rgba(30, 80, 160, 0.45), 0 2px 8px 0 rgba(0,0,0,0.4)',
            // If your image file has a transparent background and relies on CSS for the dark color, 
            // you can safely add the background gradient directly to the image tag here:
            // background: 'linear-gradient(145deg, #002a4a, #001a33)'
          }}
        />
      </div>

      <div ref={sentinelRef} style={{ height: '1px' }} />
    </section>
  )
}