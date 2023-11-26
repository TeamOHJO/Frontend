import styled from '@emotion/styled';
import { useDisclosure } from '@chakra-ui/react';
import OnOpenSwiper from './Swiper/OnOpenSwiper';
import Heart from '../../components/Heart';
import ImageModal from './ImageModal';

function AccommodationMainImg() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const images: string[] = [
    'https://yaimg.yanolja.com/v5/2023/05/15/11/1280/646219283e0b90.32654214.jpg',
    'https://yaimg.yanolja.com/v5/2023/05/08/12/1280/6458e676068dd6.64937342.jpg',
    'https://yaimg.yanolja.com/v5/2023/05/08/12/1280/6458e585a4cf99.99506570.jpg',
    'https://yaimg.yanolja.com/v5/2023/05/08/12/1280/6458e5856f7313.80456947.jpg',
    'https://yaimg.yanolja.com/v5/2023/05/15/11/1280/646219283e0b90.32654214.jpg',
    'https://yaimg.yanolja.com/v5/2023/05/08/12/1280/6458e676068dd6.64937342.jpg',
    'https://yaimg.yanolja.com/v5/2023/05/08/12/1280/6458e585a4cf99.99506570.jpg',
    'https://yaimg.yanolja.com/v5/2023/05/08/12/1280/6458e5856f7313.80456947.jpg',
  ];
  return (
    <StyledAccommodationMainImgWrapper>
      <OnOpenSwiper borderRadius="0" images={images} onOpen={onOpen} />
      <Heart />
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
