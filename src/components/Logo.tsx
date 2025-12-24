import React from 'react';
import { cn } from '../lib/utils';

interface LogoProps {
  className?: string;
  variant?: 'default' | 'light'; // default = blue/dark for white bg, light = white for dark bg
  orientation?: 'vertical' | 'horizontal';
}

export const Logo = ({ className, variant = 'default', orientation = 'vertical' }: LogoProps) => {
  const primaryColor = variant === 'default' ? 'text-primary' : 'text-white';
  const textColor = variant === 'default' ? 'text-slate-900' : 'text-white';

  if (orientation === 'horizontal') {
    return (
      <div className={cn("flex items-center gap-2", className)}>
        <div className="relative flex items-center justify-center w-10 h-10">
          <span className={cn("font-serif text-3xl font-bold tracking-tighter absolute left-1/2 -translate-x-[65%]", primaryColor)}>S</span>
          <span className={cn("font-serif text-3xl font-bold tracking-tighter absolute left-1/2 -translate-x-[35%] z-10", primaryColor)}>M</span>
        </div>
        <span className={cn("font-sans text-xl font-bold tracking-tight", textColor)}>SellMentors</span>
      </div>
    );
  }

  return (
    <div className={cn("flex flex-col items-center leading-none", className)}>
      <div className="relative flex items-center justify-center h-12 w-16">
        <span className={cn("font-serif text-5xl font-bold tracking-tighter absolute left-1/2 -translate-x-[60%]", primaryColor)}>S</span>
        <span className={cn("font-serif text-5xl font-bold tracking-tighter absolute left-1/2 -translate-x-[35%] z-10", primaryColor)}>M</span>
      </div>
      <span className={cn("font-sans text-xl font-bold tracking-tight mt-1", textColor)}>SellMentors</span>
    </div>
  );
};
