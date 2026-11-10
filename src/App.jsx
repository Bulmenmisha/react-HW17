import { useState } from 'react';
import { ThemeProvider, createTheme, CssBaseline, Typography, Box, Paper } from '@mui/material';
import styled from '@emotion/styled';

// Светлая тема
const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#1976d2' },
    background: { default: '#f4f6fb', paper: '#ffffff' },
    text: { primary: '#1c1c1c' },
  },
});

// Тёмная тема
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#ffb74d' },
    background: { default: '#121212', paper: '#1e1e1e' },
    text: { primary: '#f5f5f5' },
  },
});

// Стилизованная кнопка на Emotion — цвета берутся из текущей темы
const ThemeButton = styled.button`
  padding: 12px 28px;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 24px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.getContrastText(theme.palette.primary.main)};
  transition: background-color 0.2s, transform 0.1s;

  &:hover {
    background-color: ${({ theme }) => theme.palette.primary.dark};
  }

  &:active {
    transform: scale(0.97);
  }
`;

function App() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: 2,
        }}
      >
        <Paper elevation={6} sx={{ p: 5, borderRadius: 4, textAlign: 'center', maxWidth: 420 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            {isDark ? '🌙 Тёмная тема' : '☀️ Светлая тема'}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
            Нажми на кнопку, чтобы переключить тему всего приложения.
          </Typography>
          <ThemeButton onClick={toggleTheme}>
            {isDark ? 'Включить светлую' : 'Включить тёмную'}
          </ThemeButton>
        </Paper>
      </Box>
    </ThemeProvider>
  );
}

export default App;
