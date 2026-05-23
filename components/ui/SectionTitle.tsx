import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export function SectionTitle({
  title,
  subtitle,
  description,
  centered = true,
  className = '',
}: SectionTitleProps) {
  return (
    <div className={`space-y-md ${centered ? 'text-center' : ''} ${className}`}>
      {subtitle && (
        <p className="text-sm font-sans uppercase tracking-widest text-gold-400">
          {subtitle}
        </p>
      )}
      <h2 className="heading-md">{title}</h2>
      {description && (
        <p className="body-lg max-w-2xl mx-auto text-gray-600">{description}</p>
      )}
    </div>
  );
}
