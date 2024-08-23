import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/Index';
import { Paper } from '@mui/material';
import AppLayout from '../layout/AppLayout';

const AppRouter = () => {
  return (
    <Paper>
      <AppLayout>
        <Routes>
          <Route path="/" index element={<HomePage />} />
        </Routes>
      </AppLayout>
    </Paper>
  );
};

export default AppRouter;
