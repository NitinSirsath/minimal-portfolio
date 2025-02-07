import SectionWrapper from '../../../components/animations/SectionWrapper';
import FrontendDevelopment from './sections/FrontendDevelopment';
import GamingEsports from './sections/GamingEsports';
import ProblemSolving from './sections/ProblemSolving';
import ProfessionalJourney from './sections/ProfessionalJourney';
import ScalingChallenges from './sections/ScalingChallenges';
import SideHustlesProjects from './sections/SideHustlesProjects';

const ExplorePage = () => {
  return (
    <div>
      <SectionWrapper>
        <ProblemSolving />
      </SectionWrapper>
      <SectionWrapper>
        <FrontendDevelopment />
      </SectionWrapper>
      <SectionWrapper>
        <ScalingChallenges />
      </SectionWrapper>
      <SectionWrapper>
        <ProfessionalJourney />
      </SectionWrapper>
      <SectionWrapper>
        <GamingEsports />
      </SectionWrapper>
      <SectionWrapper>
        <SideHustlesProjects />
      </SectionWrapper>
    </div>
  );
};

export default ExplorePage;
