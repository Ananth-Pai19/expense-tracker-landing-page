import { useEffect, useRef, useState } from 'react'

export default function useFadeIn() {
  const sectionRef = useRef(null)
  const sentinelRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 1 }
    )
    if (sentinelRef.current) observer.observe(sentinelRef.current)
    return () => observer.disconnect()
  }, [])

  return { sectionRef, sentinelRef, visible }
}