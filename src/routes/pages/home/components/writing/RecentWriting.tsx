import { Button, Typography } from '@mui/material';
import BlogCard from '../../../../../components/cards/BlogCard';
import { ArrowForwardRounded } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import CenterWrapper from '../../../../../components/wrappers/CenterWrapper';
import { motion, useInView } from 'framer-motion'; // Import Framer Motion and useInView
import { useRef } from 'react';
import { blogData, BlogDataType } from '../../../../../components/data/blogData';

const RecentWriting = () => {
  const navigate = useNavigate();
  const ref = useRef(null); // Create a ref to observe visibility
  const isInView = useInView(ref, { once: true, margin: '-50px' }); // Trigger animation when the section enters the viewport

  const handleNavigation = () => {
    navigate('/blogs');
  };

  // Animation Variants
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
      {' '}
      {/* Attach the ref to observe visibility */}
      <motion.div
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'} // Trigger animation based on visibility
        variants={containerVariants}
      >
        <CenterWrapper widthPercentage={50}>
          <motion.div variants={itemVariants}>
            <Typography variant="h3">Recent Writings</Typography>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Typography className="py-3" variant="caption" color="textSecondary">
              Below is a selection of recent blogs that I've written.
            </Typography>
          </motion.div>
        </CenterWrapper>
        <CenterWrapper>
          <motion.div variants={containerVariants}>
            {blogData.slice(0, 2).map((element: BlogDataType) => (
              <motion.div variants={itemVariants}>
                <BlogCard element={element} />
              </motion.div>
            ))}
          </motion.div>
          <motion.div variants={itemVariants}>
            <Button onClick={handleNavigation} sx={{ my: 1 }} endIcon={<ArrowForwardRounded />} variant="contained">
              View more posts
            </Button>
          </motion.div>
        </CenterWrapper>
      </motion.div>
    </div>
  );
};

export default RecentWriting;
