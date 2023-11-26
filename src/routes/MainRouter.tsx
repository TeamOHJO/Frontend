import {
  Outlet,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import styled from '@emotion/styled';
import { useEffect } from 'react';
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
import CustomerReview from '../pages/customerReview';
import MyPage from '../pages/MyPage';
import { getCookie, removeCookies } from '../utils/utils';

function Dashboard() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname !== '/login') {
      const token = getCookie('token');
      const name = getCookie('userName');
      const email = getCookie('userEmail');

      if (!token || !name || !email) {
        removeCookies();
        navigate('/login');
      }
    }
  }, [navigate]);
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
            <Route path="/mypage" element={<MyPage />} />
          </Route>
          <Route path="/accommodation/:id" element={<Accommodation />} />
          <Route path="/accommodation/:id/:id" element={<Room />} />
          <Route path="/review/:id" element={<CustomerReview />} />
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
  overflow-x: hidden;
  overflow-y: auto;
  padding: 1rem;
  width: 768px;
  min-height: 100vh;
  width: ${theme.device.tablet};
  background-color: ${theme.colors.white};
  box-shadow: ${theme.shadows.shadow1.shadow};

  @media screen and (max-width: ${theme.device.tablet}) {
    width: 100%;
  }
`;
