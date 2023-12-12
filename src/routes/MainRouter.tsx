import { useEffect } from 'react';
import { Outlet, Route, Routes, useLocation } from 'react-router-dom';
import styled from '@emotion/styled';
import { useRecoilState } from 'recoil';
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
import Reservation from '../pages/Reservation';
import ReservationComplete from '../pages/ReservationComplete';
import WriteReview from '../pages/AddReview';
import LoadingRouter from './LoadingRouter';
import { searchFilteredState } from '../states/atom';
import { changeDateFormat, getTomorrow } from '../utils/utils';
import SocialLoginLoading from '../pages/Login/SocialLoginLoading';

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
  const { pathname } = useLocation();
  const [searchFilter, setSearchFilter] = useRecoilState(searchFilteredState);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const category = sessionStorage.getItem('accommodationCategory')
      ? (sessionStorage.getItem('accommodationCategory') as string)
      : 'HOTEL';
    const newFilter = {
      ...searchFilter,
      category,
    };
    setSearchFilter(newFilter);
  }, []);

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
            <Route path="/mypage/review/write/:id" element={<WriteReview />} />
            <Route path="/loading" element={<LoadingRouter />} />
            <Route path="/social-loading" element={<SocialLoginLoading />} />
          </Route>
          <Route path="/accommodation/:id" element={<Accommodation />} />
          <Route path="/room/:id" element={<Room />} />
          <Route path="/review/:id" element={<CustomerReview />} />
          <Route path="/reservation/:id" element={<Reservation />} />
          <Route path="/reservation-complete/:id" element={<ReservationComplete />} />
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
  width: 768px;
  min-height: 100vh;
  width: ${theme.device.tablet};
  background-color: ${theme.colors.white};
  box-shadow: ${theme.shadows.shadow1.shadow};

  @media screen and (max-width: ${theme.device.tablet}) {
    width: 100%;
  }
`;
