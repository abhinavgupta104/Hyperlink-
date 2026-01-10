import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { resolvedTheme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "relative w-10 h-10 rounded-lg flex items-center justify-center",
        "bg-secondary hover:bg-secondary/80 transition-all duration-300",
        "border border-border hover:border-accent/50",
        "group overflow-hidden",
        className
      )}
      aria-label={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} mode`}
    >
      <div className="relative w-5 h-5">
        <Sun 
          className={cn(
            "w-5 h-5 absolute inset-0 text-accent transition-all duration-500",
            resolvedTheme === "dark" 
              ? "rotate-0 scale-100 opacity-100" 
              : "rotate-90 scale-0 opacity-0"
          )} 
        />
        <Moon 
          className={cn(
            "w-5 h-5 absolute inset-0 text-accent transition-all duration-500",
            resolvedTheme === "dark" 
              ? "-rotate-90 scale-0 opacity-0" 
              : "rotate-0 scale-100 opacity-100"
          )} 
        />
      </div>
      
      {/* Glow effect on hover */}
      <div className={cn(
        "absolute inset-0 rounded-lg transition-opacity duration-300 opacity-0 group-hover:opacity-100",
        "bg-gradient-to-r from-accent/10 via-brand-magenta/10 to-brand-gold/10"
      )} />
    </button>
  );
}
