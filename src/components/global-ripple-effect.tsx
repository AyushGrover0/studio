"use client";

import { useEffect } from 'react';

export function GlobalRippleEffect() {
  useEffect(() => {
    const handleGlobalClick = (event: MouseEvent) => {
      // Prevent ripples on scrollbar clicks
      if (event.clientX >= document.documentElement.clientWidth || event.clientY >= document.documentElement.clientHeight) {
        return;
      }
      
      const rippleContainer = document.getElementById('ripple-container');
      if (rippleContainer) {
        const circle = document.createElement("span");
        
        const diameter = Math.max(window.innerWidth, window.innerHeight) * 2;
        const radius = diameter / 2;

        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${event.clientX - radius}px`;
        circle.style.top = `${event.clientY - radius}px`;
        circle.classList.add("ripple-screen");
        
        // Optional: remove previous ripple for a cleaner effect
        const existingRipple = rippleContainer.querySelector('.ripple-screen');
        if (existingRipple) {
          existingRipple.remove();
        }
        
        rippleContainer.appendChild(circle);

        setTimeout(() => {
          if (circle.parentElement) {
            circle.remove();
          }
        }, 1000);
      }
    };

    document.addEventListener('click', handleGlobalClick);

    return () => {
      document.removeEventListener('click', handleGlobalClick);
    };
  }, []);

  return null; // This component doesn't render anything
}
