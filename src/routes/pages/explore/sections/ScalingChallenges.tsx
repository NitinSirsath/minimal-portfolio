import { Typography, Divider, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import CenterWrapper from '../../../../components/wrappers/CenterWrapper';

const ScalingChallenges = () => {
  const theme = useTheme();

  return (
    <CenterWrapper>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <Typography variant="h3" sx={{ mb: 2 }}>
          Small Org Problems & Scaling Challenges 🚀
        </Typography>

        <motion.div initial="hidden" animate="visible" transition={{ staggerChildren: 0.2, duration: 0.6 }}>
          <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                mb: 2,
                '&:hover': { color: theme.palette.primary.main, transition: 'color 0.3s ease' },
              }}
            >
              Working at **Decision Automation** and **AntStack**, I’ve experienced firsthand how a company scales from a
              **small team to a larger team**. With that growth comes **challenges**, from **team coordination** to **tooling
              gaps**.
            </Typography>
          </motion.p>

          <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                mb: 2,
                '&:hover': { color: theme.palette.primary.main, transition: 'color 0.3s ease' },
              }}
            >
              The biggest **lesson** I’ve learned is that **small improvements make a big impact**. From **automating tasks**
              to **building small internal tools**, I’ve taken initiative to **solve the problems I see around me**.
            </Typography>
          </motion.p>

          <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                mb: 2,
                '&:hover': { color: theme.palette.primary.main, transition: 'color 0.3s ease' },
              }}
            >
              My problem-solving mindset has led me to **build scalable solutions**—from **SaaS-like platforms** for internal
              teams to **small tools** that **streamline workflows**. This has helped teams move **faster, smarter, and more
              efficiently**.
            </Typography>
          </motion.p>
        </motion.div>
      </motion.div>

      <Divider sx={{ my: 4 }} />
    </CenterWrapper>
  );
};

export default ScalingChallenges;
