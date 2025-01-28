import { Box, Typography } from '@mui/material';

const BlogCard = () => {
  return (
    <Box sx={{ my: 2 }}>
      <Box sx={{ padding: '15px 0', borderBottom: '1px solid', borderColor: 'divider' }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'text.primary' }}>
          Getting Started with React: A Beginner’s Practice Session
        </Typography>
        <Typography color="text.secondary" variant="caption">
          Published on May 21, 2024
        </Typography>
        <Typography sx={{ my: 1, color: 'text.secondary' }} variant="body2">
          Quick Approach to getting started with ReactJS
        </Typography>
      </Box>
    </Box>
  );
};

export default BlogCard;
