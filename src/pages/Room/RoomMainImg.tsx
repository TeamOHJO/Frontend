import styled from '@emotion/styled';
import { theme } from '../../styles/theme';
import SwiperComponent from '../../components/Swiper/SwiperComponent';

function RoomMainImg() {
  const images: string[] = [
    'https://i.ytimg.com/vi/Q7pR7uazGgU/maxresdefault.jpg',
    'https://i.ytimg.com/vi/Q7pR7uazGgU/maxresdefault.jpg',
    'https://i.ytimg.com/vi/Q7pR7uazGgU/maxresdefault.jpg',
    'https://i.ytimg.com/vi/Q7pR7uazGgU/maxresdefault.jpg',
  ];
  return (
    <StyledRoomMainImgWrapper>
      <SwiperComponent borderRadius="0" images={images} />
    </StyledRoomMainImgWrapper>
  );
}

export default RoomMainImg;

const StyledRoomMainImgWrapper = styled.div`
  width: 100%;
  height: 50%;
  background-color: ${theme.colors.gray100};
`;
