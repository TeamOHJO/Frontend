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
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { postReservation } from '../../api';
import { ReservationPostData } from '../../api/type';
import ReservationToastPopup from '../../pages/Reservation/ReservationToastPopup';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  roomId: number;
}

const ReservationModal = ({ isOpen, onClose, onConfirm, roomId }: ReservationModalProps) => {
  const navigate = useNavigate();

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const startDate = searchParams.get('startDate');
  const endDate = searchParams.get('endDate');
  const numberOfPerson = searchParams.get('numberOfPerson');
  const [showAlert, setShowAlert] = useState({
    active: false,
    message: '',
  });

  const handleConfirm = async () => {
    try {
      const reservationPostProps: ReservationPostData = {
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
    } catch (error) {
      console.error(error);
      const toastData = {
        active: true,
        message: '이미 예약이 완료되었습니다.',
      };
      setShowAlert(toastData);
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
        <ReservationToastPopup status={showAlert} setFunc={setShowAlert} />
      </ModalContent>
    </Modal>
  );
};
export default ReservationModal;
