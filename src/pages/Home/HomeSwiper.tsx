import styled from '@emotion/styled';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { v4 as uuid } from 'uuid';
import { useNavigate } from 'react-router-dom';

interface SwiperProps {
  images: string[];
  borderRadius: string;
  id: number;
}

export default function HomeSwiper({ images, borderRadius, id }: SwiperProps) {
  const navigate = useNavigate();

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
      {images.map((image: string, index: number) =>
        (index < 3 ? (
          <SwiperSlide key={uuid()}>
            <StyledImg
              src={image}
              alt="#"
              loading={index ? 'lazy' : 'eager'}
              onClick={() => {
                navigate(`/accommodation/${id}`);
              }}
            />
          </SwiperSlide>
        ) : null))}
    </StyledSwiperWrapper>
  );
}

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
