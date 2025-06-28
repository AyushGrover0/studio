"use client";

import { useHoverTheme } from "@/hooks/use-hover-theme";
import type React from "react";
import { cn } from "@/lib/utils";

export const ThemedContainer = ({ theme, children, className }: { theme: 'primary' | 'accent', children: React.ReactNode, className?: string }) => {
    const { onMouseEnter, onMouseLeave } = useHoverTheme(theme);

    return (
        <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className={cn(className)}>
            {children}
        </div>
    );
};
