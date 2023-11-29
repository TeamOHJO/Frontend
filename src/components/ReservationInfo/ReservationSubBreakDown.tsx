import { Box, Image, Text } from '@chakra-ui/react';
import { useSearchParams } from 'react-router-dom';
import { theme } from '../../styles/theme';
import LocationIcon from '../../assets/location-outline.svg';
import {
  calculateDaysDifference,
  formatNumberWithCommas,
} from '../../utils/utils';

const ReservationSubBreakDown = () => {
  const [searchParams] = useSearchParams();
  const location = searchParams.get('location');
  const startDate = String(searchParams.get('startDate'));
  const endDate = String(searchParams.get('endDate'));
  const price = Number(searchParams.get('price'));

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

export default ReservationSubBreakDown;
