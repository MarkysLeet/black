'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const Preloader = () => {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setDone(true), 1800);
    return () => clearTimeout(timer);
  }, []);

  if (done) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: done ? 0 : 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-black"
    >
      <div className="flex flex-col items-center gap-4">
        <div className="flex h-24 w-24 items-center justify-center rounded-full border border-accent/40">
          <svg width="64" height="64" viewBox="0 0 24 24" stroke="#d4af37" fill="none" strokeWidth="1.2">
            <path d="M12 2v20" />
            <path d="M6 7c3 0 4-4 6-4s3 4 6 4" />
            <path d="M7 13c2 0 3-3 5-3s3 3 5 3" />
          </svg>
        </div>
        <p className="font-playfair text-2xl text-white">Black Island</p>
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
