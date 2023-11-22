import styled from '@emotion/styled';
import { theme } from '../../../styles/theme';

function RoomSelectedInfo() {
  return (
    <RoomSelectedInfoWrapper>
      <RoomSelectedInfoBox>정보</RoomSelectedInfoBox>
    </RoomSelectedInfoWrapper>
  );
}

export default RoomSelectedInfo;

const RoomSelectedInfoWrapper = styled.div`
  width: 100%;
  padding: 1rem;
  background-color: ${theme.colors.gray100};
`;

const RoomSelectedInfoBox = styled.div`
  width: 100%;
  height: 200px;
  background-color: ${theme.colors.white};
`;
