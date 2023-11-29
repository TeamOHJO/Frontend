import { useState } from 'react';
import { Button } from '@chakra-ui/react';
import ReservationModal from '../Modal/ReservationModal';
import { ReservationInfo } from '../../@types/interface';
import { postReservation } from '../../api';

function BookingBtn(roomsId: number) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPaymentCompleted, setIsPaymentCompleted] = useState(false);
  const [reservationInfo, setReservationInfo] =
    useState<ReservationInfo | null>(null);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsPaymentCompleted(true);
    setIsModalOpen(false);
  };

  const handleConfirm = async () => {
    try {
      // 예약 정보를 서버에 보내는 로직
      if (reservationInfo) {
        await postReservation(roomsId, reservationInfo);
        setIsPaymentCompleted(true);
      }
    } catch (error) {
      // 예약 실패 시의 처리
      console.error('Error during reservation:', error);
    }
    // handleCloseModal();
  };
  return (
    <>
      <Button
        variant="blue"
        onClick={handleButtonClick}
        disabled={isPaymentCompleted}
      >
        결제하기
      </Button>
      <ReservationModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onConfirm={handleConfirm}
        // setReservationInfo={setReservationInfo}
      />
    </>
  );
}

export default BookingBtn;
