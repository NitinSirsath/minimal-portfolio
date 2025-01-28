import { ArrowForward } from '@mui/icons-material';
import { Box, IconButton, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { BlogDataType } from '../data/blogData';

interface IProps {
  element: BlogDataType;
}

const BlogCard = ({ element }: IProps) => {
  const navigate = useNavigate();

  const handleNavigate = (id: number) => {
    navigate(`/blogs/${id}`); // Navigate to the dynamic blog page
  };
  // Animation Variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  const hoverEffect = {
    whileHover: { scale: 1.02 },
  };

  return (
    <motion.div
      key={element.id}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={hoverEffect.whileHover}
      style={{
        marginBottom: '16px',
        borderRadius: '8px',
        overflow: 'hidden',
        transition: 'all 0.3s ease-in-out',
      }}
    >
      <Box
        sx={{
          padding: '15px 20px',
          borderBottom: '1px solid',
          borderColor: 'divider',
          // borderRadius: '8px',
          // backgroundColor: 'background.paper',
        }}
      >
        <Box className="flex gap-2 align-top" sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'text.primary' }}>
              {element.title}
            </Typography>
            <Typography color="text.secondary" variant="caption">
              Published on {element.publishedOn}
            </Typography>
            <Typography sx={{ my: 1, color: 'text.secondary' }} variant="body2">
              {element.description}
            </Typography>
          </Box>
          <Box>
            <IconButton
              onClick={() => handleNavigate(element.id)}
              // sx={{
              //   '&:hover': {
              //     backgroundColor: 'primary.dark', // Light hover effect on the icon button
              //   },
              // }}
            >
              <ArrowForward color="disabled" />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
};

export default BlogCard;
