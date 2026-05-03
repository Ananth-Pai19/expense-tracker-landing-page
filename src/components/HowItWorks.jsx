import useFadeIn from '../hooks/useFadeIn'

const steps = [
  { number: '01', title: 'Origin', description: 'The app is just a click away. So click it.' },
  { number: '02', title: 'Sign Up', description: 'Link your accounts in under a minute. Get insights even quicker.' },
  { number: '03', title: 'Personalize', description: 'Highly flexible UI that allows you to track what matters.' },
  { number: '04', title: 'Get Insights', description: 'Visualize - Analyze - Revise.' },
]

export default function HowItWorks() {
  const { sectionRef, sentinelRef, visible } = useFadeIn()

  return (
    <section id="how-it-works" ref={sectionRef} className="py-32 flex items-center px-8 md:px-20 gap-16">

      <div className="flex-1 hidden md:flex items-center justify-center">
        <div
          className="w-full aspect-video rounded-2xl flex items-center justify-center text-blue-400 font-semibold text-sm border border-blue-800"
          style={{ backgroundColor: '#002a4a' }}
        >
          [ App screenshot / image ]
        </div>
      </div>

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