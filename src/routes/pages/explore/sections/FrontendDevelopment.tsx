import { Typography, Divider, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import CenterWrapper from '../../../../components/wrappers/CenterWrapper';
const FrontendDevelopment = () => {
  const theme = useTheme();

  return (
    <CenterWrapper>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <Typography variant="h3" sx={{ mb: 2 }}>
          Frontend Development & My Approach 🎨💻
        </Typography>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              mb: 2,
              '&:hover': { color: theme.palette.primary.main, transition: 'color 0.3s ease' },
            }}
          >
            I love **building frontends that are highly optimized, scalable, and delightful to use**. My focus is not just on
            UI, but also on the **technical aspects** like **state management, performance optimization, and best
            practices**.
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              mb: 2,
              '&:hover': { color: theme.palette.primary.main, transition: 'color 0.3s ease' },
            }}
          >
            While I appreciate great design, my **true strength** lies in **engineering the frontend experience**—making sure
            everything runs smoothly, stays **efficient**, and scales **effortlessly**.
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              mb: 2,
              '&:hover': { color: theme.palette.primary.main, transition: 'color 0.3s ease' },
            }}
          >
            I work extensively with **React, TypeScript, Zustand, MUI, and Tailwind**, always pushing the boundaries of
            what’s possible in frontend development.
          </Typography>
        </motion.div>
      </motion.div>

      <Divider sx={{ my: 4 }} />
    </CenterWrapper>
  );
};

export default FrontendDevelopment;
