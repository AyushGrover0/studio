"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "relative overflow-hidden inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border bg-transparent backdrop-blur-2xl water-effect",
  {
    variants: {
      variant: {
        default:
          "border-primary/50 text-primary hover:text-primary-foreground hover:bg-primary/80",
        destructive:
          "border-destructive/50 text-destructive hover:text-destructive-foreground hover:bg-destructive/80",
        outline:
          "border-input text-foreground hover:bg-accent/70 hover:text-accent-foreground",
        secondary:
          "border-secondary/50 text-secondary-foreground hover:bg-secondary/80",
        ghost: "border-transparent hover:bg-accent/70 hover:text-accent-foreground",
        link: "border-transparent text-primary underline-offset-4 hover:underline",
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
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    const localRef = React.useRef<HTMLButtonElement>(null);

    React.useImperativeHandle(ref, () => localRef.current!);
    
    React.useEffect(() => {
        const element = localRef.current;
        if (!element) return;

        const triggerDistortion = () => {
            if (element.classList.contains('header-distort')) {
                return;
            }
            element.classList.add('header-distort');
        };

        const handleClick = (event: MouseEvent) => {
            triggerDistortion();

            const drop = document.createElement('div');
            drop.classList.add('raindrop');
            drop.style.left = `${event.clientX}px`;
            drop.style.top = `${event.clientY}px`;
            
            document.body.appendChild(drop);

            setTimeout(() => {
                drop.remove();
            }, 2000);
        };

        const handleAnimationEnd = () => {
            element.classList.remove('header-distort');
        };

        element.addEventListener('mouseenter', triggerDistortion);
        element.addEventListener('click', handleClick);
        element.addEventListener('animationend', handleAnimationEnd);

        return () => {
            if (element) {
              element.removeEventListener('mouseenter', triggerDistortion);
              element.removeEventListener('click', handleClick);
              element.removeEventListener('animationend', handleAnimationEnd);
            }
        };
    }, []);

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={localRef}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
