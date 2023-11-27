import { useDisclosure, Button } from '@chakra-ui/react';
import DefaultModal from '../../components/Modal/DefaultModal';

interface ReservationBtnProps {
  isReservation: boolean;
}

function ReservationBtn({ isReservation }: ReservationBtnProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // 예약하기 버튼 모달
  const modalData = {
    heading: '예약하기',
    text: '선택된 숙소를 예약하시겠습니까?',
  };

  const modalFunc = () => {
    // 결제 페이지로 이동
    console.log('모달 승인 시 실행될 함수 입니다.');
  };

  return (
    <>
      <DefaultModal
        isOpen={isOpen}
        onClose={onClose}
        modalFunc={modalFunc}
        modalData={modalData}
      />
      <Button
        variant="blue"
        size="lg"
        style={{ width: '100px', height: '40px' }}
        isDisabled={isReservation}
        onClick={(event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
          event.stopPropagation();
          onOpen();
        }}
      >
        예약하기
      </Button>
    </>
  );
}

export default ReservationBtn;
