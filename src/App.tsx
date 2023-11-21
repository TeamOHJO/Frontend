import React from 'react';
import { Global, ThemeProvider } from '@emotion/react';
import reset from './styles/reset';
import { theme } from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={reset} />
      App Created!
    </ThemeProvider>
  );
}

export default App;
