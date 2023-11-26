import { FunctionComponent } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import styled from '@emotion/styled';
import { ImagesModalProps } from '../../../@types/interface';
import DefaultSwiper from '../Swiper/DefaultSwiper';

const ImageModal: FunctionComponent<ImagesModalProps> = ({
  isOpen,
  onClose,
  images,
}) => (
  <Modal
    isOpen={isOpen}
    onClose={onClose}
    isCentered
    motionPreset="slideInBottom"
    size="6xl"
  >
    <ModalOverlay background="none" />
    <ModalContent width="80%" border="1px solid" borderColor="#B8B8B8">
      <ModalHeader fontSize="lg">이미지</ModalHeader>
      <ModalCloseButton />
      <StyledModalBody>
        {images.map((image: string) => (
          <StyledImage src={image} />
        ))}
      </StyledModalBody>
      <ModalFooter gap="10px" />
    </ModalContent>
  </Modal>
);
export default ImageModal;

const StyledModalBody = styled(ModalBody)`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const StyledImage = styled.img`
  width: 49%;
  height: 50%;
  margin-bottom: 1rem;
`;
