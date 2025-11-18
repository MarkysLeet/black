'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export const Preloader = () => {
  const [logoFade, setLogoFade] = useState(false);
  const [taglineVisible, setTaglineVisible] = useState(false);
  const [overlayFade, setOverlayFade] = useState(false);
  const [done, setDone] = useState(false);
  const timers = useRef<NodeJS.Timeout[]>([]);

  useEffect(() => {
    const progressTimer = setTimeout(() => {
      setTaglineVisible(true);
      requestAnimationFrame(() => setLogoFade(true));
      const overlayTimer = setTimeout(() => setOverlayFade(true), 600);
      const completeTimer = setTimeout(() => setDone(true), 1000);
      timers.current.push(overlayTimer, completeTimer);
    }, 1800);

    timers.current.push(progressTimer);

    return () => {
      timers.current.forEach((timer) => clearTimeout(timer));
    };
  }, []);

  if (done) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: overlayFade ? 0 : 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-black"
    >
      <div className="flex flex-col items-center gap-3">
        <motion.div
          className="flex h-24 w-24 items-center justify-center rounded-full border border-accent/40"
          animate={{ opacity: logoFade ? 0 : 1 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://i.imgur.com/qyalAmQ.png"
            alt="Black Island logo"
            className="h-24 w-24 object-contain"
          />
        </motion.div>
        <div className="text-center">
          <p className="font-playfair text-2xl text-white">Black Island</p>
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: taglineVisible ? 1 : 0, y: taglineVisible ? 0 : 6 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="text-sm uppercase tracking-[0.5em] text-white/70"
          >
            Chill out place
          </motion.p>
        </div>
      </div>
      <motion.div
        className="absolute bottom-0 left-0 h-1 bg-accent"
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        transition={{ duration: 1.8, ease: 'easeInOut' }}
      />
    </motion.div>
  );
};
