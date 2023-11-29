import styled from '@emotion/styled';
import { theme } from '../../styles/theme';
import BookingBtn from '../BookingBtn';

const ReservationBottomNav = () => {
  return (
    <StyledReservationBottomNavWrapper>
      <BookingBtn />
    </StyledReservationBottomNavWrapper>
  );
};

export default ReservationBottomNav;

const StyledReservationBottomNavWrapper = styled.div`
  position: fixed;
  bottom: 0;

  width: 100%;
  max-width: 768px;
  height: 60px;
  padding: 0 2rem;

  box-shadow: 0 -4px 8px rgba(0, 0, 0, 0.1);

  background-color: ${theme.colors.white};
  color: ${theme.colors.blue400};

  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
`;
