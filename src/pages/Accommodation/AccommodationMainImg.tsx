import styled from '@emotion/styled';
import { theme } from '../../styles/theme';
import SwiperComponent from '../../components/Swiper/SwiperComponent';

function AccommodationMainImg() {
  const images: string[] = [
    'https://i.ytimg.com/vi/Q7pR7uazGgU/maxresdefault.jpg',
    'https://i.ytimg.com/vi/Q7pR7uazGgU/maxresdefault.jpg',
    'https://i.ytimg.com/vi/Q7pR7uazGgU/maxresdefault.jpg',
    'https://i.ytimg.com/vi/Q7pR7uazGgU/maxresdefault.jpg',
  ];
  return (
    <StyledAccommodationMainImgWrapper>
      <SwiperComponent borderRadius="0" images={images} />
    </StyledAccommodationMainImgWrapper>
  );
}

export default AccommodationMainImg;

const StyledAccommodationMainImgWrapper = styled.div`
  width: 100%;
  height: 320px;
  background-color: ${theme.colors.gray100};
`;
