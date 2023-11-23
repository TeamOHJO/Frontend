import { Outlet, Route, Routes } from 'react-router-dom';
import styled from '@emotion/styled';
import { theme } from '../styles/theme';
import Navigation from '../components/Layout/Navigation';
import Accommodation from '../pages/Accommodation';
import Footer from '../components/Layout/Footer';
import Test from '../pages/test/Test';
import Room from '../pages/Room';

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
          </Route>
          <Route path="/accommodation/:id" element={<Accommodation />} />
          <Route path="/accommodation/:id/:id" element={<Room />} />
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
  width: 768px;

  background-color: ${theme.colors.white};
  box-shadow: ${theme.shadows.shadow1.shadow};

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
