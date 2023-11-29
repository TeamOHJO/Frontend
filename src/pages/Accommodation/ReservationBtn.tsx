import { useDisclosure, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { useState } from 'react';
import DefaultModal from '../../components/Modal/DefaultModal';
import {
  accommodationSelectStartDateState,
  accommodationSelectEndDateState,
  accommodationSelectVisitorsState,
} from '../../states/atom';
import { changeDateFormat, getCookie } from '../../utils/utils';
import ReservationBtnToastPopup from './ReservationBtnToastPopup';

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
  const [showAlert, setShowAlert] = useState({
    active: false,
    message: '',
  });
  const navigate = useNavigate();
  const accessToken = getCookie('token');

  // 예약하기 버튼 모달
  const accessModalData = {
    heading: '예약하기',
    text: '선택된 숙소를 예약하시겠습니까?',
  };

  const accessModalFunc = () => {
    // 결제 페이지로 이동
    navigate(
      `/reservation/1?startDate=${changeDateFormat(
        accommodationSelectStartDate,
      )}&endDate=${changeDateFormat(
        accommodationSelectEndDate,
      )}&image=${image}&category=${category}&name=${name}&numberOfPerson=${accommodationSelectVisitors}&star=${star}&location=${location}&price=${price}&discountPercentage=${discountPercentage}&basketId=${null}&roomId=${roomId}`,
    );
  };

  const openFunction = () => {
    const toastData = {
      active: true,
      message: '로그인 후 진행하실 수 있습니다.',
    };
    setShowAlert(toastData);
  };

  return (
    <>
      <DefaultModal
        isOpen={isOpen}
        onClose={onClose}
        modalFunc={accessModalFunc}
        modalData={accessModalData}
      />
      <Button
        variant={soldOut ? 'gray' : 'blue'}
        size="lg"
        style={{ width: '100px', height: '40px' }}
        isDisabled={soldOut}
        onClick={(event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
          event.stopPropagation();
          if (accessToken) {
            onOpen();
          } else {
            openFunction();
          }
        }}
      >
        {soldOut ? '예약마감' : '예약하기'}
      </Button>
      <ReservationBtnToastPopup status={showAlert} setFunc={setShowAlert} />
    </>
  );
}

export default ReservationBtn;
