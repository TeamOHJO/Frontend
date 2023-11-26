import styled from '@emotion/styled';
import UnFooterNav from '../../components/Layout/UnFooterNav';
import ReservationInfo from '../../components/ReservationInfo';
import ReservationCompleteText from './ReservationCompleteText';

const ReservationComplete = () => {
  return (
    <StyledLayout>
      <UnFooterNav />
      <ReservationInfo />
      <ReservationCompleteText />
    </StyledLayout>
  );
};

export default ReservationComplete;

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  min-height: 100vh;
`;
