import styled from '@emotion/styled';
import { useDisclosure, Badge, Skeleton } from '@chakra-ui/react';
import OnOpenSwiper from './Swiper/OnOpenSwiper';
import Heart from '../../components/Heart';
import ImageModal from './ImageModal';

interface AccommodationMainImgProps {
  images: string[] | undefined;
  liked: boolean | undefined;
  tag: string | undefined;
  isLoaded: boolean | undefined;
}

function AccommodationMainImg({ images, liked, tag, isLoaded }: AccommodationMainImgProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const defaultImages = [
    'https://a.cdn-hotels.com/gdcs/production131/d620/b7386d4c-5975-4faf-989f-c8b86e7dbfd3.jpg?impolicy=fcrop&w=800&h=533&q=medium',
  ];

  return (
    <StyledAccommodationMainImgWrapper>
      <Skeleton isLoaded={isLoaded}>
        {images ? (
          <OnOpenSwiper borderRadius="0" images={images} onOpen={onOpen} />
        ) : (
          <OnOpenSwiper borderRadius="0" images={defaultImages} onOpen={onOpen} />
        )}
        {liked && <Heart liked={liked} size="30px" />}
        {images && <ImageModal isOpen={isOpen} onClose={onClose} images={images} />}
        {tag && <StyledBadge variant="red">{tag}</StyledBadge>}
      </Skeleton>
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
