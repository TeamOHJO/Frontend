import { Box, Image, Text } from '@chakra-ui/react';
import { useSearchParams } from 'react-router-dom';
import { theme } from '../../styles/theme';
import LocationIcon from '../../assets/location-outline.svg';
import {
  calculateDaysDifference,
  formatNumberWithCommas,
} from '../../utils/utils';
import { ReservationData } from '../../@types/interface';

interface ReservationSubBreakDownProps {
  roomDetails?: ReservationData | null;
}

const ReservationSubBreakDown = ({
  roomDetails,
}: ReservationSubBreakDownProps) => {
  const [searchParams] = useSearchParams();

  // 예약 페이지에서는 searchParams에서 값을 가져옴
  const locationReservationPage = searchParams.get('location');
  const priceReservationPage = Number(searchParams.get('price'));
  const startDate = String(searchParams.get('startDate'));
  const endDate = String(searchParams.get('endDate'));

  // 예약 완료 페이지에서는 roomDetails에서 값을 가져옴
  const roomLocationCompletePage = roomDetails?.location;
  const roomPriceCompletePage = roomDetails?.price;

  // 실제로 표시할 값
  const location = locationReservationPage || roomLocationCompletePage || '';

  const price = priceReservationPage || roomPriceCompletePage || 0;

  const dayNights: number = calculateDaysDifference(startDate, endDate);
  const allPrice = price * dayNights;

  const formattedAllPrice = formatNumberWithCommas(allPrice);

  return (
    <Box
      display="flex"
      flexDir="row"
      pl="8"
      pr="8"
      justifyContent="space-between"
    >
      <Box display="flex" flexDir="column" gap="2">
        <Text fontFamily={theme.fonts.body4} color={theme.colors.gray400}>
          체크인: 15:00 이후, 체크아웃: 10:00 이전
        </Text>
        <Box display="flex" flexDir="row">
          <Image src={LocationIcon} alt="Loaction Icon" boxSize={5} />
          <Text fontFamily={theme.fonts.body4} color={theme.colors.basic}>
            {location}
          </Text>
        </Box>
      </Box>
      <Box display="flex" flexDir="column">
        <Text fontWeight="bold" fontSize="lg">
          ￦{formattedAllPrice}원
        </Text>
        <Text fontWeight="re" fontSize="md" color={theme.colors.gray400}>
          {dayNights}박 요금(세금 포함)
        </Text>
      </Box>
    </Box>
  );
};

ReservationSubBreakDown.defaultProps = {
  roomDetails: null,
};

export default ReservationSubBreakDown;
