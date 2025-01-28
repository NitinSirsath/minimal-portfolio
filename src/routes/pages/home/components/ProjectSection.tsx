import { Typography } from '@mui/material';
import MinimalMediaCard from './MinimalMediaCard';
import { ProjectDataType, projectData } from './projectData';
import styles from '../styles/index.module.css';
import CenterWrapper from '../../../../components/wrappers/CenterWrapper';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const ProjectSection = () => {
  const ref = useRef(null); // Ref for visibility
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.2, duration: 0.8 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div ref={ref} className="py-10">
      <motion.div initial="hidden" animate={isInView ? 'visible' : 'hidden'} variants={containerVariants}>
        <CenterWrapper widthPercentage={70}>
          <motion.div variants={itemVariants}>
            <Typography variant="h3">Personal Projects</Typography>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Typography className="py-3" variant="caption" color="textSecondary">
              Below is a selection of recent projects that I've worked on.
            </Typography>
          </motion.div>
        </CenterWrapper>
        <CenterWrapper>
          <motion.div className={styles.projectContainer} variants={containerVariants}>
            {projectData.map((element: ProjectDataType, index: number) => (
              <motion.div key={index} variants={itemVariants}>
                <MinimalMediaCard element={element} key={index} />
              </motion.div>
            ))}
          </motion.div>
        </CenterWrapper>
      </motion.div>
    </div>
  );
};

export default ProjectSection;
