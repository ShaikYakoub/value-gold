"use client";

import { useEffect, useState, useRef } from "react";

const slides = [
  { id: 1, title: "Slide 1", color: "from-primary to-accent" },
  { id: 2, title: "Slide 2", color: "from-accent to-primary" },
  { id: 3, title: "Slide 3", color: "from-primary to-secondary" },
  { id: 4, title: "Slide 4", color: "from-secondary to-accent" },
  { id: 5, title: "Slide 5", color: "from-accent to-primary" },
];

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      // Swiped left
      goToNext();
    } else if (touchEndX.current - touchStartX.current > 50) {
      // Swiped right
      goToPrevious();
    }
  };

  return (
    <section 
      className="no-bottom-radius relative w-full h-[500px] overflow-hidden bg-white dark:bg-black"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className={`w-full h-full bg-gradient-to-br ${slide.color} flex items-center justify-center`}
            >
              <div className="text-center text-primary-foreground">
                <div className="text-6xl mb-4">🖼️</div>
                <h2 className="text-4xl font-bold mb-2">{slide.title}</h2>
                <p className="text-lg opacity-90">[Image Placeholder]</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-transparent hover:bg-black/10 dark:hover:bg-white/10 transition-colors group"
        aria-label="Previous slide"
      >
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-transparent hover:bg-black/10 dark:hover:bg-white/10 transition-colors group"
        aria-label="Next slide"
      >
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex
                ? "bg-blue-500 dark:bg-amber-400 w-8"
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}


