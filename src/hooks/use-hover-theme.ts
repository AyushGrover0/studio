"use client";

import { useCallback } from 'react';

type ThemeType = 'primary' | 'accent';

export const useHoverTheme = (theme?: ThemeType) => {
  const onMouseEnter = useCallback(() => {
    if (!theme) return;
    document.documentElement.classList.add(`theme-${theme}-hover`);
  }, [theme]);

  const onMouseLeave = useCallback(() => {
    document.documentElement.classList.remove(`theme-primary-hover`, `theme-accent-hover`);
  }, []);

  return { onMouseEnter, onMouseLeave };
};
