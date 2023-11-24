import styled from '@emotion/styled';
import { useState } from 'react';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';
import { theme } from '../../styles/theme';
import SwiperComponent from '../../components/Swiper/SwiperComponent';

function AccommodationMainImg() {
  const [isHeart, setIsHeart] = useState<boolean>(false);

  function handleIsHeart() {
    setIsHeart(!isHeart);
  }

  const images: string[] = [
    'https://i.ytimg.com/vi/Q7pR7uazGgU/maxresdefault.jpg',
    'https://i.ytimg.com/vi/Q7pR7uazGgU/maxresdefault.jpg',
    'https://i.ytimg.com/vi/Q7pR7uazGgU/maxresdefault.jpg',
    'https://i.ytimg.com/vi/Q7pR7uazGgU/maxresdefault.jpg',
  ];
  return (
    <StyledAccommodationMainImgWrapper>
      <SwiperComponent borderRadius="0" images={images} />
      <StyledAccommodationHeart>
        {isHeart ? (
          <HeartFilled
            onClick={() => handleIsHeart()}
            style={{ fontSize: '30px', color: theme.colors.red500 }}
          />
        ) : (
          <HeartOutlined
            onClick={() => handleIsHeart()}
            style={{ fontSize: '30px', color: theme.colors.red500 }}
          />
        )}
      </StyledAccommodationHeart>
    </StyledAccommodationMainImgWrapper>
  );
}

export default AccommodationMainImg;

const StyledAccommodationMainImgWrapper = styled.div`
  width: 100%;
  height: 50%;
  position: relative;
`;

const StyledAccommodationHeart = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 2;
  cursor: pointer;
`;
