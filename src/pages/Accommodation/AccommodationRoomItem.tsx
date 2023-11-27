import styled from '@emotion/styled';
import { StarFilled } from '@ant-design/icons';
import { useState } from 'react';
import { Heading, Text, Button, useDisclosure } from '@chakra-ui/react';
import { useNavigate, useLocation } from 'react-router-dom';
import AccommodationToastPopup from './AccommodationToastPopup';
import { theme } from '../../styles/theme';
import DefaultModal from '../../components/Modal/DefaultModal';
import AccommodationRoomImages from './AccommodationRoomImages';

interface AccommodationRoom {
  name: string;
  price: number;
  discountPercentage: number;
  minCapacity: number;
  maxCapacity: number;
  images: string[];
  isReservation: boolean;
  stars: number;
}

function AccommodationRoomItem({
  name,
  price,
  discountPercentage,
  minCapacity,
  maxCapacity,
  images,
  isReservation,
  stars,
}: AccommodationRoom) {
  const [cartHover, setCartHover] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const location = useLocation();
  const navigate = useNavigate();

  // 예약하기 버튼 모달
  const modalData = {
    heading: '예약하기',
    text: '선택된 숙소를 예약하시겠습니까?',
  };

  const modalFunc = () => {
    // 결제 페이지로 이동
    console.log('모달 승인 시 실행될 함수 입니다.');
  };

  // 장바구니 팝업
  const [showAlert, setShowAlert] = useState({
    active: false,
    message: '',
  });

  const openFunction = () => {
    // 조건문 삽입(성공, 이미 장바구니)
    const toastData = {
      active: true,
      message: '성공적으로 장바구니에 담겼습니다.',
    };
    setShowAlert(toastData);
  };

  const handleCartMouseEnter = () => {
    setCartHover(true);
  };

  const handleCartMouseLeave = () => {
    setCartHover(false);
  };

  return (
    <StyledAccommodationRoomItemWrapper>
      <AccommodationRoomImages images={images} />
      <StyledAccommodationRoomTitle
        onClick={() => {
          navigate(`${location.pathname}/id`);
        }}
      >
        <StyledAccommodationRoomTitleBox style={{ marginBottom: '0.5rem' }}>
          <Heading as="h4" size="sm">
            {name}
          </Heading>
          <div>
            <StarFilled
              style={{ color: `${theme.colors.blue400}`, fontSize: '0.8rem' }}
            />
            <StyledStarDigit>{stars}</StyledStarDigit>
          </div>
        </StyledAccommodationRoomTitleBox>
        <StyledAccommodationRoomTitleBox>
          <div>
            <Text as="p" size="sm" color="gray.84">
              최소 {minCapacity}명 / 최대 {maxCapacity}명
            </Text>
            <Text as="p" size="sm">
              ￦{price}원/박 {discountPercentage}%
            </Text>
          </div>
          <StyledAccommodationRoomTitleBoxItem>
            <StyledAccommodationRoomItemCart
              className="material-symbols-outlined"
              onMouseEnter={handleCartMouseEnter}
              onMouseLeave={handleCartMouseLeave}
              onClick={(
                event: React.MouseEvent<HTMLSpanElement, MouseEvent>,
              ) => {
                event.stopPropagation();
                openFunction();
              }}
            >
              add_shopping_cart
              {cartHover ? (
                <StyledTooltip style={{ fontFamily: 'Noto Sans KR' }}>
                  장바구니 담기
                </StyledTooltip>
              ) : (
                ''
              )}
            </StyledAccommodationRoomItemCart>
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
              onClick={(
                event: React.MouseEvent<HTMLSpanElement, MouseEvent>,
              ) => {
                event.stopPropagation();
                onOpen();
              }}
            >
              예약하기
            </Button>
          </StyledAccommodationRoomTitleBoxItem>
        </StyledAccommodationRoomTitleBox>
      </StyledAccommodationRoomTitle>
      <AccommodationToastPopup status={showAlert} setFunc={setShowAlert} />
    </StyledAccommodationRoomItemWrapper>
  );
}

export default AccommodationRoomItem;

const StyledAccommodationRoomItemWrapper = styled.div`
  width: 100%;

  margin-bottom: 2rem;
`;

const StyledAccommodationRoomTitle = styled.div`
  width: 100%;
  height: 100px;
  padding: 0.8rem;
  cursor: pointer;
`;

const StyledAccommodationRoomTitleBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledStarDigit = styled.span`
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  font-size: 0.8rem;
`;

const StyledAccommodationRoomTitleBoxItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledAccommodationRoomItemCart = styled.span`
  position: relative;
  font-size: 30px;
  color: ${theme.colors.gray300};
  margin-right: 1rem;
  cursor: pointer;
  &:hover {
    color: ${theme.colors.basic};
  }
`;

const StyledTooltip = styled.span`
  position: absolute;
  top: 40px;
  left: -42px;

  padding: 0.5rem 1rem;

  font-size: 14px;
  color: #fff;
  background-color: #000;

  text-align: center;

  border-radius: 5px;
  &:after {
    content: ' ';

    position: absolute;
    top: -20px;
    left: 50%;

    margin-left: -10px;

    border-width: 10px;
    border-style: solid;
    border-color: transparent transparent #000 transparent;

    font-family: 'Noto Sans KR', sans-serif;
  }
`;
