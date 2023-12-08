import styled from '@emotion/styled';
import { StarFilled } from '@ant-design/icons';
import { Heading, Text, Badge } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { theme } from '../../../styles/theme';
import AccommodationRoomImages from './AccommodationRoomImages';
import AccommodationRoomItemCart from './AccommodationRoomItemCart';
import ReservationBtn from './ReservationBtn';
import {
  accommodationSelectStartDateState,
  accommodationSelectEndDateState,
} from '../../../states/atom';
import {
  changeDateFormat,
  changePriceDiscountFormat,
  changeStarFormat,
} from '../../../utils/utils';

interface AccommodationRoom {
  roomId: string;
  name: string;
  price: number;
  discountPercentage: number;
  minCapacity: number;
  maxCapacity: number;
  images: string[];
  soldOut: boolean;
  averageRating: number;
  category: string;
  location: string;
  setShowAlert: React.Dispatch<
    React.SetStateAction<{
      active: boolean;
      message: string;
    }>
  >;
}

function AccommodationRoomItem({
  roomId,
  name,
  price,
  discountPercentage,
  minCapacity,
  maxCapacity,
  images,
  soldOut,
  averageRating,
  category,
  location,
  setShowAlert,
}: AccommodationRoom) {
  const navigate = useNavigate();
  const [accommodationSelectStartDate] = useRecoilState<Date>(accommodationSelectStartDateState);

  const [accommodationSelectEndDate] = useRecoilState<Date>(accommodationSelectEndDateState);

  const countDay = () => {
    if (accommodationSelectStartDate && accommodationSelectEndDate) {
      const diffDate =
        accommodationSelectEndDate.getTime() - accommodationSelectStartDate.getTime();
      return Math.abs(diffDate / (1000 * 60 * 60 * 24)); // 밀리세컨 * 초 * 분 * 시 = 일
    }
    return 1;
  };

  return (
    <StyledAccommodationRoomItemWrapper>
      <AccommodationRoomImages images={images} />
      <StyledAccommodationRoomTitle
        onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
          event.stopPropagation();
          navigate(
            `/room/${roomId}?startDate=${changeDateFormat(
              accommodationSelectStartDate,
            )}&endDate=${changeDateFormat(
              accommodationSelectEndDate,
            )}&soldOut=${soldOut}&category=${category}&location=${location}`,
          );
        }}
      >
        <StyledAccommodationRoomTitleBox style={{ marginBottom: '0.5rem' }}>
          <Heading as="h4" size="sm">
            {name}
          </Heading>
          <div>
            <StarFilled style={{ color: `${theme.colors.blue400}`, fontSize: '0.8rem' }} />
            <StyledStarDigit>{changeStarFormat(averageRating)}</StyledStarDigit>
          </div>
        </StyledAccommodationRoomTitleBox>
        <StyledAccommodationRoomTitleBox>
          <div>
            <Text as="p" size="sm" color="gray.84">
              최소 {minCapacity}명 / 최대 {maxCapacity}명
            </Text>
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
              <Text as="p" size="md" fontWeight="bold">
                ￦ {changePriceDiscountFormat(price, discountPercentage, countDay())}
                원/{countDay()}박
              </Text>
            )}
          </div>
          <StyledAccommodationRoomTitleBoxItem>
            <AccommodationRoomItemCart
              roomId={roomId}
              soldOut={soldOut}
              setShowAlert={setShowAlert}
            />
            <ReservationBtn
              soldOut={soldOut}
              roomId={roomId}
              image={images[0]}
              category={category}
              name={name}
              star={averageRating}
              location={location}
              price={price}
              discountPercentage={discountPercentage}
              setShowAlert={setShowAlert}
            />
          </StyledAccommodationRoomTitleBoxItem>
        </StyledAccommodationRoomTitleBox>
      </StyledAccommodationRoomTitle>
    </StyledAccommodationRoomItemWrapper>
  );
}

export default AccommodationRoomItem;

const StyledAccommodationRoomItemWrapper = styled.div`
  width: 100%;
  padding: 1rem;
  margin-bottom: 3rem;
  box-shadow: ${theme.shadows.shadow1.shadow};
  border-radius: 10px;
  &:hover {
    background-color: ${theme.colors.gray100};
  }
`;

const StyledAccommodationRoomTitle = styled.div`
  width: 100%;
  height: 100px;
  padding: 0.5rem;
  cursor: pointer;
`;

const StyledAccommodationRoomTitleBox = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
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
