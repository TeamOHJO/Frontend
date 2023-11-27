import { useState } from 'react';
import { Button } from '@chakra-ui/react';
import ReservationModal from '../Modal/ReservationModal';

function BookingBtn() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPaymentCompleted, setIsPaymentCompleted] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsPaymentCompleted(true);
    setIsModalOpen(false);
  };

  const handleConfirm = () => {
    handleCloseModal();
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
      />
    </>
  );
}

export default BookingBtn;
