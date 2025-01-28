import { IconButton, ListItem, Stack, Tooltip, Typography } from '@mui/material';
import { Link } from 'react-router-dom'; // Import Link if using react-router
import { motion } from 'framer-motion'; // Import Framer Motion
import globalStyle from '../../style/globalStyle.module.css';
import CenterWrapper from '../wrappers/CenterWrapper';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import useThemeStore from '../../store/theme/themeStore';

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useThemeStore();
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
      color: '#fbbf24', // Change color on hover (Amber-400)
      transition: { duration: 0.3 },
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
          marginTop: '20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '10px 20px', // Add some padding for better spacing
          background: 'rgba(149, 146, 146, 0.118)', // Semi-transparent background
          backdropFilter: 'blur(10px)', // Apply blur effect
          borderRadius: '8px', // Optional for rounded corners
        }}
      >
        <Typography variant="h3" className={globalStyle.ibmPlexMonoNormal}>
          <Link
            to="/"
            style={{
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            ns
          </Link>
        </Typography>
        <Stack direction="row" spacing={2}>
          {['Explore', 'Contact', 'About'].map(text => (
            <ListItem key={text} disablePadding className={globalStyle.ibmPlexMonoNormal}>
              <motion.div variants={linkVariants} whileHover="hover">
                <Link
                  to={`/${text.toLowerCase()}`}
                  style={{
                    textDecoration: 'none',
                    color: 'inherit',
                  }}
                >
                  {text}
                </Link>
              </motion.div>
            </ListItem>
          ))}
          {darkMode ? (
            <Tooltip enterDelay={1000} leaveDelay={500} title="Turn On light mode">
              <IconButton onClick={handleThemeMode}>
                <DarkModeIcon />
              </IconButton>
            </Tooltip>
          ) : (
            <Tooltip enterDelay={1000} leaveDelay={500} title="Turn On dark mode">
              <IconButton onClick={handleThemeMode}>
                <LightModeIcon />
              </IconButton>
            </Tooltip>
          )}
        </Stack>
      </motion.div>
    </CenterWrapper>
  );
};

export default Navbar;
