import { Typography, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import CenterWrapper from '../../../../components/wrappers/CenterWrapper';

const SideHustlesProjects = () => {
  const theme = useTheme();

  return (
    <CenterWrapper>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <Typography variant="h3" sx={{ mb: 2 }}>
          Side Hustles & Projects 🚀
        </Typography>

        <motion.div initial="hidden" animate="visible" transition={{ staggerChildren: 0.2, duration: 0.6 }}>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              mb: 2,
              '&:hover': { color: theme.palette.primary.main, transition: 'color 0.3s ease' },
            }}
          >
            My goal isn’t to build **B2C solutions** that go viral overnight; I want to **solve real business problems** with
            **B2B solutions** that create long-term value.
          </Typography>

          <Typography
            variant="h6"
            color="textSecondary"
            sx={{
              fontWeight: 'bold',
              mt: 3,
              '&:hover': { color: theme.palette.primary.main, transition: 'color 0.3s ease' },
            }}
          >
            📈 Building for Businesses, Not Consumers
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              mb: 2,
              '&:hover': { color: theme.palette.primary.main, transition: 'color 0.3s ease' },
            }}
          >
            - I focus on **automation tools, workflow optimization, and scalable SaaS solutions.** - My **strength lies in
            identifying inefficiencies and building solutions** that reduce effort and improve operations. - Whether it’s
            **AI-powered analytics, smart automation, or infrastructure tools**, my goal is to **empower teams and businesses
            to function better**.
          </Typography>

          <Typography
            variant="h6"
            color="textSecondary"
            sx={{
              fontWeight: 'bold',
              mt: 3,
              '&:hover': { color: theme.palette.primary.main, transition: 'color 0.3s ease' },
            }}
          >
            🔍 The Mindset Behind It
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              mb: 2,
              '&:hover': { color: theme.palette.primary.main, transition: 'color 0.3s ease' },
            }}
          >
            I believe **execution beats ideas**. Rather than waiting for a “million-dollar idea,” I focus on **solving pain
            points with practical, high-impact solutions**. **Experimenting, learning, and refining** is the way forward.
          </Typography>
        </motion.div>
      </motion.div>
    </CenterWrapper>
  );
};

export default SideHustlesProjects;
