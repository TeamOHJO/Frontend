import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import MainRouter from './routes/MainRouter';

function App() {
  return (
    <>
      <BrowserRouter>
        <MainRouter></MainRouter>
      </BrowserRouter>
    </>
  );
}

export default App;
