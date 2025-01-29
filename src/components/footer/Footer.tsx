import { Divider, Link, Typography, useTheme } from '@mui/material';
import CenterWrapper from '../wrappers/CenterWrapper';
import { motion } from 'framer-motion';

const Footer = () => {
  const theme = useTheme();
  const linkVariants = {
    hover: {
      scale: 1.1,
      color: theme.palette.primary.main, // Use primary color for hover
      transition: { duration: 0.3 },
    },
  };

  return (
    <CenterWrapper>
      <Divider />
      <div
        className="py-11"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          // flexDirection: 'column',
          textAlign: 'center',
          padding: '20px 0px',
          gap: '10px',
        }}
      >
        <Typography
          variant="body2" // Smaller font size for better mobile readability
          sx={{ fontSize: { xs: '12px', sm: '14px', md: '16px' } }}
        >
          &copy; 2022 - 2024 / Nitin Sirsath
        </Typography>

        <motion.div variants={linkVariants} whileHover="hover">
          <Link
            href="https://github.com/NitinSirsath/minimal-portfolio"
            target="_blank" // Open link in a new tab
            rel="noopener noreferrer" // Security measure for external links
            sx={{
              color: theme.palette.primary.main,
              textDecoration: 'none',
              fontSize: { xs: '12px', sm: '14px', md: '16px' }, // Adjust font size for mobile
            }}
          >
            <Typography variant="body2" color="textSecondary">
              View Source
            </Typography>
          </Link>
        </motion.div>
      </div>
    </CenterWrapper>
  );
};

export default Footer;
