import { IconButton, ListItem, Stack, Tooltip, Typography, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import globalStyle from '../../style/globalStyle.module.css';
import CenterWrapper from '../wrappers/CenterWrapper';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import useThemeStore from '../../store/theme/themeStore';
import { useMediaQuery } from '@mui/material';

const Navbar = () => {
  const theme = useTheme(); // Access MUI theme
  const { darkMode, toggleDarkMode } = useThemeStore();

  // Media Queries for Font & Spacing Adjustments
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Mobile screens

  // Animation variants
  const navbarVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const linkVariants = {
    hover: {
      scale: 1.1,
      color: theme.palette.primary.main, // Use primary color for hover
      transition: { duration: 0.3 },
    },
  };

  const mainLogoVariant = {
    hover: {
      scale: 1.2,
      color: theme.palette.secondary.main, // Use secondary color for hover
      transition: { duration: 0.4 },
    },
  };

  const handleThemeMode = () => {
    toggleDarkMode();
  };

  return (
    <CenterWrapper>
      <motion.div
        variants={navbarVariants}
        initial="hidden"
        animate="visible"
        style={{
          marginTop: isMobile ? '10px' : '20px', // Smaller margin on mobile
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: isMobile ? '8px 15px' : '10px 20px', // Reduce padding for smaller screens
          background:
            theme.palette.mode === 'dark'
              ? 'rgba(33, 33, 33, 0.9)' // Dark mode background
              : 'rgba(245, 245, 245, 0.8)', // Light mode background
          color: theme.palette.text.primary, // Use text color from the theme
          backdropFilter: 'blur(10px)',
          borderRadius: '8px',
          border: `1px solid ${theme.palette.divider}`, // Divider color from theme
        }}
      >
        {/* Logo */}
        <Typography
          variant={isMobile ? 'h5' : 'h3'} // Smaller font size for mobile
          className={globalStyle.ibmPlexMonoNormal}
          sx={{ flexGrow: isMobile ? 1 : 0 }}
        >
          <motion.div variants={mainLogoVariant} whileHover="hover">
            <Link
              to="/"
              style={{
                textDecoration: 'none',
                color: theme.palette.text.primary, // Dynamically adjust text color
                fontSize: isMobile ? '1.4rem' : '2rem', // Reduce size for small screens
              }}
            >
              ns
            </Link>
          </motion.div>
        </Typography>

        {/* Navigation Links */}
        <Stack
          direction="row"
          spacing={isMobile ? 1 : 2} // Reduce spacing between links
          sx={{
            alignItems: 'center',
          }}
        >
          {['Explore', 'Experiences', 'About'].map(text => (
            <ListItem key={text} disablePadding className={globalStyle.ibmPlexMonoNormal}>
              <motion.div variants={linkVariants} whileHover="hover">
                <Link
                  to={`/${text.toLowerCase()}`}
                  style={{
                    textDecoration: 'none',
                    fontSize: isMobile ? '0.85rem' : '1rem', // Adjust font size dynamically
                    color: theme.palette.text.primary, // Dynamically adjust link color
                  }}
                >
                  {text}
                </Link>
              </motion.div>
            </ListItem>
          ))}

          {/* Theme Toggle Button */}
          <Tooltip enterDelay={500} leaveDelay={300} title={darkMode ? 'Turn on light mode' : 'Turn on dark mode'}>
            <IconButton onClick={handleThemeMode} color="inherit" sx={{ fontSize: isMobile ? '1rem' : '1.2rem' }}>
              {darkMode ? <DarkModeIcon fontSize="small" /> : <LightModeIcon fontSize="small" />}
            </IconButton>
          </Tooltip>
        </Stack>
      </motion.div>
    </CenterWrapper>
  );
};

export default Navbar;
