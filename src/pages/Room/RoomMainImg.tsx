import styled from '@emotion/styled';
import { theme } from '../../styles/theme';

function RoomMainImg() {
  return <StyledRoomMainImgWrapper>ImageCarousel</StyledRoomMainImgWrapper>;
}

export default RoomMainImg;

const StyledRoomMainImgWrapper = styled.div`
  width: 100%;
  height: 320px;
  background-color: ${theme.colors.gray100};
`;
