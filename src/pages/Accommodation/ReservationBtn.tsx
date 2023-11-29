import { useDisclosure, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import DefaultModal from '../../components/Modal/DefaultModal';
import {
  accommodationSelectStartDateState,
  accommodationSelectEndDateState,
  accommodationSelectVisitorsState,
} from '../../states/atom';
import { changeDateFormat, getCookie } from '../../utils/utils';

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
  const accessToken = getCookie('token');

  // 예약하기 버튼 모달
  const accessModalData = {
    heading: '예약하기',
    text: '선택된 숙소를 예약하시겠습니까?',
  };

  const notAccessModalData = {
    heading: '예약불가',
    text: '로그인 페이지로 이동하시겠습니까?',
  };

  const accessModalFunc = () => {
    // 결제 페이지로 이동
    navigate(
      `/reservation/1?startDate=${changeDateFormat(
        accommodationSelectStartDate,
      )}&endDate=${changeDateFormat(
        accommodationSelectEndDate,
      )}&image=${image}&category=${category}&name=${name}&numberOfPerson=${accommodationSelectVisitors}&star=${star}&location=${location}&prcie=${price}&discountPercentage=${discountPercentage}&basketId=${null}&roomId=${roomId}`,
    );
  };

  const notAccessModalFunc = () => {
    navigate('/login');
  };

  return (
    <>
      <DefaultModal
        isOpen={isOpen}
        onClose={onClose}
        modalFunc={accessToken ? accessModalFunc : notAccessModalFunc}
        modalData={accessToken ? accessModalData : notAccessModalData}
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
