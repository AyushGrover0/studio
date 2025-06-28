"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "relative overflow-hidden inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border bg-background",
  {
    variants: {
      variant: {
        default:
          "border-accent/50 text-accent hover:text-accent-foreground",
        destructive:
          "border-destructive/50 text-destructive hover:text-destructive-foreground",
        outline:
          "border-input text-foreground hover:text-accent-foreground",
        secondary:
          "border-secondary/50 text-secondary-foreground hover:text-secondary-foreground",
        ghost: "border-transparent hover:text-accent-foreground",
        link: "border-transparent text-accent underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  glow?: 'primary' | 'accent'
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, glow, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    const localRef = React.useRef<HTMLButtonElement>(null);

    React.useImperativeHandle(ref, () => localRef.current!);
    
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      const element = localRef.current;
      if (!element) return;
      
      if (!element.classList.contains('button-breaking')) {
        element.classList.add('button-breaking');
      }

      const drop = document.createElement('div');
      drop.classList.add('raindrop');
      drop.style.left = `${event.clientX}px`;
      drop.style.top = `${event.clientY}px`;
      
      document.body.appendChild(drop);

      setTimeout(() => {
          drop.remove();
      }, 2000);
      
      // If the original component has an onClick, call it
      if (props.onClick) {
        props.onClick(event);
      }
    };
    
    React.useEffect(() => {
        const element = localRef.current;
        if (!element) return;

        const handleMouseEnter = () => {
            if (element.classList.contains('header-distort')) {
                return;
            }
            element.classList.add('header-distort');
        };

        const handleAnimationEnd = (e: AnimationEvent) => {
            if (e.animationName === 'header-distortion') {
              element.classList.remove('header-distort');
            }
            if (e.animationName === 'break-and-reform') {
              element.classList.remove('button-breaking');
            }
        };

        element.addEventListener('mouseenter', handleMouseEnter);
        element.addEventListener('animationend', handleAnimationEnd);

        return () => {
            if (element) {
              element.removeEventListener('mouseenter', handleMouseEnter);
              element.removeEventListener('animationend', handleAnimationEnd);
            }
        };
    }, []);

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }), glow && `neon-glow-${glow}`)}
        ref={localRef}
        {...props}
        onClick={handleClick}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
