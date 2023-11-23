import styled from '@emotion/styled';
import { Text, Button } from '@chakra-ui/react';
import { theme } from '../../styles/theme';

function RoomBottomNavi() {
  return (
    <StyledRoomBottomNaviWrapper>
      <StyledRoomBottomNaviLeft>
        <Text as="p" size="sm" color="gray.84">
          ·총액 ￦1230000원
        </Text>
      </StyledRoomBottomNaviLeft>
      <StyledRoomBottomNaviRight>
        <Button
          variant="blue"
          size="lg"
          style={{ width: '150px', height: '40px' }}
        >
          예약하기
        </Button>
      </StyledRoomBottomNaviRight>
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

  box-shadow: ${theme.shadows.shadowTop.shadow};

  display: flex;
  align-items: center;
  justify-content: space-between;

  z-index: 2;
`;

const StyledRoomBottomNaviLeft = styled.div`
  margin-left: 2rem;
`;

const StyledRoomBottomNaviRight = styled.div`
  margin-right: 2rem;
`;
