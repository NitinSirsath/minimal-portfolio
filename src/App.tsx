import { ThemeProvider } from '@emotion/react';
import { darkTheme, lightTheme } from './theme/theme';
import AppRouter from './routes/AppRouter';
import useThemeStore from './store/theme/themeStore';
import { Paper } from '@mui/material';

function App() {
  const { darkMode } = useThemeStore();

  return (
    <ThemeProvider theme={!darkMode ? darkTheme : lightTheme}>
      <Paper sx={{ height: '100vh', borderRadius: 0 }}>
        <AppRouter />
      </Paper>
    </ThemeProvider>
  );
}

export default App;
