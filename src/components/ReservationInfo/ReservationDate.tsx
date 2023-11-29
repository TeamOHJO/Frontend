import { Box, Text } from '@chakra-ui/react';
import { useSearchParams } from 'react-router-dom';

const ReservationDate = () => {
  const [searchParams] = useSearchParams();
  const startDate = searchParams.get('startDate');
  const endDate = searchParams.get('endDate');
  return (
    <Box width="100%" display="flex" flexDir="row">
      <Box width="50%" p="8">
        <Text fontSize="sm" fontWeight="bold" color="gray.84">
          숙박 시작일
        </Text>
        <Text fontSize="lg" fontWeight="bold" color="basic">
          {startDate}
        </Text>
      </Box>
      <Box width="50%" p="8">
        <Text fontSize="sm" fontWeight="bold" color="gray.84">
          숙박 종료일
        </Text>
        <Text fontSize="lg" fontWeight="bold" color="basic">
          {endDate}
        </Text>
      </Box>
    </Box>
  );
};

export default ReservationDate;
