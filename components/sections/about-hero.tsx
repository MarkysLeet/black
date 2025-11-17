'use client';

import Image from 'next/image';
import { useDictionary } from '@/components/providers/language-provider';

export const AboutHero = () => {
  const { dictionary } = useDictionary();
  return (
    <div className="relative mb-16 overflow-hidden rounded-[40px]">
      <Image
        src="https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=1400&q=80"
        alt="Команда Black Island"
        width={1600}
        height={900}
        className="h-[60vh] w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/30" />
      <div className="absolute bottom-10 left-10 max-w-2xl text-white">
        <p className="text-sm uppercase tracking-[0.4em] text-accent">About</p>
        <h1 className="mt-4 font-playfair text-5xl">Black Island Cafe Restaurant</h1>
        <p className="mt-4 text-lg text-white/80">{dictionary.aboutPage.story}</p>
      </div>
    </div>
  );
};
