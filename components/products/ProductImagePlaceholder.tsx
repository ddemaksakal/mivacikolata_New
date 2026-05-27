import React from 'react';

const categoryColors: Record<string, { bg: string; text: string; icon: string }> = {
  kuvertur: { bg: 'from-amber-100 to-amber-50', text: 'Kuvertür', icon: '🍫' },
  'dolgu-ganaj': { bg: 'from-orange-100 to-orange-50', text: 'Dolgu', icon: '🥜' },
  sos: { bg: 'from-rose-100 to-rose-50', text: 'Sos', icon: '🍓' },
  pralin: { bg: 'from-yellow-100 to-yellow-50', text: 'Pralin', icon: '✨' },
  kakao: { bg: 'from-zinc-100 to-zinc-50', text: 'Kakao', icon: '☕' },
};

export function ProductImagePlaceholder({ category }: { category: string }) {
  const colors = categoryColors[category] || categoryColors.kuvertur;

  return (
    <div
      className={`w-full h-full bg-gradient-to-br ${colors.bg} flex flex-col items-center justify-center`}
    >
      <div className="text-6xl mb-md opacity-50">{colors.icon}</div>
      <p className="text-xs font-sans text-gray-400 uppercase tracking-wider">
        Görsel Yakında
      </p>
    </div>
  );
}
