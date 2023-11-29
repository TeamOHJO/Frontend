import styled from '@emotion/styled';
import { Text, Button, useDisclosure, Badge } from '@chakra-ui/react';
import { UpOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { useState } from 'react';
import { theme } from '../../styles/theme';
import DefaultModal from '../../components/Modal/DefaultModal';
import { changeDateFormat, getCookie, changePriceDiscountFormat } from '../../utils/utils';
import {
  accommodationSelectStartDateState,
  accommodationSelectEndDateState,
  accommodationSelectVisitorsState,
} from '../../states/atom';
import RoomReservationBtnToastPopup from './RoomReservationBtnToastPopup';

interface RoomBottomNaviProps {
  price: number;
  startDate: string | null;
  endDate: string | null;
  soldOut: boolean;
  category: string | null;
  location: string | null;
  image: string;
  name: string;
  discountPercentage: number;
  roomId: string | undefined;
  star: number;
}

function RoomBottomNavi({
  price,
  startDate,
  endDate,
  soldOut,
  category,
  location,
  image,
  name,
  discountPercentage,
  roomId,
  star,
}: RoomBottomNaviProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [accommodationSelectStartDate] = useRecoilState<Date>(accommodationSelectStartDateState);

  const [accommodationSelectEndDate] = useRecoilState<Date>(accommodationSelectEndDateState);

  const [accommodationSelectVisitors] = useRecoilState<number>(accommodationSelectVisitorsState);

  const navigate = useNavigate();

  const ScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  // 예약하기 버튼 모달
  const modalData = {
    heading: '예약하기',
    text: '해당 숙소를 예약하시겠습니까?',
  };

  const [showAlert, setShowAlert] = useState({
    active: false,
    message: '',
  });

  const accessToken = getCookie('token');

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

  const countDay = () => {
    if (startDate && endDate) {
      const diffDate = new Date(endDate).getTime() - new Date(startDate).getTime();
      return Math.abs(diffDate / (1000 * 60 * 60 * 24)); // 밀리세컨 * 초 * 분 * 시 = 일
    }
    return 1;
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
      <StyledRoomBottomNaviWrapper>
        <StyledRoomBottomNaviLeft>
          {discountPercentage > 0 ? (
            <>
              <Text as="s" size="xs" color="blackAlpha.600">
                ￦{(price * countDay()).toLocaleString()}
                원/{countDay()}박
              </Text>
              <Text as="p" size="md" fontWeight="bold">
                ￦ {changePriceDiscountFormat(price, discountPercentage, countDay())}
                원/{countDay()}박
                <Badge variant="red" style={{ marginLeft: '0.5rem' }}>
                  {discountPercentage}% 할인
                </Badge>
              </Text>
            </>
          ) : (
            <Text as="p" size="sm">
              ￦ {changePriceDiscountFormat(price, discountPercentage, countDay())}
              원/{countDay()}박
            </Text>
          )}
        </StyledRoomBottomNaviLeft>
        <StyledRoomBottomNaviRight>
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
              if (accessToken) {
                onOpen();
              } else {
                openFunction();
              }
            }}
          >
            {soldOut ? '예약마감' : '예약하기'}
          </Button>
        </StyledRoomBottomNaviRight>
        <StyledTopBtn onClick={ScrollToTop}>
          <UpOutlined />
        </StyledTopBtn>
      </StyledRoomBottomNaviWrapper>
      <RoomReservationBtnToastPopup status={showAlert} setFunc={setShowAlert} />
    </>
  );
}

export default RoomBottomNavi;

const StyledRoomBottomNaviWrapper = styled.div`
  position: fixed;
  bottom: 0;

  width: 100%;
  max-width: 768px;
  height: 60px;
  background-color: ${theme.colors.white};

  box-shadow: ${theme.shadows.shadowTop.shadow};

  display: flex;
  align-items: center;
  justify-content: space-between;

  z-index: 2;
`;

const StyledRoomBottomNaviLeft = styled.div`
  margin-left: 2rem;
`;

const StyledRoomBottomNaviRight = styled.div`
  margin-right: 2rem;
`;

const StyledTopBtn = styled.button`
  position: absolute;
  right: 10px;
  top: -50px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${theme.colors.white};
  box-shadow: ${theme.shadows.shadow3.shadow};
  z-index: 10;
`;
