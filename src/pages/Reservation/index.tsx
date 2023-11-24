import styled from '@emotion/styled';
import UnFooterNav from '../../components/Layout/UnFooterNav';
import ReservationPageTitle from './ReservationPageTitle';
import ReservationSubtitle from './ReservationSubtitle';
import ReservationInfoCard from './ReservationInfoCard';

const Reservation = () => {
  return (
    <StyledLayout>
      <UnFooterNav />
      <ReservationPageTitle />
      <ReservationSubtitle />
      <ReservationInfoCard />
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
`;
