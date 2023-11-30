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
import { useLocation, useNavigate } from 'react-router-dom';
import { postReservation } from '../../api';
import { ReservationData } from '../../api/type';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  roomId: number;
}

const ReservationModal = ({
  isOpen,
  onClose,
  onConfirm,
  roomId,
}: ReservationModalProps) => {
  const navigate = useNavigate();

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const startDate = searchParams.get('startDate');
  const endDate = searchParams.get('endDate');
  const numberOfPerson = searchParams.get('numberOfPerson');

  const handleConfirm = async () => {
    try {
      const reservationPostProps: ReservationData = {
        startDate: startDate as string,
        endDate: endDate as string,
        numberOfPerson: numberOfPerson ? parseInt(numberOfPerson, 10) : 1,
      };

      const response = await postReservation(roomId, reservationPostProps);
      console.log(response.data);

      onConfirm();

      navigate(
        `/reservation-complete/${roomId}?startDate=${startDate}&endDate=${endDate}&numberOfPerson=${numberOfPerson}`,
      );
      // navigate(`/reservation-complete/${roomId}`);
    } catch (error) {
      console.error(error);
    }
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
