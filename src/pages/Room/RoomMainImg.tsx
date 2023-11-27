import styled from '@emotion/styled';
import { useDisclosure } from '@chakra-ui/react';
import OnOpenSwiper from '../Accommodation/Swiper/OnOpenSwiper';
import ImageModal from '../Accommodation/ImageModal';

interface RoomMainImgProps {
  images: string[];
}

function RoomMainImg({ images }: RoomMainImgProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <StyledRoomMainImgWrapper>
      <OnOpenSwiper borderRadius="0" images={images} onOpen={onOpen} />
      <ImageModal isOpen={isOpen} onClose={onClose} images={images} />
    </StyledRoomMainImgWrapper>
  );
}

export default RoomMainImg;

const StyledRoomMainImgWrapper = styled.div`
  width: 100%;
  height: 50%;
  position: relative;
`;
