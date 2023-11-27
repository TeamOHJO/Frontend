import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const ReservationModal = ({
  isOpen,
  onClose,
  onConfirm,
}: ReservationModalProps) => {
  const navigate = useNavigate();
  const handleConfirm = () => {
    onConfirm();
    navigate('/reservation-complete');
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>확인 창</ModalHeader>
        <ModalCloseButton />
        <ModalBody>정말로 결제하시겠습니까?</ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleConfirm}>
            확인
          </Button>
          <Button variant="ghost" onClick={onClose}>
            취소
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ReservationModal;
