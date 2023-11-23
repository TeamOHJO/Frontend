import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import styled from '@emotion/styled';
import { theme } from '../styles/theme';
import Navigation from '../components/Layout/Navigation';
import Footer from '../components/Layout/Footer';
import Test from '../pages/test/Test';
import Basket from '../pages/Basket';
import WishList from '../pages/WishList';

function Dashboard() {
  return (
    <>
      <Outlet />
      <Footer />
      <Navigation />
    </>
  );
}

function MainRouter() {
  return (
    <StyledContainer>
      <StyledInnerContainer>
        <Routes>
          <Route path="/" element={<Dashboard />}>
            <Route index element={<>This is home!</>} />
            <Route path="/test" element={<Test />} />
            <Route path="/wishlist" element={<WishList />} />
            {/* 장바구니는 라우터 작업 완료 후 푸터 없이 갈 예정 */}
            <Route path="/basket" element={<Basket />} />
          </Route>
        </Routes>
      </StyledInnerContainer>
    </StyledContainer>
  );
}

export default MainRouter;

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background-color: ${theme.colors.gray50};
`;

const StyledInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow-y: auto;
  padding: 1rem;
  width: 768px;
  min-height: 100vh;

  background-color: ${theme.colors.white};
  box-shadow: ${theme.shadows.shadow1.shadow};

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
