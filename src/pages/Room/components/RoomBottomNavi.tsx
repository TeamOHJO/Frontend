import styled from '@emotion/styled';
import { theme } from '../../../styles/theme';

function RoomBottomNavi() {
  return (
    <RoomBottomNaviWrapper>
      <RoomBottomNaviLeft />
      <RoomBottomNaviRight />
    </RoomBottomNaviWrapper>
  );
}

export default RoomBottomNavi;

const RoomBottomNaviWrapper = styled.div`
  position: fixed;
  bottom: 0;

  width: 100%;
  max-width: 768px;
  height: 60px;
  background-color: ${theme.colors.white};

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const RoomBottomNaviLeft = styled.div`
  margin-left: 1rem;
`;

const RoomBottomNaviRight = styled.div`
  margin-right: 1rem;
`;
