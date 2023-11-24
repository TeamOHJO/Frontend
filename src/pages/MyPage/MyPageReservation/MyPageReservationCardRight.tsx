import { Box, Text, Button } from '@chakra-ui/react';
import { StarFilled } from '@ant-design/icons';
import { theme } from '../../../styles/theme';

function MyPageReservationCardRight() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      alignItems="flex-end"
    >
      <Box display="flex" alignItems="center" gap={1}>
        <StarFilled style={{ color: theme.colors.blue400, fontSize: '1rem' }} />
        <Text as="span" size="xs">
          4.90
        </Text>
      </Box>
      <Button variant="gray" size="sm">
        예약 취소
      </Button>
    </Box>
  );
}

export default MyPageReservationCardRight;
