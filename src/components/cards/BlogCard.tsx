import { ArrowForward } from '@mui/icons-material';
import { Box, IconButton, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const BlogCard = () => {
  // Animation Variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  const hoverEffect = {
    whileHover: { scale: 1.02 },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={hoverEffect.whileHover}
      style={{
        marginBottom: '16px',
        borderRadius: '8px',
        overflow: 'hidden',
        transition: 'all 0.3s ease-in-out',
      }}
    >
      <Box
        sx={{
          padding: '15px 20px',
          borderBottom: '1px solid',
          borderColor: 'divider',
          // borderRadius: '8px',
          // backgroundColor: 'background.paper',
        }}
      >
        <Box className="flex gap-2 align-top" sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'text.primary' }}>
              Getting Started with React: A Beginner’s Practice Session
            </Typography>
            <Typography color="text.secondary" variant="caption">
              Published on May 21, 2024
            </Typography>
            <Typography sx={{ my: 1, color: 'text.secondary' }} variant="body2">
              Quick Approach to getting started with ReactJS
            </Typography>
          </Box>
          <Box>
            <IconButton
            // sx={{
            //   '&:hover': {
            //     backgroundColor: 'primary.dark', // Light hover effect on the icon button
            //   },
            // }}
            >
              <ArrowForward color="primary" />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
};

export default BlogCard;
