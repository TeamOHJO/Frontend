import styled from '@emotion/styled';
import { Heading, Text, Badge, Skeleton } from '@chakra-ui/react';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { theme } from '../../styles/theme';
import RoomToastPopup from './RoomToastPopup';
import { changeDateFormat, changePriceDiscountFormat } from '../../utils/utils';
import {
  accommodationSelectStartDateState,
  accommodationSelectEndDateState,
  accommodationSelectVisitorsState,
  basketCountState,
} from '../../states/atom';
import { createBasket } from '../../api/accommodation';

interface RoomSelectedInfoProps {
  isLoaded: boolean;
  roomId: string | undefined;
  price: number | undefined;
  startDate: string | null;
  endDate: string | null;
  discountPercentage: number | undefined;
}

function RoomSelectedInfo({
  isLoaded,
  roomId,
  price,
  startDate,
  endDate,
  discountPercentage,
}: RoomSelectedInfoProps) {
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

  const countDay = () => {
    if (startDate && endDate) {
      const diffDate = new Date(endDate).getTime() - new Date(startDate).getTime();
      return Math.abs(diffDate / (1000 * 60 * 60 * 24)); // 밀리세컨 * 초 * 분 * 시 = 일
    }
    return 1;
  };
  return (
    <StyledRoomSelectedInfoWrapper>
      <StyledRoomSelectedInfoBox>
        <StyledRoomSelectedInfoItem>
          <Skeleton isLoaded={isLoaded}>
            <Heading as="h3" size="lg">
              숙박 기간
            </Heading>
          </Skeleton>
          {startDate && endDate && (
            <Skeleton isLoaded={isLoaded}>
              <Text as="p" size="md" color="gray.84">
                {startDate.split('-')[0]}년 {startDate.split('-')[1]}월 {startDate.split('-')[2]}일
                ~ {endDate.split('-')[1]}월 {endDate.split('-')[2]}일
              </Text>
            </Skeleton>
          )}
        </StyledRoomSelectedInfoItem>
        <StyledRoomSelectedInfoItem>
          <Skeleton isLoaded={isLoaded}>
            <Heading as="h3" size="lg">
              체크인/체크아웃 시간
            </Heading>
          </Skeleton>
          <Skeleton isLoaded={isLoaded}>
            <Text as="p" size="md" color="gray.84">
              PM 15:00 이후/ AM 10:00 이전
            </Text>
          </Skeleton>
        </StyledRoomSelectedInfoItem>
        <StyledRoomSelectedInfoItem>
          <Skeleton isLoaded={isLoaded}>
            <Heading as="h3" size="lg">
              가격
            </Heading>
          </Skeleton>
          <Skeleton isLoaded={isLoaded}>
            {discountPercentage &&
              price &&
              (discountPercentage > 0 ? (
                <>
                  <Text as="s" size="sm" color="blackAlpha.600">
                    ￦{(price * countDay()).toLocaleString()}
                    원/{countDay()}박
                  </Text>
                  <Text as="p" size="sm">
                    ￦{changePriceDiscountFormat(price, discountPercentage, countDay())}
                    원/{countDay()}박
                    <Badge fontSize="0.8rem" style={{ marginLeft: '0.5rem' }}>
                      {discountPercentage}% 할인
                    </Badge>
                  </Text>
                </>
              ) : (
                <Text as="p" size="sm">
                  ￦{changePriceDiscountFormat(price, discountPercentage, countDay())}
                  원/{countDay()}박
                </Text>
              ))}
          </Skeleton>
        </StyledRoomSelectedInfoItem>
        <StyledRoomSelectedCart
          className="material-symbols-outlined"
          onMouseEnter={handleCartMouseEnter}
          onMouseLeave={handleCartMouseLeave}
          onClick={(event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
            event.stopPropagation();
            handleCreateBasket();
          }}
        >
          add_shopping_cart
          {cartHover ? (
            <StyledTooltip style={{ fontFamily: 'Noto Sans KR' }}>장바구니 담기</StyledTooltip>
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
