"use client";

import { useEffect } from 'react';

export function RainfallEffect() {
  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const rainfallContainer = document.createElement('div');
    rainfallContainer.id = 'rainfall-container';
    document.body.appendChild(rainfallContainer);

    const createRaindrop = () => {
      if (document.hidden) return; 

      const drop = document.createElement('div');
      drop.classList.add('constant-raindrop');
      
      const vw = window.innerWidth;
      drop.style.left = `${Math.random() * vw}px`;
      
      const duration = Math.random() * 1 + 0.5;
      drop.style.animationDuration = `${duration}s`;
      
      const delay = Math.random() * 5;
      drop.style.animationDelay = `${delay}s`;
      
      rainfallContainer.appendChild(drop);
      
      setTimeout(() => {
        drop.remove();
      }, (duration + delay) * 1000 + 100);
    };
    
    for(let i=0; i < 50; i++) {
        createRaindrop();
    }

    const intervalId = setInterval(createRaindrop, 100);

    return () => {
      clearInterval(intervalId);
      const container = document.getElementById('rainfall-container');
      if (container) {
        container.remove();
      }
    };
  }, []);

  return null;
}
