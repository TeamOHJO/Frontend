import styled from '@emotion/styled';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

interface SwiperProps {
  images: string[];
  borderRadius: string;
}

export default function SwiperComponent({ images, borderRadius }: SwiperProps) {
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

  const index = 1;

  return (
    <StyledSwiperWrapper
      pagination
      navigation
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      {images.map((image: string) => (
        <SwiperSlide key={index + 1}>
          <StyledImg src={image} alt="#" />
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
