import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/Index';
import { Paper } from '@mui/material';
import AppLayout from '../layout/AppLayout';
import BlogPage from './pages/blogs/Index';

const AppRouter = () => {
  return (
    <Paper>
      <AppLayout>
        <Routes>
          <Route path="/" index element={<HomePage />} />
          <Route path="/blogs" index element={<BlogPage />} />
        </Routes>
      </AppLayout>
    </Paper>
  );
};

export default AppRouter;
