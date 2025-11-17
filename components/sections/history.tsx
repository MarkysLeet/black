'use client';

import { useDictionary } from '@/components/providers/language-provider';

export const HistorySection = () => {
  const { dictionary } = useDictionary();
  return (
    <section className="py-20">
      <div className="mx-auto max-w-4xl space-y-6 px-6 text-lg text-[#e5e5e5]/90">
        <h2 className="font-playfair text-4xl text-white">{dictionary.sections.history.title}</h2>
        {dictionary.sections.history.paragraphs.map((paragraph, index) => (
          <p key={index} className="leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
};
