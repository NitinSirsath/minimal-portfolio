import { Button, Typography } from '@mui/material';
import BlogCard from '../../../../../components/cards/BlogCard';
import { ArrowForwardRounded } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const RecentWriting = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/blogs');
  };
  return (
    <div>
      <Typography variant="h3" sx={{ marginBottom: 5, fontWeight: 'bold', color: 'primary.main' }}>
        Recent Writings
      </Typography>
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <Button onClick={handleNavigation} sx={{ my: 1 }} endIcon={<ArrowForwardRounded />} variant="contained">
        View more posts
      </Button>
    </div>
  );
};

export default RecentWriting;
