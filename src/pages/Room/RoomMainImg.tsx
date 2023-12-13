import styled from '@emotion/styled';
import { useDisclosure, Skeleton } from '@chakra-ui/react';
import OnOpenSwiper from '../Accommodation/Swiper/OnOpenSwiper';
import ImageModal from '../Accommodation/ImageModal';

interface RoomMainImgProps {
  isLoaded: boolean;
  images: string[] | undefined;
}

function RoomMainImg({ isLoaded, images }: RoomMainImgProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const defaultImages = [
    'https://a.cdn-hotels.com/gdcs/production131/d620/b7386d4c-5975-4faf-989f-c8b86e7dbfd3.jpg?impolicy=fcrop&w=800&h=533&q=medium',
  ];

  return (
    <StyledRoomMainImgWrapper>
      <Skeleton isLoaded={isLoaded}>
        {images ? (
          <>
            <OnOpenSwiper borderRadius="0" images={images} onOpen={onOpen} />
            <ImageModal isOpen={isOpen} onClose={onClose} images={images} />
          </>
        ) : (
          <OnOpenSwiper borderRadius="0" images={defaultImages} onOpen={onOpen} />
        )}
      </Skeleton>
    </StyledRoomMainImgWrapper>
  );
}

export default RoomMainImg;

const StyledRoomMainImgWrapper = styled.div`
  width: 100%;
  height: 50%;
  position: relative;
`;
