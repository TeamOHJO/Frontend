import styled from '@emotion/styled';
import { useDisclosure } from '@chakra-ui/react';
import OnOpenSwiper from './Swiper/OnOpenSwiper';
import ImageModal from './ImageModal';
import { theme } from '../../styles/theme';

function AccommodationRoomImages({ images }: any) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <StyledAccommodationRoomImagesWrapper>
      <OnOpenSwiper borderRadius="10px" images={images} onOpen={onOpen} />
      <ImageModal isOpen={isOpen} onClose={onClose} images={images} />
    </StyledAccommodationRoomImagesWrapper>
  );
}

export default AccommodationRoomImages;

const StyledAccommodationRoomImagesWrapper = styled.div`
  width: 100%;
  height: 350px;
  border-radius: 15px;
  box-shadow: ${theme.shadows.shadow1.shadow};
`;
