import React, { useRef, useEffect } from 'react';
import { Element } from 'react-scroll';
import { motion, useInView, useAnimationControls } from 'framer-motion';

interface SectionProps {
  id: string;
  title: string;
  content: string;
  children: React.ReactNode;
  titleClassName?: string;
  contentClassName?: string;
}

export const Section: React.FC<SectionProps> = ({ 
  id, 
  title, 
  content, 
  children, 
  titleClassName = "text-gray-800", 
  contentClassName = "text-gray-600" 
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimationControls();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <Element name={id} className="min-h-screen flex items-center justify-center bg-gray-50 py-20">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 50 }
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-center max-w-4xl mx-auto px-4"
      >
        <motion.h2
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 20 }
          }}
          className={`text-4xl font-bold mb-6 font-serif tracking-tight ${titleClassName}`}
        >
          {title}
        </motion.h2>
        <motion.p
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 20 }
          }}
          className={`text-xl font-light leading-relaxed mb-8 ${contentClassName}`}
        >
          {content}
        </motion.p>
        {children}
      </motion.div>
    </Element>
  );
};
