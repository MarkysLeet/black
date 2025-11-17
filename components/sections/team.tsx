'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { teamMembers } from '@/data/team';
import { useDictionary } from '@/components/providers/language-provider';

export const TeamSection = () => {
  const { dictionary } = useDictionary();
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-accent">Team</p>
          <h2 className="mt-4 font-playfair text-4xl text-white">{dictionary.sections.team.title}</h2>
          <p className="mt-2 text-[#e5e5e5]/80">{dictionary.sections.team.subtitle}</p>
        </div>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card-gold rounded-[30px] p-8 text-center"
            >
              <div className="mx-auto h-32 w-32 overflow-hidden rounded-full border border-accent/30">
                <Image src={member.image} alt={member.name} width={128} height={128} className="h-full w-full object-cover" />
              </div>
              <p className="mt-6 font-playfair text-2xl text-white">{member.name}</p>
              <p className="text-sm uppercase tracking-[0.3em] text-accent">{member.role}</p>
              <p className="mt-4 text-sm text-[#e5e5e5]/80">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
