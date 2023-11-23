import { Outlet, Route, Routes } from 'react-router-dom';
import styled from '@emotion/styled';
import { theme } from '../styles/theme';
import Navigation from '../components/Layout/Navigation';
import Accommodation from '../pages/Accommodation';
import Footer from '../components/Layout/Footer';
import Home from '../pages/Home';
import Test from '../pages/test/Test';
import Login from '../pages/Login';
import Basket from '../pages/Basket';
import WishList from '../pages/WishList';
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
            <Route index element={<Home />} />
            <Route path="/:id" element={<Home />} />
            <Route path="/test" element={<Test />} />
            <Route path="/login" element={<Login />} />
            <Route path="/wishlist" element={<WishList />} />
            <Route path="/basket" element={<Basket />} />
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
<<<<<<< HEAD
  padding: 1rem;
  width: 768px;
  min-height: 100vh;
=======
  width: ${theme.device.tablet};

>>>>>>> 6a4ae5ba7fc011125663d8f70149b92291562f45
  background-color: ${theme.colors.white};
  box-shadow: ${theme.shadows.shadow1.shadow};

  @media screen and (max-width: ${theme.device.tablet}) {
    width: 100%;
  }
`;
