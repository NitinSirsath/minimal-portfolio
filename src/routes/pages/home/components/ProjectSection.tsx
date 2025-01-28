import { Typography } from '@mui/material';
import MinimalMediaCard from './MinimalMediaCard';
import { ProjectDataType, projectData } from './projectData';
import styles from '../styles/index.module.css';
import CenterWrapper from '../../../../components/wrappers/CenterWrapper';
import { motion } from 'framer-motion'; // Import Framer Motion for animations

const ProjectSection = () => {
  return (
    <div className="py-10">
      <CenterWrapper widthPercentage={70}>
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <Typography variant="h3">Personal Projects</Typography>
          <Typography className="py-3" variant="caption" color="textSecondary">
            Below is a selection of recent projects that I've worked on.
          </Typography>
        </motion.div>
      </CenterWrapper>
      <CenterWrapper>
        <div className="mt-4">
          <motion.div
            className={styles.projectContainer}
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: {
                  staggerChildren: 0.4, // Stagger animation for child cards
                },
              },
            }}
          >
            {projectData.map((element: ProjectDataType, index: number) => (
              <MinimalMediaCard element={element} key={index} />
            ))}
          </motion.div>
        </div>
      </CenterWrapper>
    </div>
  );
};

export default ProjectSection;
