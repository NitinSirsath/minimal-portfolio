import { Box, Typography, Divider, Chip } from '@mui/material';
import CenterWrapper from '../../../components/wrappers/CenterWrapper';
import { languages } from '../../../components/data/about';
import Introduction from './sections/Introduction';
import CollegeLife from './sections/CollegeLife';
import Photography from './sections/Photography';
import SectionWrapper from '../../../components/animations/SectionWrapper';

const AboutPage = () => {
  return (
    <CenterWrapper>
      {/* Profile Section */}
      <SectionWrapper>
        <Introduction />
      </SectionWrapper>
      <Divider sx={{ my: 4 }} />
      <SectionWrapper>
        <CollegeLife />
      </SectionWrapper>

      <Divider sx={{ my: 4 }} />
      <SectionWrapper>
        <Photography />
      </SectionWrapper>
      {/* Photography Passion Section */}

      <Divider sx={{ my: 4 }} />
      {/* Languages Section */}
      <SectionWrapper>
        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
          Languages
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {languages.languages.map((lang, index) => (
            <Chip key={index} label={lang} variant="outlined" />
          ))}
        </Box>
      </SectionWrapper>
    </CenterWrapper>
  );
};

export default AboutPage;
