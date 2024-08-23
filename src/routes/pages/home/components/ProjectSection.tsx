import { Typography } from '@mui/material';
import MinimalMediaCard from './MinimalMediaCard';
import { ProjectDataType, projectData } from './projectData';

const ProjectSection = () => {
  return (
    <div className="py-10">
      <Typography variant="h3">Personal Project</Typography>
      <Typography className="py-3" variant="body1">
        Below is a selection of recent projects that I've worked on.
      </Typography>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
        {projectData.map((element: ProjectDataType, index: any) => {
          return <MinimalMediaCard element={element} key={index} />;
        })}
      </div>
    </div>
  );
};

export default ProjectSection;
