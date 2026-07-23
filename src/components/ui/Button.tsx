import React from 'react';
import { cn } from '../../lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'icon';
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', isLoading, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-black disabled:pointer-events-none disabled:opacity-50 uppercase tracking-wide',
          {
            'bg-text-primary text-white hover:bg-black/90': variant === 'primary',
            'bg-surface text-text-primary hover:bg-surface-soft': variant === 'secondary',
            'border border-border bg-transparent hover:bg-surface': variant === 'outline',
            'hover:bg-surface-soft text-text-primary': variant === 'ghost',
            'h-9 px-4 text-xs': size === 'sm',
            'h-11 px-6 text-xs': size === 'md',
            'h-14 px-8 text-sm': size === 'lg',
            'h-11 w-11': size === 'icon',
          },
          className
        )}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {isLoading ? (
          <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
        ) : null}
        {children}
      </button>
    );
  }
);
Button.displayName = 'Button';
