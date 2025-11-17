'use client';

import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { useDictionary } from '@/components/providers/language-provider';

export const ContactSection = () => {
  const { dictionary } = useDictionary();
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-accent">Contact</p>
          <h2 className="mt-4 font-playfair text-4xl text-white">{dictionary.sections.contact.title}</h2>
          <p className="mt-2 text-[#e5e5e5]/80">{dictionary.sections.contact.subtitle}</p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="card-gold rounded-[30px] p-8">
            <div className="flex items-center gap-3 text-accent">
              <Mail />
              <span>Email</span>
            </div>
            <p className="mt-4 text-lg text-white">{dictionary.sections.contact.email}</p>
          </div>
          <div className="card-gold rounded-[30px] p-8">
            <div className="flex items-center gap-3 text-accent">
              <Phone />
              <span>Phone</span>
            </div>
            <p className="mt-4 text-lg text-white">{dictionary.sections.contact.phone}</p>
          </div>
          <div className="card-gold rounded-[30px] p-8">
            <div className="flex items-center gap-3 text-accent">
              <Clock />
              <span>Hours</span>
            </div>
            <p className="mt-4 text-lg text-white">10:00 – 00:00</p>
          </div>
        </div>
        <div className="mt-10 grid gap-8 lg:grid-cols-[2fr,1fr]">
          <div className="overflow-hidden rounded-[30px]">
            <iframe
              title="Black Island Map"
              src="https://www.google.com/maps?q=Liman%2C%20Bo%C4%9Fa%C3%A7ay%20Cd.%20Yasemin%20Apartman%C4%B1%20No%3A17%20%2F%20B%20D%3A1%2C%2007130%20Konyaalt%C4%B1%2FAntalya&output=embed"
              width="100%"
              height="500"
              className="w-full border-0"
              style={{ filter: 'grayscale(100%) contrast(120%) opacity(0.8)' }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="card-gold rounded-[30px] p-8">
            <div className="flex items-center gap-3 text-accent">
              <MapPin />
              <span>Address</span>
            </div>
            <p className="mt-4 whitespace-pre-line text-lg text-white">{dictionary.sections.contact.address}</p>
            <a
              href="https://www.google.com/maps?q=Liman%2C%20Bo%C4%9Fa%C3%A7ay%20Cd.%20Yasemin%20Apartman%C4%B1%20No%3A17%20%2F%20B%20D%3A1%2C%2007130%20Konyaalt%C4%B1%2FAntalya&output=embed"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center justify-center rounded-full border border-transparent bg-[#d4af37] px-6 py-3 text-sm font-medium uppercase tracking-[0.3em] text-black transition-colors hover:bg-white"
            >
              Маршрут
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
