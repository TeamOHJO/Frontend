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
import { v4 as uuid } from 'uuid';
import { ImagesModalProps } from '../../../@types/interface';

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
        {images &&
          images.map((image: string) => (
            <StyledImage src={image} key={uuid()} />
          ))}
      </StyledModalBody>
      <ModalFooter gap="10px" />
    </ModalContent>
  </Modal>
);
export default ImageModal;

const StyledModalBody = styled(ModalBody)`
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
`;

const StyledImage = styled.img`
  width: 49%;
  min-width: 240px;
  height: 50%;
`;
