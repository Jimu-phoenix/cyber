import { useEffect, useRef, useState } from 'react';

// Custom hook for scroll reveal animations
export function useScrollReveal(options = {}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Optionally unobserve after becoming visible once
          if (options.once) {
            observer.unobserve(entry.target);
          }
        } else if (!options.once) {
          setIsVisible(false);
        }
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [options.threshold, options.rootMargin, options.once]);

  return [ref, isVisible];
}

// Reusable ScrollReveal component
export function ScrollReveal({ children, animationType = 'fade', delay = 0, once = true }) {
  const [ref, isVisible] = useScrollReveal({ once, threshold: 0.1 });

  const animations = {
    fade: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
    },
    slideUp: {
      initial: { opacity: 0, transform: 'translateY(50px)' },
      animate: { opacity: 1, transform: 'translateY(0)' },
    },
    slideLeft: {
      initial: { opacity: 0, transform: 'translateX(50px)' },
      animate: { opacity: 1, transform: 'translateX(0)' },
    },
    slideRight: {
      initial: { opacity: 0, transform: 'translateX(-50px)' },
      animate: { opacity: 1, transform: 'translateX(0)' },
    },
    scale: {
      initial: { opacity: 0, transform: 'scale(0.8)' },
      animate: { opacity: 1, transform: 'scale(1)' },
    },
  };

  const selectedAnimation = animations[animationType] || animations.fade;

  return (
    <div
      ref={ref}
      style={{
        ...selectedAnimation.initial,
        ...(isVisible ? selectedAnimation.animate : {}),
        transition: `all 0.6s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}