import { Badge, Box, Heading, Image, Text } from '@chakra-ui/react';
import { StarFilled } from '@ant-design/icons';
import { useSearchParams } from 'react-router-dom';
import { theme } from '../../styles/theme';
import { ReservationInfoData } from '../../@types/interface';

interface ReservationBreakDownProps {
  roomDetails?: ReservationInfoData | null;
}

const ReservationBreakDown = ({ roomDetails }: ReservationBreakDownProps) => {
  const [searchParams] = useSearchParams();
  const numberOfPerson = searchParams.get('numberOfPerson');
  // 예약 페이지에서는 searchParams에서 값을 가져옴
  const roomNameReservationPage = searchParams.get('name');
  const roomImageReservationPage = String(searchParams.get('image'));
  const roomCategoryReservationPage = searchParams.get('category');
  const roomstarReservationPage = searchParams.get('star');

  // 예약 완료 페이지에서는 roomDetails에서 값을 가져옴
  const roomNameCompletePage = roomDetails?.name;
  const roomImageCompletePage = roomDetails?.roomImages?.[0];
  const roomCategoryCompletePage = roomDetails?.category;
  const roomStarCompletePage = roomDetails?.averageRating;

  // 실제로 표시할 값
  const roomName = roomNameCompletePage || roomNameReservationPage || 'Default Name';
  const roomImage = roomImageCompletePage || roomImageReservationPage || 'Default Image URL';
  const category = roomCategoryReservationPage || roomCategoryCompletePage || '기본 카테고리';
  const star = roomstarReservationPage || roomStarCompletePage || '0.0';

  return (
    <Box display="flex" flexDir="row" pl="8" pr="8" pb="8" height="100%">
      <Box width="50%">
        <Image
          width="20rem"
          height="12rem"
          objectFit="cover"
          borderRadius={8}
          src={roomImage}
          alt="Reservation List"
        />
      </Box>
      <Box width="50%" ml="2rem" display="flex" flexDir="column" justifyContent="center" gap="6">
        <Box>
          <Badge variant="blue">{category}</Badge>
        </Box>
        <Heading size="md">{roomName}</Heading>
        <Text fontWeight="bold" color={theme.colors.gray600}>
          예약 인원 {numberOfPerson}명
        </Text>
        <Box display="flex" alignItems="center" gap={1}>
          <StarFilled style={{ color: theme.colors.blue400, fontSize: '1rem' }} />
          <Text as="span" size="xs">
            {star}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};
ReservationBreakDown.defaultProps = {
  roomDetails: null,
};

export default ReservationBreakDown;
