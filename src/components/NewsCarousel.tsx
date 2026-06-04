import { useEffect, useState, type FocusEvent } from 'react'
import styles from './NewsCarousel.module.css'

export type NewsSlide = {
  label: string
  title: string
  text: string
  image: string
  ctaLabel?: string
  ctaHref?: string
}

type NewsCarouselProps = {
  slides: NewsSlide[]
  autoPlayInterval?: number
  className?: string
  ariaLabel?: string
}

function wrapIndex(index: number, length: number) {
  return (index + length) % length
}

export function NewsCarousel({
  slides,
  autoPlayInterval = 5200,
  className = '',
  ariaLabel = 'Новости и акции',
}: NewsCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const hasSlides = slides.length > 0
  const hasMultipleSlides = slides.length > 1

  useEffect(() => {
    if (!hasMultipleSlides || isPaused) {
      return
    }

    const interval = window.setInterval(() => {
      setActiveIndex((index) => wrapIndex(index + 1, slides.length))
    }, autoPlayInterval)

    return () => window.clearInterval(interval)
  }, [autoPlayInterval, hasMultipleSlides, isPaused, slides.length])

  if (!hasSlides) {
    return null
  }

  const goToPrevious = () => setActiveIndex((index) => wrapIndex(index - 1, slides.length))
  const goToNext = () => setActiveIndex((index) => wrapIndex(index + 1, slides.length))
  const handleBlur = (event: FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setIsPaused(false)
    }
  }

  return (
    <div
      className={`${styles.carousel} ${className}`.trim()}
      aria-label={ariaLabel}
      onFocus={() => setIsPaused(true)}
      onBlur={handleBlur}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className={styles.viewport}>
        {slides.map((slide, index) => (
          <article
            className={`${styles.slide} ${index === activeIndex ? styles.slideActive : ''}`.trim()}
            aria-hidden={index !== activeIndex}
            key={slide.title}
          >
            <img className={styles.slideImage} src={slide.image} alt="" width="1200" height="640" loading="lazy" />
            <div className={styles.slideContent}>
              <span className={styles.label}>{slide.label}</span>
              <h3 className={styles.title}>{slide.title}</h3>
              <p className={styles.text}>{slide.text}</p>
              {slide.ctaHref && (
                <a className={styles.cta} href={slide.ctaHref}>
                  {slide.ctaLabel ?? 'Узнать подробнее'}
                </a>
              )}
            </div>
          </article>
        ))}
      </div>

      {hasMultipleSlides && (
        <div className={styles.controls} aria-label="Переключение новостей">
          <button className={styles.arrow} type="button" aria-label="Предыдущая новость" onClick={goToPrevious}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M15 5 8 12l7 7" />
            </svg>
          </button>
          <div className={styles.dots}>
            {slides.map((slide, index) => (
              <button
                className={`${styles.dot} ${index === activeIndex ? styles.dotActive : ''}`.trim()}
                type="button"
                key={slide.title}
                aria-label={`Показать новость ${index + 1}`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
          <button className={styles.arrow} type="button" aria-label="Следующая новость" onClick={goToNext}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="m9 5 7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </div>
  )
}
