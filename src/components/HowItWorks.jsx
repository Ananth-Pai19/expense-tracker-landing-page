import useFadeIn from '../hooks/useFadeIn'
import screenshot from '../assets/AppScreenshot3.png'

const steps = [
  { number: '01', title: 'Origin', description: 'The app is just a click away. So click it.' },
  { number: '02', title: 'Sign Up', description: 'Link your accounts in under a minute. Get insights even quicker.' },
  { number: '03', title: 'Personalize', description: 'Highly flexible UI that allows you to track what matters.' },
  { number: '04', title: 'Get Insights', description: 'Visualize - Analyze - Revise.' },
]

export default function HowItWorks() {
  const { sectionRef, sentinelRef, visible } = useFadeIn()

  return (
    <section id="how-it-works" ref={sectionRef} className="pt-8 pb-8 flex items-center px-8 md:px-20 gap-16">

      {/* Left: image card */}
      <div
        className="flex-1 hidden md:flex items-center justify-center"
        style={{
          transition: 'opacity 0.9s ease 0.3s, transform 0.9s ease 0.3s',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(24px)',
        }}
      >
        <div
          className="rounded-2xl p-2 border border-blue-800"
          style={{
            background: 'linear-gradient(145deg, #002a4a, #001a33)',
            boxShadow: '0 8px 40px 0 rgba(30, 80, 160, 0.45), 0 2px 8px 0 rgba(0,0,0,0.4)',
          }}
        >
          <img
            src={screenshot}
            alt="App screenshot"
            className="rounded-xl w-full block"
          />
        </div>
      </div>

      {/* Right: steps */}
      <div
        className="flex-1 flex flex-col gap-10"
        style={{
          transition: 'opacity 0.9s ease, transform 0.9s ease',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(24px)',
        }}
      >
        <p className="text-blue-300 font-semibold uppercase tracking-widest text-sm">How it works</p>
        <h2 className="text-white font-bold text-4xl md:text-5xl leading-tight">
          Simple to start.<br />Phenomenal to use.
        </h2>
        <div className="flex flex-col gap-10">
          {steps.map((step, i) => (
            <div key={i} className="flex gap-6 items-start">
              <span className="text-blue-400 font-bold text-3xl leading-none">{step.number}</span>
              <div>
                <h3 className="text-white font-semibold text-lg mb-1">{step.title}</h3>
                <p className="text-blue-200 text-base">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div ref={sentinelRef} style={{ height: '1px' }} />
    </section>
  )
}