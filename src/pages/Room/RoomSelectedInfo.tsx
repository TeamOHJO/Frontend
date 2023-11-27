import styled from '@emotion/styled';
import { Heading, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { theme } from '../../styles/theme';
import RoomToastPopup from './RoomToastPopup';

interface RoomSelectedInfoProps {
  price: number;
}

function RoomSelectedInfo({ price }: RoomSelectedInfoProps) {
  const [cartHover, setCartHover] = useState(false);

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
    <StyledRoomSelectedInfoWrapper>
      <StyledRoomSelectedInfoBox>
        <StyledRoomSelectedInfoItem>
          <Heading as="h3" size="lg">
            숙박 기간
          </Heading>
          <Text as="p" size="md" color="gray.84">
            2023년 11월 22일 ~ 11월 23일
          </Text>
        </StyledRoomSelectedInfoItem>
        <StyledRoomSelectedInfoItem>
          <Heading as="h3" size="lg">
            체크인/체크아웃 시간
          </Heading>
          <Text as="p" size="md" color="gray.84">
            PM 15:00 이후/ AM 10:00 이전
          </Text>
        </StyledRoomSelectedInfoItem>
        <StyledRoomSelectedInfoItem>
          <Heading as="h3" size="lg">
            가격
          </Heading>
          <Text as="p" size="md" color="gray.84">
            ￦{price}원/박
          </Text>
        </StyledRoomSelectedInfoItem>
        <StyledRoomSelectedCart
          className="material-symbols-outlined"
          onMouseEnter={handleCartMouseEnter}
          onMouseLeave={handleCartMouseLeave}
          onClick={(event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
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
        </StyledRoomSelectedCart>
      </StyledRoomSelectedInfoBox>
      <RoomToastPopup status={showAlert} setFunc={setShowAlert} />
    </StyledRoomSelectedInfoWrapper>
  );
}

export default RoomSelectedInfo;

const StyledRoomSelectedInfoWrapper = styled.div`
  width: 100%;
  padding: 1rem;
`;

const StyledRoomSelectedInfoBox = styled.div`
  width: 100%;
  padding: 1rem;
  border-radius: 15px;
  box-shadow: ${theme.shadows.shadow1.shadow};
  position: relative;
`;

const StyledRoomSelectedInfoItem = styled.div`
  margin-bottom: 1rem;
`;

const StyledRoomSelectedCart = styled.span`
  font-size: 30px;
  color: ${theme.colors.gray300};
  margin-right: 1rem;
  position: absolute;
  bottom: 2rem;
  right: 2rem;

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
