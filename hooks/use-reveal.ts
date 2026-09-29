'use client';

import { useEffect } from 'react';

/**
 * useReveal - IntersectionObserver hook for scroll-triggered animations
 * Adds 'is-visible' class to elements with 'reveal' or 'stagger-children' class
 * when they enter the viewport.
 */
export function useReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal, .stagger-children');

    if (elements.length === 0) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      elements.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
