import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold transition-colors",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary-100 text-primary-800",
        accent: "border-transparent bg-accent-100 text-accent-700",
        flame: "border-transparent bg-flame-50 text-flame-700",
        outline: "border-ink/15 text-ink",
        dark: "border-white/10 bg-white/10 text-white backdrop-blur",
        success: "border-transparent bg-green-100 text-green-700",
      },
    },
    defaultVariants: { variant: "default" },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

/** Section eyebrow — CoolFix "•  OUR SERVICES" label style */
function SectionLabel({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("section-label", className)} {...props}>
      {children}
    </div>
  );
}

export { Badge, SectionLabel, badgeVariants };
