import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import Navigation from '../components/Layout/Navigation';
import Basket from '../pages/Basket';
import WishList from '../pages/WishList';

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
      <Route path="/basket" element={<Basket />} />
      <Route path="/wishlist" element={<WishList />} />
    </Routes>
  );
}

export default MainRouter;
