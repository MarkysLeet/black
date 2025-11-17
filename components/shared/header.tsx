'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useDictionary } from '@/components/providers/language-provider';
import { whatsAppLink } from '@/lib/utils';
import { MobileMenu } from './mobile-menu';

const navLinks = [
  { href: '/', key: 'home' },
  { href: '/menu', key: 'menu' },
  { href: '/about', key: 'about' },
];

export const Header = () => {
  const { dictionary, setLocale, locale } = useDictionary();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = navLinks.map((link) => ({ href: link.href, label: dictionary.nav[link.key as keyof typeof dictionary.nav] }));

  return (
    <header
      className={`fixed left-0 top-0 z-40 w-full transition-all ${
        scrolled ? 'bg-[#0a0a0a]/80 backdrop-blur-xl shadow-lg shadow-black/60' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3 text-white">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-accent/50">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
              <path d="M12 2v20" />
              <path d="M6 7c3 0 4-4 6-4s3 4 6 4" />
              <path d="M7 13c2 0 3-3 5-3s3 3 5 3" />
            </svg>
          </div>
          <div>
            <p className="font-playfair text-2xl text-white">Black Island</p>
            <p className="text-xs tracking-[0.3em] text-accent">Cafe Restaurant</p>
          </div>
        </Link>
        <nav className="hidden items-center gap-10 text-sm uppercase tracking-[0.4em] text-white/70 lg:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-4 lg:flex">
          <div className="flex gap-2 text-xs uppercase tracking-[0.4em] text-white">
            {['ru', 'en'].map((lng) => (
              <button
                key={lng}
                onClick={() => setLocale(lng as 'ru' | 'en')}
                className={lng === locale ? 'text-accent' : 'text-white/60'}
              >
                {lng}
              </button>
            ))}
          </div>
          <Button
            size="sm"
            onClick={() =>
              window.open(whatsAppLink('Здравствуйте! Хочу забронировать стол в Black Island.'), '_blank')
            }
          >
            {dictionary.nav.booking}
          </Button>
        </div>
        <button className="lg:hidden" onClick={() => setMenuOpen(true)} aria-label="Open menu">
          <Menu className="h-8 w-8 text-white" />
        </button>
      </div>
      {mounted && (
        <MobileMenu
          open={menuOpen}
          onOpenChange={setMenuOpen}
          links={links}
          dictionary={dictionary}
          locale={locale}
          setLocale={setLocale}
        />
      )}
    </header>
  );
};
