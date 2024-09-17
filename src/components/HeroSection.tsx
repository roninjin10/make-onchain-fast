import { Link, Element } from 'react-scroll';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button"
import { copy } from '@/copy';

export const HeroSection = () => (
  <Element name="hero" className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-4 relative overflow-hidden">
    <div className="absolute inset-0 bg-black opacity-20 z-0"></div>
    <div className="relative z-10">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-5xl md:text-7xl font-bold mb-6 text-center font-serif tracking-tight leading-tight"
      >
        {copy.heroTitle}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-xl md:text-2xl mb-12 text-center max-w-2xl font-light leading-relaxed"
      >
        {copy.heroSubtitle}
      </motion.p>
      <Link to="demo" smooth={true} duration={500}>
        <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-100 transition-colors text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1">
          {copy.heroCTAButton}
        </Button>
      </Link>
    </div>
    <motion.div
      animate={{ y: [0, 10, 0] }}
      transition={{ repeat: Infinity, duration: 1.5 }}
      className="absolute bottom-8"
    >
      <ChevronDown size={32} className="text-white opacity-75" />
    </motion.div>
    <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent"></div>
  </Element>
);

