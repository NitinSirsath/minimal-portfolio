import { ArrowForwardRounded } from '@mui/icons-material';
import { Button, Divider, Typography } from '@mui/material';
import { motion } from 'framer-motion'; // Import Framer Motion
import ProjectSection from './components/ProjectSection';
import RecentWriting from './components/writing/RecentWriting';
import CenterWrapper from '../../../components/wrappers/CenterWrapper';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate('/about');
  };
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
              I build sleek, scalable frontends and love solving tech puzzles—whether it’s state management, performance
              tuning, or making sure everything just works beautifully. I enjoy the technical side of UI, ensuring every
              click, scroll, and transition feels effortless.
              <br />
              When I’m not coding, you’ll find me grinding FIFA like it’s the Champions League final, capturing moments
              through my lens, or escaping to the mountains for some fresh air and chai. Tech, football, photography, and
              adventure—that's me in a nutshell. 🚀
            </Typography>
          </motion.div>
          <motion.div initial="hidden" animate="visible" variants={textVariants} custom={3}>
            <Button onClick={handleNavigation} endIcon={<ArrowForwardRounded />} variant="contained">
              More Information
            </Button>
          </motion.div>
        </div>
      </CenterWrapper>
      <CenterWrapper>
        <Divider sx={{ my: 4 }} />
      </CenterWrapper>
      <div className="mt-4">
        <ProjectSection />
      </div>
      <CenterWrapper>
        <Divider sx={{ my: 4 }} />
      </CenterWrapper>
      <div className="mt-4">
        <RecentWriting />
      </div>
    </div>
  );
};

export default HomePage;
