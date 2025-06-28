"use client";

import { useCallback } from 'react';

type ThemeType = 'primary' | 'accent';

export const useHoverTheme = (theme?: ThemeType) => {
  const onClick = useCallback(() => {
    if (!theme) return;
    document.documentElement.classList.remove(`theme-primary-hover`, `theme-accent-hover`);
    document.documentElement.classList.add(`theme-${theme}-hover`);
  }, [theme]);

  return { onClick };
};
