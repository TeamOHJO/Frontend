import styled from '@emotion/styled';
import { StarFilled } from '@ant-design/icons';
import { Heading, Text, Badge } from '@chakra-ui/react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { theme } from '../../styles/theme';
import AccommodationRoomImages from './AccommodationRoomImages';
import AccommodationRoomItemCart from './AccommodationRoomItemCart';
import ReservationBtn from './ReservationBtn';
import {
  accommodationSelectStartDateState,
  accommodationSelectEndDateState,
} from '../../states/atom';

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
  const location = useLocation();
  const navigate = useNavigate();
  const [accommodationSelectStartDate] = useRecoilState<Date | null>(
    accommodationSelectStartDateState,
  );

  const [accommodationSelectEndDate] = useRecoilState<Date | null>(
    accommodationSelectEndDateState,
  );

  const handleCountDay = () => {
    if (accommodationSelectStartDate && accommodationSelectEndDate) {
      const diffDate =
        accommodationSelectEndDate.getTime() -
        accommodationSelectStartDate.getTime();
      return Math.abs(diffDate / (1000 * 60 * 60 * 24)); // 밀리세컨 * 초 * 분 * 시 = 일
    }
    return 1;
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
            {discountPercentage > 0 ? (
              <>
                <Text as="s" size="sm" color="blackAlpha.600">
                  ￦
                  {(
                    Math.floor((price * handleCountDay()) / 1000) * 1000
                  ).toLocaleString()}
                  원/{handleCountDay()}박
                </Text>
                <Text as="p" size="sm">
                  ￦
                  {(
                    Math.floor(
                      (price * handleCountDay() * (100 - discountPercentage)) /
                        100000,
                    ) * 1000
                  ).toLocaleString()}
                  원/{handleCountDay()}박
                  <Badge fontSize="0.8rem" style={{ marginLeft: '0.5rem' }}>
                    {discountPercentage}% 할인
                  </Badge>
                </Text>
              </>
            ) : (
              <Text as="p" size="sm">
                ￦
                {(
                  Math.floor(
                    (price * handleCountDay() * (100 - discountPercentage)) /
                      100000,
                  ) * 1000
                ).toLocaleString()}
                원/{handleCountDay()}박
              </Text>
            )}
          </div>
          <StyledAccommodationRoomTitleBoxItem>
            <AccommodationRoomItemCart />
            <ReservationBtn isReservation={isReservation} />
          </StyledAccommodationRoomTitleBoxItem>
        </StyledAccommodationRoomTitleBox>
      </StyledAccommodationRoomTitle>
    </StyledAccommodationRoomItemWrapper>
  );
}

export default AccommodationRoomItem;

const StyledAccommodationRoomItemWrapper = styled.div`
  width: 100%;

  margin-bottom: 3rem;
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
