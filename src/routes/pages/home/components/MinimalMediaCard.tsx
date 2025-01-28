import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion'; // Import Framer Motion for animations
import { ProjectDataType } from './projectData';

type IProps = {
  element: ProjectDataType;
};

export default function MinimalMediaCard({ element }: IProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.05, transition: { duration: 0.3 } }} // Hover scaling
    >
      <Card
        sx={{
          maxWidth: 345,
          backgroundColor: 'background.paper',
          boxShadow: 'none',
          border: '1px solid',
          borderColor: 'divider',
          borderRadius: 2,
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            boxShadow: '0 8px 20px rgba(0, 0, 0, 0.12)',
          },
        }}
      >
        <CardMedia
          sx={{
            height: 140,
            backgroundSize: 'contain',
            margin: '10px',
            transition: 'filter 0.8s ease, transform 0.3s',
            '&:hover': {
              filter: 'grayscale(0%)',
              transform: 'scale(1.1)',
            },
            filter: 'grayscale(100%)',
          }}
          image={element.thumbnail}
          title={element.projectName}
        />
        <CardContent sx={{ padding: 2 }}>
          <Typography
            gutterBottom
            variant="h5"
            sx={{
              fontWeight: 600,
              color: 'text.primary',
              transition: 'color 0.8s ease',
            }}
          >
            {element.projectName}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              lineHeight: 1.75,
              transition: 'color 0.8s ease',
            }}
          >
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
              transition: 'background-color 0.3s ease, color 0.3s ease',
              '&:hover': {
                backgroundColor: 'primary.main',
                color: '#ffffff',
              },
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
              transition: 'background-color 0.3s ease, color 0.3s ease',
              '&:hover': {
                backgroundColor: 'primary.main',
                color: '#ffffff',
              },
            }}
          >
            Learn More
          </Button>
        </CardActions>
      </Card>
    </motion.div>
  );
}
