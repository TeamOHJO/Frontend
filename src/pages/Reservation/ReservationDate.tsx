import { Box, Text } from '@chakra-ui/react';

const ReservationDate = () => {
  return (
    <Box width="100%" display="flex" flexDir="row">
      <Box width="50%" p="8">
        <Text fontSize="sm" fontWeight="bold" color="gray.84">
          체크인
        </Text>
        <Text fontSize="lg" fontWeight="bold" color="basic">
          2023.11.20(월)
        </Text>
      </Box>
      <Box width="50%" p="8">
        <Text fontSize="sm" fontWeight="bold" color="gray.84">
          체크아웃
        </Text>
        <Text fontSize="lg" fontWeight="bold" color="basic">
          2023.11.21(화)
        </Text>
      </Box>
    </Box>
  );
};

export default ReservationDate;
