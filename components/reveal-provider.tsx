'use client';

import React, { useEffect } from 'react';

/**
 * RevealProvider - Initializes IntersectionObserver for scroll-triggered animations
 * Adds 'is-visible' class to elements with 'reveal' or 'stagger-children' class
 */
export function RevealProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const initObserver = () => {
      const elements = document.querySelectorAll('.reveal, .stagger-children');

      if (elements.length === 0) return;

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
          threshold: 0.1,
          rootMargin: '0px 0px -40px 0px',
        }
      );

      elements.forEach((el) => observer.observe(el));

      return observer;
    };

    // Initialize after a brief delay to ensure DOM is ready
    const timer = setTimeout(() => {
      const observer = initObserver();

      // Re-initialize when new content might be added
      const reinitObserver = new MutationObserver(() => {
        if (observer) observer.disconnect();
        initObserver();
      });

      reinitObserver.observe(document.body, { childList: true, subtree: true });

      return () => {
        clearTimeout(timer);
        if (observer) observer.disconnect();
        reinitObserver.disconnect();
      };
    }, 50);

    return () => clearTimeout(timer);
  }, []);

  return <>{children}</>;
}
