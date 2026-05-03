import useFadeIn from '../hooks/useFadeIn'

const FORM_LINK = 'https://forms.gle/CCW2ud7QMZwqwSbo8'

export default function SurveyForm() {
  const { sectionRef, sentinelRef, visible } = useFadeIn()

  return (
    <section ref={sectionRef} className="py-5 flex flex-col items-center justify-center text-center px-6">
      <div
        style={{
          transition: 'opacity 0.9s ease, transform 0.9s ease',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(24px)',
        }}
      >
        <p className="text-blue-200 text-lg md:text-xl max-w-xl mx-auto mb-8">
          Like what you see? Fill the survey form below so that we can make it even better.
        </p>
        <a
          href={FORM_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-[#002244] font-bold px-8 py-4 rounded-full text-lg hover:bg-blue-100 transition-colors inline-block"
        >
          Fill the Survey
        </a>
      </div>
      <div ref={sentinelRef} style={{ height: '1px' }} />
    </section>
  )
}