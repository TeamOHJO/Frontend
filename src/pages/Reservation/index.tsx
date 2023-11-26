import styled from '@emotion/styled';
import UnFooterNav from '../../components/Layout/UnFooterNav';
import ReservationAgreeCard from './ReservationAgreeCard';
import ReservationPaymentCard from './ReservationPaymentCard';
import ReservationInfo from '../../components/ReservationInfo';
import ReservationBottomNav from '../../components/Layout/ReservationBottomNav';

const Reservation = () => {
  return (
    <StyledLayout>
      <UnFooterNav />
      <ReservationInfo />
      <ReservationAgreeCard />
      <ReservationPaymentCard />
      <ReservationBottomNav />
    </StyledLayout>
  );
};

export default Reservation;

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  min-height: 100vh;
  min-height: 1100px;
  overflow-y: auto;
`;
