import styled from '@emotion/styled';
import { theme } from '../../styles/theme';
import BookingBtn from '../BookingBtn';

function ReservationBottomNav() {
  return (
    <StyledReservationBottomNavWrapper>
      <span>·총액 ￦1230000</span>
      <BookingBtn />
    </StyledReservationBottomNavWrapper>
  );
}

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
  justify-content: space-between;
  z-index: 2;
`;
