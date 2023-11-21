import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import Navigation from '../components/Layout/Navigation';

function Dashboard() {
  return (
    <>
      <Outlet />
      <Navigation />
    </>
  );
}

function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route index element={<>This is home!</>} />
      </Route>
    </Routes>
  );
}

export default MainRouter;
