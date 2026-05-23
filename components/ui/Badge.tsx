import React from 'react';

interface BadgeProps {
  label: string;
  variant?: 'gold' | 'chocolate' | 'cream';
  size?: 'sm' | 'md';
  className?: string;
}

const variantClasses = {
  gold: 'bg-gold-300 text-chocolate-950',
  chocolate: 'bg-chocolate-800 text-cream-50',
  cream: 'bg-cream-100 text-charcoal border border-gold-400',
};

const sizeClasses = {
  sm: 'px-md py-xs text-xs font-medium rounded-sm',
  md: 'px-lg py-sm text-sm font-medium rounded-base',
};

export function Badge({
  label,
  variant = 'gold',
  size = 'sm',
  className = '',
}: BadgeProps) {
  return (
    <span
      className={`inline-block ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {label}
    </span>
  );
}
