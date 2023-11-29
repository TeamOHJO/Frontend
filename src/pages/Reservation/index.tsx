import styled from '@emotion/styled';
import UnFooterNav from '../../components/Layout/UnFooterNav';
import ReservationAgreeCard from './ReservationAgreeCard';
import ReservationPaymentCard from './ReservationPaymentCard';
import ReservationInfo from '../../components/ReservationInfo';
import ReservationBottomNav from '../../components/Layout/ReservationBottomNav';
import { CheckboxProvider } from '../../context/checkboxContext';

const Reservation = () => {
  return (
    <CheckboxProvider>
      <StyledLayout>
        <UnFooterNav />
        <ReservationInfo />
        <ReservationAgreeCard />
        <ReservationPaymentCard />
        <ReservationBottomNav />
      </StyledLayout>
    </CheckboxProvider>
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
