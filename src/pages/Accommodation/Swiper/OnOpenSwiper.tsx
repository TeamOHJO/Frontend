import styled from '@emotion/styled';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { v4 as uuid } from 'uuid';

interface SwiperProps {
  images: string[] | undefined;
  borderRadius: string;
  onOpen: () => void;
}

export default function OnOpenSwiper({ images, borderRadius, onOpen }: SwiperProps) {
  const StyledSwiperWrapper = styled(Swiper)`
    width: 100%;
    height: 100%;
    border-radius: ${borderRadius};

    .swiper-button-next {
      background-color: rgba(138, 138, 138, 0.3);
      background-size: 50% auto;
      background-position: center;
      width: 30px;
      height: 60px;

      display: flex;
      align-items: center;
      justify-content: center;

      border-radius: 10px;
    }

    .swiper-button-prev {
      background-color: rgba(138, 138, 138, 0.3);
      background-size: 50% auto;
      background-position: center;
      width: 2rem;
      height: 4rem;

      display: flex;
      align-items: center;
      justify-content: center;

      border-radius: 10px;
    }

    .swiper-button-next::after,
    .swiper-button-prev::after {
      font-size: 16px;
      color: white;
    }
    .swiper-button-disabled {
      display: none;
    }
  `;
  return (
    <StyledSwiperWrapper
      pagination
      navigation
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      {images &&
        images.map((image: string) => (
          // 키값 해결
          <SwiperSlide key={uuid()}>
            <StyledImg src={image} alt="#" onClick={onOpen} />
          </SwiperSlide>
        ))}
    </StyledSwiperWrapper>
  );
}

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
