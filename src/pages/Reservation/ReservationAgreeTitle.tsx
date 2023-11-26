import { Box, Checkbox, Text } from '@chakra-ui/react';
import { theme } from '../../styles/theme';

const ReservationAgreeTitle = () => {
  return (
    <Box ml="2rem">
      <Box display="flex" flexDir="row">
        <Text fontSize="1rem" fontWeight="bold">
          약관 동의
        </Text>
        <Text ml=".8rem" mt=".2rem" fontSize="1rem" color={theme.colors.red400}>
          *
        </Text>
      </Box>
      <Checkbox
        borderColor={theme.colors.gray300}
        colorScheme="blue"
        size="lg"
        mt="1rem"
      >
        <Text>[필수] 만 14세 이상 이용 동의 </Text>
      </Checkbox>
    </Box>
  );
};

export default ReservationAgreeTitle;
