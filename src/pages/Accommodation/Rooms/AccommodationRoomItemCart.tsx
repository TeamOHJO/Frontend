import styled from '@emotion/styled';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { theme } from '../../../styles/theme';
import { changeDateFormat } from '../../../utils/utils';
import {
  accommodationSelectStartDateState,
  accommodationSelectEndDateState,
  accommodationSelectVisitorsState,
  basketCountState,
} from '../../../states/atom';
import { createBasket } from '../../../api/accommodation';

function AccommodationRoomItemCart({
  roomId,
  soldOut,
  setShowAlert,
}: {
  roomId: string;
  soldOut: boolean;
  setShowAlert: React.Dispatch<
    React.SetStateAction<{
      active: boolean;
      message: string;
    }>
  >;
}) {
  const [cartHover, setCartHover] = useState(false);
  const [basketCount, setBasketCount] = useRecoilState<number>(basketCountState);

  const [accommodationSelectStartDate] = useRecoilState<Date>(accommodationSelectStartDateState);

  const [accommodationSelectEndDate] = useRecoilState<Date>(accommodationSelectEndDateState);

  const [accommodationSelectVisitors] = useRecoilState<number>(accommodationSelectVisitorsState);

  const handleCreateBasket = async () => {
    try {
      await createBasket(roomId, {
        startDate: changeDateFormat(accommodationSelectStartDate),
        endDate: changeDateFormat(accommodationSelectEndDate),
        numberOfPerson: accommodationSelectVisitors,
      });
      const toastData = {
        active: true,
        message: '성공적으로 장바구니에 담겼습니다.',
      };
      setShowAlert(toastData);
      setBasketCount(basketCount + 1);
    } catch (error: any) {
      if (error.response.data.code === 400) {
        const toastData = {
          active: true,
          message: '이미 장바구니에 담겨있습니다.',
        };
        setShowAlert(toastData);
      } else if (error.response.data.code === 401) {
        const toastData = {
          active: true,
          message: '로그인 후 진행하실 수 있습니다.',
        };
        setShowAlert(toastData);
      }
    }
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
      onMouseEnter={() => {
        if (!soldOut) handleCartMouseEnter();
      }}
      onMouseLeave={() => {
        if (!soldOut) handleCartMouseLeave();
      }}
      onClick={(event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        event.stopPropagation();

        if (!soldOut) {
          handleCreateBasket();
        }
      }}
      style={cartHover ? { color: theme.colors.basic } : {}}
    >
      add_shopping_cart
      {cartHover ? (
        <StyledTooltip style={{ fontFamily: 'Noto Sans KR' }}>장바구니 담기</StyledTooltip>
      ) : (
        ''
      )}
    </StyledAccommodationRoomItemCart>
  );
}

export default AccommodationRoomItemCart;

const StyledAccommodationRoomItemCart = styled.span`
  position: relative;
  font-size: 30px;
  color: ${theme.colors.gray300};
  margin-right: 1rem;
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
