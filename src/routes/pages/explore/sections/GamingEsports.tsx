import { Divider, Typography, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import CenterWrapper from '../../../../components/wrappers/CenterWrapper';

const GamingEsports = () => {
  const theme = useTheme();

  return (
    <CenterWrapper>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <Typography variant="h3" sx={{ mb: 2 }}>
          Gaming & Competitive Esports 🎮🔥
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
            Gaming isn’t just a hobby; it’s a **mental battle, a skill-driven discipline, and a test of strategy.** Whether
            it's **FIFA, CSGO, or an immersive story-driven game like GTA, Sekiro, or RDR**, each game offers a unique
            challenge.
          </Typography>

          <Typography
            variant="h5"
            sx={{
              fontWeight: 'bold',
              color: theme.palette.secondary.main,
              mt: 3,
              '&:hover': { color: theme.palette.primary.main, transition: 'color 0.3s ease' },
            }}
          >
            🎯 FIFA – My Top Competitive Game
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              mb: 2,
              '&:hover': { color: theme.palette.primary.main, transition: 'color 0.3s ease' },
            }}
          >
            FIFA demands **peak attention, precise control, and rapid adaptability**. It's not just about playing; it's about
            **reading your opponent, anticipating moves, and making split-second decisions**— much like **chess in
            real-time**. **Every pass, every dribble, every formation switch matters.**
          </Typography>

          <Typography
            variant="h5"
            sx={{
              fontWeight: 'bold',
              color: theme.palette.secondary.main,
              mt: 3,
              '&:hover': { color: theme.palette.primary.main, transition: 'color 0.3s ease' },
            }}
          >
            🔥 Competitive Gaming & Strategy
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              mb: 2,
              '&:hover': { color: theme.palette.primary.main, transition: 'color 0.3s ease' },
            }}
          >
            **CSGO** – The perfect mix of reflexes and team coordination. Reaction time is key, but **map knowledge &
            strategy** wins the game. **Sekiro, RDR, GTA** – These games test **patience, decision-making, and
            adaptability**—every choice affects the experience.
          </Typography>
        </motion.div>
      </motion.div>
      <Divider sx={{ my: 4 }} />
    </CenterWrapper>
  );
};

export default GamingEsports;
