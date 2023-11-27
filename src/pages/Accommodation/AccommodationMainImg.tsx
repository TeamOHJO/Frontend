import styled from '@emotion/styled';
import { useDisclosure } from '@chakra-ui/react';
import OnOpenSwiper from './Swiper/OnOpenSwiper';
import Heart from '../../components/Heart';
import ImageModal from './ImageModal';

interface AccommodationMainImgProps {
  images: string[];
  isLiked: boolean;
}

function AccommodationMainImg({ images, isLiked }: AccommodationMainImgProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <StyledAccommodationMainImgWrapper>
      <OnOpenSwiper borderRadius="0" images={images} onOpen={onOpen} />
      <Heart isLiked={isLiked} />
      <ImageModal isOpen={isOpen} onClose={onClose} images={images} />
    </StyledAccommodationMainImgWrapper>
  );
}

export default AccommodationMainImg;

const StyledAccommodationMainImgWrapper = styled.div`
  width: 100%;
  height: 50%;
  position: relative;
`;
