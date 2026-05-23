import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const sizeClasses = {
  sm: 'px-md py-sm text-sm',
  md: 'px-lg py-md text-base',
  lg: 'px-2xl py-lg text-lg',
};

const variantClasses = {
  primary: 'bg-chocolate-900 text-cream-50 hover:bg-chocolate-800 hover:shadow-md',
  secondary: 'bg-gold-400 text-chocolate-950 hover:bg-gold-500 hover:shadow-md',
  outline: 'border border-charcoal text-charcoal hover:bg-charcoal hover:text-cream-50',
};

export function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}: ButtonProps) {
  return (
    <button
      className={`btn-base ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    />
  );
}
