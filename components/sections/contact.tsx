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
            <p className="mt-4 text-lg text-white">08:00 – 22:00</p>
          </div>
        </div>
        <div className="mt-10 grid gap-8 lg:grid-cols-[2fr,1fr]">
          <div className="overflow-hidden rounded-[30px]">
            <iframe
              title="Black Island Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3206.574301898339!2d30.633481176464666!3d36.85729127228373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c39160d0d8f5c9%3A0x7aaf8ba4a8988e85!2sKonyaalt%C4%B1%2C%20Antalya!5e0!3m2!1sru!2str!4v1712486400000!5m2!1sru!2str"
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
          </div>
        </div>
      </div>
    </section>
  );
};
