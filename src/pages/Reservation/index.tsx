import styled from '@emotion/styled';
import { useLocation } from 'react-router-dom';
import UnFooterNav from '../../components/Layout/UnFooterNav';
import ReservationAgreeCard from './ReservationAgreeCard';
import ReservationPaymentCard from './ReservationPaymentCard';
import ReservationInfo from '../../components/ReservationInfo';
import ReservationBottomNav from '../../components/Layout/ReservationBottomNav';
import { CheckboxProvider } from '../../context/checkboxContext';

const Reservation = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const roomId = searchParams.get('roomId');
  const parsedRoomId = roomId ? parseInt(roomId, 10) : 1;
  return (
    <CheckboxProvider>
      <StyledLayout>
        <UnFooterNav />
        <ReservationInfo />
        <ReservationAgreeCard />
        <ReservationPaymentCard />
        <ReservationBottomNav roomId={parsedRoomId} />
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
