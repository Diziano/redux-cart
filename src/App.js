import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
