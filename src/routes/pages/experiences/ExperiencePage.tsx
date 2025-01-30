import { Divider } from '@mui/material';
import CenterWrapper from '../../../components/wrappers/CenterWrapper';
import ProfessionalExp from './sections/ProfessionalExp';
import SkillsExp from './sections/SkillsExp';
import PersonalExp from './sections/PersonalExp';

const ExperiencePage = () => {
  return (
    <CenterWrapper widthPercentage={50}>
      {/* Work Experience Section */}

      <ProfessionalExp />
      <Divider sx={{ my: 4 }} />
      <PersonalExp />
      {/* Personal Projects Section */}

      <Divider sx={{ my: 4 }} />
      <SkillsExp />
    </CenterWrapper>
  );
};

export default ExperiencePage;
