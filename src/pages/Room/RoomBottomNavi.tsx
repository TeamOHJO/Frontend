import styled from '@emotion/styled';
import { theme } from '../../styles/theme';

function RoomBottomNavi() {
  return (
    <StyledRoomBottomNaviWrapper>
      <StyledRoomBottomNaviLeft />
      <StyledRoomBottomNaviRight />
    </StyledRoomBottomNaviWrapper>
  );
}

export default RoomBottomNavi;

const StyledRoomBottomNaviWrapper = styled.div`
  position: fixed;
  bottom: 0;

  width: 100%;
  max-width: 768px;
  height: 60px;
  background-color: ${theme.colors.white};

  display: flex;
  align-items: center;
  justify-content: space-between;

  z-index: 2;
`;

const StyledRoomBottomNaviLeft = styled.div`
  margin-left: 1rem;
`;

const StyledRoomBottomNaviRight = styled.div`
  margin-right: 1rem;
`;
