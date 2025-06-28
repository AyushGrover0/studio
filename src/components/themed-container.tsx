"use client";

import { useHoverTheme } from "@/hooks/use-hover-theme";
import type React from "react";
import { cn } from "@/lib/utils";

export const ThemedContainer = ({ theme, children, className }: { theme: 'primary' | 'accent', children: React.ReactNode, className?: string }) => {
    const { onClick } = useHoverTheme(theme);

    return (
        <div onClick={onClick} className={cn(className)}>
            {children}
        </div>
    );
};
