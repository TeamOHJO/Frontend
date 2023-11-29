import { useDisclosure, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import DefaultModal from '../../components/Modal/DefaultModal';
import {
  accommodationSelectStartDateState,
  accommodationSelectEndDateState,
  accommodationSelectVisitorsState,
} from '../../states/atom';
import { changeDateFormat } from '../../utils/utils';

interface ReservationBtnProps {
  soldOut: boolean;
  roomId: number;
  image: string;
  category: string;
  name: string;
  star: number;
  location: string;
  price: number;
  discountPercentage: number;
}

function ReservationBtn({
  soldOut,
  roomId,
  image,
  category,
  name,
  star,
  location,
  price,
  discountPercentage,
}: ReservationBtnProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [accommodationSelectStartDate] = useRecoilState<Date>(
    accommodationSelectStartDateState,
  );
  const [accommodationSelectEndDate] = useRecoilState<Date>(
    accommodationSelectEndDateState,
  );
  const [accommodationSelectVisitors] = useRecoilState<number>(
    accommodationSelectVisitorsState,
  );
  const navigate = useNavigate();

  // 예약하기 버튼 모달
  const modalData = {
    heading: '예약하기',
    text: '선택된 숙소를 예약하시겠습니까?',
  };

  const modalFunc = () => {
    // 결제 페이지로 이동
    navigate(
      `/reservation/1?startDate=${changeDateFormat(
        accommodationSelectStartDate,
      )}&endDate=${changeDateFormat(
        accommodationSelectEndDate,
      )}&image=${image}&category=${category}&name=${name}&numberOfPerson=${accommodationSelectVisitors}&star=${star}&location=${location}&price=${price}&discountPercentage=${discountPercentage}&basketId=${null}&roomId=${roomId}`,
    );
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
        variant={soldOut ? 'gray' : 'blue'}
        size="lg"
        style={{ width: '100px', height: '40px' }}
        isDisabled={soldOut}
        onClick={(event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
          event.stopPropagation();
          onOpen();
        }}
      >
        {soldOut ? '예약마감' : '예약하기'}
      </Button>
    </>
  );
}

export default ReservationBtn;
