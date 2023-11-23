import { Outlet, Route, Routes } from 'react-router-dom';
import styled from '@emotion/styled';
import { theme } from '../styles/theme';
import Navigation from '../components/Layout/Navigation';
import Footer from '../components/Layout/Footer';
import Home from '../pages/Home';
import Test from '../pages/test/Test';

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
            <Route index element={<Home />} />
            <Route path="/:id" element={<Home />} />
            <Route path="/test" element={<Test />} />
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
  width: ${theme.device.tablet};

  background-color: ${theme.colors.white};
  box-shadow: ${theme.shadows.shadow1.shadow};

  @media screen and (max-width: ${theme.device.tablet}) {
    width: 100%;
  }
`;
