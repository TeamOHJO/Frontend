import styled from '@emotion/styled';
import { theme } from '../../styles/theme';

function RoomSelectedInfo() {
  return (
    <StyledRoomSelectedInfoWrapper>
      <StyledRoomSelectedInfoBox>정보</StyledRoomSelectedInfoBox>
    </StyledRoomSelectedInfoWrapper>
  );
}

export default RoomSelectedInfo;

const StyledRoomSelectedInfoWrapper = styled.div`
  width: 100%;
  padding: 1rem;
  background-color: ${theme.colors.gray100};
`;

const StyledRoomSelectedInfoBox = styled.div`
  width: 100%;
  height: 200px;
  background-color: ${theme.colors.white};
`;
