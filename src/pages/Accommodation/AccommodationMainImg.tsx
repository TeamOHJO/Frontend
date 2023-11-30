import styled from '@emotion/styled';
import { useDisclosure, Badge } from '@chakra-ui/react';
import OnOpenSwiper from './Swiper/OnOpenSwiper';
import Heart from '../../components/Heart';
import ImageModal from './ImageModal';

interface AccommodationMainImgProps {
  images: string[];
  liked: boolean;
  tag: string;
}

function AccommodationMainImg({ images, liked, tag }: AccommodationMainImgProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <StyledAccommodationMainImgWrapper>
      <OnOpenSwiper borderRadius="0" images={images} onOpen={onOpen} />
      <Heart liked={liked} size="30px" />
      <ImageModal isOpen={isOpen} onClose={onClose} images={images} />
      {tag && <StyledBadge variant="red">{tag}</StyledBadge>}
    </StyledAccommodationMainImgWrapper>
  );
}

export default AccommodationMainImg;

const StyledAccommodationMainImgWrapper = styled.div`
  width: 100%;
  height: 50%;
  position: relative;
`;

const StyledBadge = styled(Badge)`
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  z-index: 2;
  font-size: 16px;
`;
