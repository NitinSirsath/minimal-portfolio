import { Typography, Divider, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import CenterWrapper from '../../../../components/wrappers/CenterWrapper';

const ProblemSolving = () => {
  const theme = useTheme();

  return (
    <CenterWrapper>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <Typography variant="h3" sx={{ mb: 2 }}>
          Problem Solving & Continuous Learning 🚀
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
            I love solving real-world problems through **frontend, backend, and architectural improvements**. Whether it’s
            debugging performance issues, optimizing code, or experimenting with **new workflows**, I enjoy building
            solutions that **scale** and **enhance user experience**.
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              mb: 2,
              '&:hover': { color: theme.palette.primary.main, transition: 'color 0.3s ease' },
            }}
          >
            Currently, I'm **exploring** and **implementing** newer technologies such as **AI-powered RAG workflows**,
            **OpenAI's LLM models**, and **performance optimization strategies** in modern web applications.
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              mb: 2,
              '&:hover': { color: theme.palette.primary.main, transition: 'color 0.3s ease' },
            }}
          >
            My approach to problem-solving is simple: **break down complex issues**, experiment with **best practices**, and
            always stay **curious** to learn **newer, better ways** to build efficient systems.
          </Typography>
        </motion.div>
      </motion.div>

      <Divider sx={{ my: 4 }} />
    </CenterWrapper>
  );
};

export default ProblemSolving;
