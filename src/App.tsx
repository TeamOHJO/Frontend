import { Global, ThemeProvider } from '@emotion/react';
import { BrowserRouter } from 'react-router-dom';
import reset from './styles/reset';
import { theme } from './styles/theme';
import MainRouter from './routes/MainRouter';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={reset} />
      <BrowserRouter>
        <MainRouter />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
