import FrontendDevelopment from './sections/FrontendDevelopment';
import GamingEsports from './sections/GamingEsports';
import ProblemSolving from './sections/ProblemSolving';
import ProfessionalJourney from './sections/ProfessionalJourney';
import ScalingChallenges from './sections/ScalingChallenges';
import SideHustlesProjects from './sections/SideHustlesProjects';

const ExplorePage = () => {
  return (
    <div>
      <ProblemSolving />
      <FrontendDevelopment />
      <ScalingChallenges />
      <ProfessionalJourney />
      <GamingEsports />
      <SideHustlesProjects />
    </div>
  );
};

export default ExplorePage;
