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
  const SwiperSlideStyle = {
    width: '100%',
    height: '100%',
    borderRadius: `${borderRadius}`,
  };

  const index = 1;

  return (
    <Swiper
      pagination
      navigation
      modules={[Pagination, Navigation]}
      className="mySwiper"
      style={SwiperSlideStyle}
    >
      {images.map((image: string) => (
        <SwiperSlide key={index + 1}>
          <StyledImg src={image} alt="#" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
