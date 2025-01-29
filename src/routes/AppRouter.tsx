import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/Index';
import { Paper } from '@mui/material';
import AppLayout from '../layout/AppLayout';
import BlogPage from './pages/blogs/Index';
import NotFoundPage from './pages/404Page/NotFoundPage';
import Blog1 from './pages/blogs/BlogPage/Blog1';
import AboutPage from './pages/about/Index';

const AppRouter = () => {
  return (
    <Paper>
      <AppLayout>
        <Routes>
          <Route path="/" index element={<HomePage />} />
          <Route path="/blogs" index element={<BlogPage />} />
          <Route path="/about" index element={<AboutPage />} />
          {/* <Route path="/blogs/:id" element={<RenderBlog />} /> */}
          <Route path="/blogs/1" element={<Blog1 />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </AppLayout>
    </Paper>
  );
};

export default AppRouter;
