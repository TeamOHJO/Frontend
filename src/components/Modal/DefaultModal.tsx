import { FunctionComponent } from 'react';
import {
  Button,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import { ModalProps } from '../../@types/interface';

const DefaultModal: FunctionComponent<ModalProps> = ({
  isOpen,
  onClose,
  modalFunc,
  modalData,
}) => (
  <Modal
    isOpen={isOpen}
    onClose={onClose}
    isCentered
    motionPreset="slideInBottom"
  >
    <ModalOverlay background="none" />
    <ModalContent width="280px" border="1px solid" borderColor="#B8B8B8">
      <ModalHeader fontSize="lg">{modalData.heading}</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <Text size="md">{modalData.text}</Text>
      </ModalBody>

      <ModalFooter gap="10px">
        <Button variant="grayFull" onClick={onClose} width="auto">
          아니오
        </Button>
        <Button
          colorScheme="blue"
          size="md"
          onClick={() => {
            modalFunc();
            onClose();
          }}
          width="auto"
        >
          예
        </Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
);
export default DefaultModal;
