import { Divider } from '@mui/material';
import CenterWrapper from '../../../components/wrappers/CenterWrapper';
import ProfessionalExp from './sections/ProfessionalExp';
import SkillsExp from './sections/SkillsExp';
import PersonalExp from './sections/PersonalExp';
import SectionWrapper from '../../../components/animations/SectionWrapper';

const ExperiencePage = () => {
  return (
    <CenterWrapper>
      <SectionWrapper>
        <ProfessionalExp />
      </SectionWrapper>
      <Divider sx={{ my: 4 }} />
      <SectionWrapper>
        <PersonalExp />
      </SectionWrapper>
      <Divider sx={{ my: 4 }} />
      <SectionWrapper>
        <SkillsExp />
      </SectionWrapper>
    </CenterWrapper>
  );
};

export default ExperiencePage;
