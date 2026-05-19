import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  // Pill-shaped buttons across the site
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        // DEFAULT — sky-blue primary CTA, used for every non-phone action (no glow)
        default:
          "bg-primary-600 text-white shadow-sm hover:bg-primary-700 hover:-translate-y-0.5 active:translate-y-0",
        // CALL — vibrant orange, used ONLY for phone-call CTAs (with attention-grabbing glow)
        call:
          "bg-cta-500 text-white shadow-cta hover:bg-cta-600 hover:-translate-y-0.5 active:translate-y-0",
        // Legacy "primary" alias kept pointing at blue (no glow)
        primary:
          "bg-primary-600 text-white shadow-sm hover:bg-primary-700 hover:-translate-y-0.5",
        // EMERGENCY — pure red, only for 24/7 emergency callouts
        emergency:
          "bg-emergency-600 text-white shadow-emergency animate-pulse-emergency hover:bg-emergency-700 hover:-translate-y-0.5",
        // Legacy "flame" — emergency red
        flame:
          "bg-emergency-600 text-white shadow-emergency animate-pulse-emergency hover:bg-emergency-700 hover:-translate-y-0.5",
        // Outline variants — light & dark contexts
        outline:
          "border-2 border-white/25 bg-white/5 text-white backdrop-blur hover:border-white/60 hover:bg-white/10",
        "outline-dark":
          "border-2 border-ink/15 bg-white text-ink hover:border-ink hover:bg-ink/5",
        ghost: "text-ink hover:bg-sky-100",
        white: "bg-white text-ink shadow-md hover:bg-sky-50",
        // Soft secondary pill — white pill with subtle ring
        soft: "bg-white text-ink ring-1 ring-ink/10 hover:bg-sky-50 hover:ring-ink/25",
      },
      size: {
        default: "h-11 px-5 text-sm",
        sm: "h-9 px-4 text-xs",
        lg: "h-12 px-7 text-base",
        xl: "h-14 px-8 text-base sm:text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
