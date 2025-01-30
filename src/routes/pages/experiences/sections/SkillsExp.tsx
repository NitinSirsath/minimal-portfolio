import { Box, Chip, Typography } from '@mui/material';
import { skills, tools } from '../../../../components/data/about';

const SkillsExp = () => {
  return (
    <Box marginTop={2}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
        Skills & Tools
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
        {[...skills.skills, ...tools.tools].map((skill, index) => (
          <Chip key={index} label={skill} variant="outlined" />
        ))}
      </Box>
    </Box>
  );
};

export default SkillsExp;
