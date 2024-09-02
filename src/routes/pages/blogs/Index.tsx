import { Typography } from '@mui/material';
import BlogCard from '../../../components/cards/BlogCard';

const BlogPage = () => {
  return (
    <div>
      <Typography variant="h3" sx={{ my: 2 }}>
        Writings
      </Typography>
      <div>
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
};

export default BlogPage;
