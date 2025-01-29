import { ArrowForwardRounded } from '@mui/icons-material';
import { Button, Divider, Typography } from '@mui/material';
import { motion } from 'framer-motion'; // Import Framer Motion
import ProjectSection from './components/ProjectSection';
import RecentWriting from './components/writing/RecentWriting';
import CenterWrapper from '../../../components/wrappers/CenterWrapper';

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.5, // Delay based on the index of the text
      duration: 0.8,
      ease: 'easeOut',
    },
  }),
};

const HomePage = () => {
  return (
    <div>
      <CenterWrapper>
        <div className="py-10">
          <motion.div initial="hidden" animate="visible" variants={textVariants} custom={0}>
            <Typography variant="h2">
              Hallo, <span className="text-amber-300">I'm Nitin</span>.
            </Typography>
          </motion.div>
          <motion.div initial="hidden" animate="visible" variants={textVariants} custom={1}>
            <Typography variant="caption">A fullstack-engineer from the Aurangabad, MH</Typography>
          </motion.div>
          <motion.div initial="hidden" animate="visible" variants={textVariants} custom={2}>
            <Typography className="py-5" variant="body1">
              I work with leading-edge companies <br />
              to create exceptional products. <br />I most recently worked with MoonPay to help <br />
              make web3 accessible. Before that, I built personal and <br />
              business banking products for millions of customers at Monzo.
            </Typography>
          </motion.div>
          <motion.div initial="hidden" animate="visible" variants={textVariants} custom={3}>
            <Button endIcon={<ArrowForwardRounded />} variant="contained">
              More Information
            </Button>
          </motion.div>
        </div>
      </CenterWrapper>
      <Divider />
      <div className="mt-4">
        <ProjectSection />
      </div>
      <Divider />
      <div className="mt-4">
        <RecentWriting />
      </div>
    </div>
  );
};

export default HomePage;
