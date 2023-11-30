import { useState } from 'react';
import { Button } from '@chakra-ui/react';
import ReservationModal from '../Modal/ReservationModal';
import { useCheckboxContext } from '../../context/checkboxContext';

const BookingBtn = ({ roomId }: { roomId: number }) => {
  const { isChecked } = useCheckboxContext();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPaymentCompleted, setIsPaymentCompleted] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleConfirm = () => {
    setIsPaymentCompleted(true);
    handleCloseModal();
  };
  const isButtonDisabled = isPaymentCompleted || !isChecked || isModalOpen;
  return (
    <>
      <Button variant="blue" onClick={handleButtonClick} isDisabled={isButtonDisabled}>
        결제하기
      </Button>
      <ReservationModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onConfirm={handleConfirm}
        roomId={roomId}
      />
    </>
  );
};

export default BookingBtn;
