import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/Index';
import { Paper } from '@mui/material';
import AppLayout from '../layout/AppLayout';
import BlogPage from './pages/blogs/Index';
import NotFoundPage from './pages/404Page/NotFoundPage';

const AppRouter = () => {
  return (
    <Paper>
      <AppLayout>
        <Routes>
          <Route path="/" index element={<HomePage />} />
          <Route path="/blogs" index element={<BlogPage />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </AppLayout>
    </Paper>
  );
};

export default AppRouter;
