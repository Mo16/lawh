import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "light" | "dark";
  showWordmark?: boolean;
}

export function Logo({ className, variant = "dark", showWordmark = true }: LogoProps) {
  const textColor = variant === "light" ? "text-white" : "text-ink";
  const subColor = variant === "light" ? "text-primary-200" : "text-primary-600";

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className="relative h-14 w-14 shrink-0 sm:h-16 sm:w-16">
        <Image
          src="/assets/img/logo.png"
          alt="LA Water Heaters logo"
          width={500}
          height={500}
          priority
          className="h-full w-full object-contain"
        />
      </div>

      {showWordmark && (
        <div className="leading-none">
          <div className={cn("font-wordmark text-xl uppercase tracking-tight sm:text-2xl", textColor)}>
            LA Water Heaters
          </div>
        </div>
      )}
    </div>
  );
}
