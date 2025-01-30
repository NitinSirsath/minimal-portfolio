import { Box, Typography, Stack, CircularProgress, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import gif1 from '../../../../assets/arya.webp';
import gif2 from '../../../../assets/class.webp';
import { collegeLife } from '../../../../components/data/about';

const CollegeLife = () => {
  const [gif1Loaded, setGif1Loaded] = useState(false);
  const [gif2Loaded, setGif2Loaded] = useState(false);

  useEffect(() => {
    const timeout1 = setTimeout(() => setGif1Loaded(true), 5000); // 5s timeout in case of loading failure
    const timeout2 = setTimeout(() => setGif2Loaded(true), 5000);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, []);
  return (
    <div>
      {' '}
      <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
          College Life 🎓
        </Typography>
        <Stack direction="row" spacing={2} sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
          {/* GIF 1 */}
          <Paper
            elevation={3}
            sx={{
              overflow: 'hidden',
              borderRadius: 2,
              width: 250,
              height: 200,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#F4F4F4',
            }}
          >
            {!gif1Loaded && <CircularProgress color="warning" />}
            <img
              src={gif1}
              alt="College Memories 1"
              loading="lazy"
              style={{
                display: gif1Loaded ? 'block' : 'none',
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
              onLoad={() => setGif1Loaded(true)}
              onError={() => setGif1Loaded(true)} // Force load in case of error
            />
          </Paper>

          {/* GIF 2 */}
          <Paper
            elevation={3}
            sx={{
              overflow: 'hidden',
              borderRadius: 2,
              width: 250,
              height: 200,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#F4F4F4',
            }}
          >
            {!gif2Loaded && <CircularProgress color="warning" />}
            <img
              src={gif2}
              alt="College Memories 2"
              loading="lazy"
              style={{
                display: gif2Loaded ? 'block' : 'none',
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
              onLoad={() => setGif2Loaded(true)}
              onError={() => setGif2Loaded(true)}
            />
          </Paper>
        </Stack>
        <Box>
          {Object.values(collegeLife).map((paragraph, index) => (
            <Typography key={index} variant="body1" sx={{ mb: 2 }}>
              {paragraph}
            </Typography>
          ))}
        </Box>
      </motion.div>
    </div>
  );
};

export default CollegeLife;
