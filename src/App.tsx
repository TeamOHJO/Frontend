import { Global, ThemeProvider } from '@emotion/react';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import reset from './styles/reset';
import { theme } from './styles/theme';
import MainRouter from './routes/MainRouter';
import { chakraTheme } from './styles/chakraTheme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ChakraProvider theme={chakraTheme}>
        <Global styles={reset} />
        <BrowserRouter>
          <MainRouter />
        </BrowserRouter>
      </ChakraProvider>
    </ThemeProvider>
  );
}

export default App;
