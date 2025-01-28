import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // Import Framer Motion for animations

const NotFoundPage = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const linkVariants = {
    hover: {
      scale: 1.1, // Slight scaling on hover
      color: '#fbbf24', // Amber color on hover
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div
      style={{ textAlign: 'center', marginTop: '100px', height: '62vh' }}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Typography variant="h1" component={motion.div} whileHover={{ scale: 1.01 }}>
        404 - Page Not Found
      </Typography>
      <Typography variant="body1" component={motion.div} style={{ marginTop: '20px' }}>
        The page you are looking for does not exist.{' '}
        <motion.div variants={linkVariants} whileHover="hover" style={{ display: 'inline-block' }}>
          <Link to="/" style={{ color: '#fbbf24' }}>
            Go to Home
          </Link>
        </motion.div>
      </Typography>
    </motion.div>
  );
};

export default NotFoundPage;
