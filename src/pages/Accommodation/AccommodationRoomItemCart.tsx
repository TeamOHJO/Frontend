import styled from '@emotion/styled';
import { useState } from 'react';
import { theme } from '../../styles/theme';
import AccommodationToastPopup from './AccommodationToastPopup';

function AccommodationRoomItemCart() {
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
    <StyledAccommodationRoomItemCart
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
      <AccommodationToastPopup status={showAlert} setFunc={setShowAlert} />
    </StyledAccommodationRoomItemCart>
  );
}

export default AccommodationRoomItemCart;

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
