import styled from '@emotion/styled';
import { theme } from '../../styles/theme';

function RoomMainImg() {
  return <RoomMainImgWrapper>ImageCarousel</RoomMainImgWrapper>;
}

export default RoomMainImg;

const RoomMainImgWrapper = styled.div`
  width: 100%;
  height: 320px;
  background-color: ${theme.colors.gray100};
`;
