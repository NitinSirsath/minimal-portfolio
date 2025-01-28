import { Typography } from '@mui/material';
import BlogCard from '../../../components/cards/BlogCard';
import CenterWrapper from '../../../components/wrappers/CenterWrapper';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { blogData, BlogDataType } from '../../../components/data/blogData';

const BlogPage = () => {
  const ref = useRef(null); // Create a ref to observe visibility
  const isInView = useInView(ref, { once: true, margin: '-50px' }); // Trigger animation when the section enters the viewport

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.2, duration: 0.8 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  return (
    <div ref={ref}>
      <motion.div
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'} // Trigger animation based on visibility
        variants={containerVariants}
      >
        <CenterWrapper widthPercentage={70}>
          <motion.div variants={itemVariants}>
            <Typography variant="h3" sx={{ my: 2 }}>
              Writings
            </Typography>
          </motion.div>
        </CenterWrapper>
        <CenterWrapper>
          <motion.div variants={containerVariants}>
            {blogData.map((element: BlogDataType) => (
              <motion.div variants={itemVariants}>
                <BlogCard element={element} />
              </motion.div>
            ))}
          </motion.div>
        </CenterWrapper>
      </motion.div>
    </div>
  );
};

export default BlogPage;
