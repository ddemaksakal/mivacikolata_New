'use client';

import { motion } from 'framer-motion';
import { HeroSection } from '@/components/sections/HeroSection';
import { VitrineSection } from '@/components/sections/VitrineSection';
import { CraftsmanshipSection } from '@/components/sections/CraftsmanshipSection';


export default function Home() {
  const pageVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={pageVariants}
      className="w-full overflow-hidden"
    >
      {/* Hero Section */}
      <HeroSection />

      {/* Vitrine Section */}
      <VitrineSection />

      {/* Craftsmanship Section */}
      <CraftsmanshipSection />


    </motion.div>
  );
}
