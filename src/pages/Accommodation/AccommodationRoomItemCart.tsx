import styled from '@emotion/styled';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { theme } from '../../styles/theme';
import AccommodationToastPopup from './AccommodationToastPopup';
import { getCookie, changeDateFormat } from '../../utils/utils';
import {
  accommodationSelectStartDateState,
  accommodationSelectEndDateState,
  accommodationSelectVisitorsState,
  basketCountState,
} from '../../states/atom';

function AccommodationRoomItemCart({ roomId }: { roomId: number }) {
  const [cartHover, setCartHover] = useState(false);
  const [basketCount, setBasketCount] = useRecoilState<number>(basketCountState);

  // 장바구니 팝업
  const [showAlert, setShowAlert] = useState({
    active: false,
    message: '',
  });
  const [accommodationSelectStartDate] = useRecoilState<Date>(accommodationSelectStartDateState);

  const [accommodationSelectEndDate] = useRecoilState<Date>(accommodationSelectEndDateState);

  const [accommodationSelectVisitors] = useRecoilState<number>(accommodationSelectVisitorsState);
  const accessToken = getCookie('token');

  const createBasket = async () => {
    await fetch(`https://yanoljaschool.site:8080/basket/rooms/${roomId}`, {
      method: 'POST',
      body: JSON.stringify({
        startDate: changeDateFormat(accommodationSelectStartDate),
        endDate: changeDateFormat(accommodationSelectEndDate),
        numberOfPerson: accommodationSelectVisitors,
      }),
      headers: {
        'content-type': import.meta.env.VITE_CONTENT_TYPE,
        Authorization: `Bearer ${accessToken}`,
      },
    }).then((res: any) => {
      if (res.ok) {
        const toastData = {
          active: true,
          message: '성공적으로 장바구니에 담겼습니다.',
        };
        setShowAlert(toastData);
        setBasketCount(basketCount + 1);
      } else {
        const toastData = {
          active: true,
          message: '이미 장바구니에 담겨있습니다.',
        };
        setShowAlert(toastData);
      }
    });
    // const res = response.json();
  };

  const handleCartMouseEnter = () => {
    setCartHover(true);
  };

  const handleCartMouseLeave = () => {
    setCartHover(false);
  };

  return (
    <>
      <StyledAccommodationRoomItemCart
        className="material-symbols-outlined"
        onMouseEnter={handleCartMouseEnter}
        onMouseLeave={handleCartMouseLeave}
        onClick={(event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
          event.stopPropagation();
          createBasket();
        }}
      >
        add_shopping_cart
        {cartHover ? (
          <StyledTooltip style={{ fontFamily: 'Noto Sans KR' }}>장바구니 담기</StyledTooltip>
        ) : (
          ''
        )}
      </StyledAccommodationRoomItemCart>
      <AccommodationToastPopup status={showAlert} setFunc={setShowAlert} />
    </>
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
