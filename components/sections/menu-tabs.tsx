'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { menuItems, type MenuCategory } from '@/data/menu';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { whatsAppLink } from '@/lib/utils';
import { useDictionary } from '@/components/providers/language-provider';

const categories: MenuCategory[] = ['appetizers', 'soups', 'russian', 'mediterranean', 'desserts', 'drinks'];

export const MenuTabs = () => {
  const { dictionary } = useDictionary();
  const [active, setActive] = useState<MenuCategory>('appetizers');

  const tabs = useMemo(
    () => [
      { key: 'appetizers', label: dictionary.menuPage.tabs.appetizers },
      { key: 'soups', label: dictionary.menuPage.tabs.soups },
      { key: 'russian', label: dictionary.menuPage.tabs.russian },
      { key: 'mediterranean', label: dictionary.menuPage.tabs.mediterranean },
      { key: 'desserts', label: dictionary.menuPage.tabs.desserts },
      { key: 'drinks', label: dictionary.menuPage.tabs.drinks },
    ],
    [dictionary]
  );

  return (
    <Tabs value={active} onValueChange={(value) => setActive(value as MenuCategory)}>
      <TabsList>
        {tabs.map((tab) => (
          <TabsTrigger key={tab.key} value={tab.key}>
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {categories.map((category) => (
        <TabsContent value={category} key={category}>
          <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
            {menuItems
              .filter((item) => item.category === category)
              .map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card-gold overflow-hidden rounded-[32px]"
                >
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-4 p-6">
                    <div>
                      <h3 className="font-playfair text-3xl italic text-white">{item.title}</h3>
                      <p className="mt-2 text-sm text-[#e5e5e5]/80">{item.description}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-semibold text-accent">{item.price}</span>
                      <Button
                        size="sm"
                        onClick={() => window.open(whatsAppLink(`Здравствуйте! Хочу заказать ${item.title}.`), '_blank')}
                      >
                        {dictionary.buttons.order}
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
};
