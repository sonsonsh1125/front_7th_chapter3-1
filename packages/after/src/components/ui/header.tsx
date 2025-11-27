import * as React from "react";
import { cn } from "../../lib/utils";

export interface HeaderProps extends React.HTMLAttributes<HTMLElement> {}

export const Header = React.forwardRef<HTMLElement, HeaderProps>(
  ({ className, ...props }, ref) => {
    return (
      <header
        ref={ref}
        className={cn(
          "sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
          className
        )}
        {...props}
      >
        <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-xl">
              L
            </div>
            <div>
              <h1 className="text-lg font-bold leading-none text-foreground">
                Hanghae Company
              </h1>
              <p className="text-xs leading-none text-muted-foreground mt-0.5">
                Design System Migration Project
              </p>
            </div>
          </div>

          {/* User Info */}
          <div className="flex items-center gap-3">
            <div className="text-right">
              <div className="text-sm font-semibold text-foreground">
                Demo User
              </div>
              <div className="text-xs text-muted-foreground">
                demo@example.com
              </div>
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold">
              DU
            </div>
          </div>
        </div>
      </header>
    );
  }
);
Header.displayName = "Header";

