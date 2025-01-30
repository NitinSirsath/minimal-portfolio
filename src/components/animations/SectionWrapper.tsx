import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const SectionWrapper = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' }); // Section animates when 100px inside viewport

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      style={{ marginBottom: '80px' }} // Spacing between sections
    >
      {children}
    </motion.div>
  );
};

export default SectionWrapper;
