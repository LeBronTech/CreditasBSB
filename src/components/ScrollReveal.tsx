import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';

interface ScrollRevealProps {
  children: React.ReactNode;
  variant?: 'fade-up' | 'scale-blur' | 'slide-left' | 'slide-right' | 'glass-pop';
  delay?: number;
  duration?: number;
  className?: string;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  variant = 'fade-up',
  delay = 0,
  duration = 0.6,
  className = '',
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: '-50px' });

  const getVariants = () => {
    switch (variant) {
      case 'scale-blur':
        return {
          hidden: { opacity: 0, scale: 0.94, filter: 'blur(10px)' },
          visible: { opacity: 1, scale: 1, filter: 'blur(0px)' },
        };
      case 'slide-left':
        return {
          hidden: { opacity: 0, x: -35 },
          visible: { opacity: 1, x: 0 },
        };
      case 'slide-right':
        return {
          hidden: { opacity: 0, x: 35 },
          visible: { opacity: 1, x: 0 },
        };
      case 'glass-pop':
        return {
          hidden: { opacity: 0, scale: 0.9, y: 30, backdropFilter: 'blur(0px)' },
          visible: { opacity: 1, scale: 1, y: 0, backdropFilter: 'blur(16px)' },
        };
      case 'fade-up':
      default:
        return {
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 },
        };
    }
  };

  const variants = getVariants();

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1], // fluid cubic bezier
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
