import { motion } from 'framer-motion';
import { photography } from '../../../../components/data/about';
import { Box, Typography } from '@mui/material';

const Photography = () => {
  return (
    <div>
      <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
          Photography Passion 📸
        </Typography>
        <Box>
          {Object.values(photography).map((paragraph, index) => (
            <Typography key={index} variant="body1" sx={{ mb: 2 }}>
              {paragraph}
            </Typography>
          ))}
        </Box>
      </motion.div>
    </div>
  );
};

export default Photography;
