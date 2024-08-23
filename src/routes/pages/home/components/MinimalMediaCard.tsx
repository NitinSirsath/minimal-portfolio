import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ProjectDataType } from './projectData';

type IProps = {
  element: ProjectDataType;
  key: number;
};

export default function MinimalMediaCard({ element, key }: IProps) {
  return (
    <Card
      key={key}
      sx={{
        maxWidth: 345,
        backgroundColor: 'background.paper',
        boxShadow: 'none', // Remove default shadow for minimal look
        border: '1px solid', // Subtle border for separation
        borderColor: 'divider', // Use theme divider color
        borderRadius: 2, // Slightly rounded corners
      }}
    >
      <CardMedia
        sx={{
          height: 140,
          filter: 'grayscale(100%)', // Apply grayscale for minimal aesthetic
        }}
        image={element.thumbnail}
        title={element.projectName}
      />
      <CardContent sx={{ padding: 2 }}>
        <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 600, color: 'text.primary' }}>
          {element.projectName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {element.desc}
        </Typography>
      </CardContent>
      <CardActions sx={{ padding: 2, justifyContent: 'flex-end' }}>
        <Button
          size="small"
          sx={{
            textTransform: 'none',
            fontWeight: '400',
            color: 'primary.main',
            padding: '4px 8px',
            border: '1px solid',
            borderColor: 'primary.main',
            borderRadius: 2,
          }}
        >
          Share
        </Button>
        <Button
          size="small"
          sx={{
            textTransform: 'none',
            fontWeight: '400',
            color: 'primary.main',
            padding: '4px 8px',
            border: '1px solid',
            borderColor: 'primary.main',
            borderRadius: 2,
          }}
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
