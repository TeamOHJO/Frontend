import { Badge, Box, Heading, Image, Text } from '@chakra-ui/react';
import { StarFilled } from '@ant-design/icons';
import { theme } from '../../styles/theme';

const ReservationBreakDown = () => {
  return (
    <Box display="flex" flexDir="row" pl="8" pr="8" pb="8" height="100%">
      <Box width="50%">
        <Image
          width="20rem"
          height="12rem"
          objectFit="cover"
          borderRadius={8}
          src="https://i.pinimg.com/564x/73/48/11/734811bd95bec06aae5d936eb23f033c.jpg"
          alt="Reservation List"
        />
      </Box>
      <Box
        width="50%"
        ml="2rem"
        display="flex"
        flexDir="column"
        justifyContent="center"
        gap="6"
      >
        <Box>
          <Badge variant="blue">펜션/풀빌라</Badge>
        </Box>
        <Heading size="md">일본 도쿄 Nakano City</Heading>
        <Text fontWeight="bold" color={theme.colors.gray600}>
          예약 인원 2명
        </Text>
        <Box display="flex" alignItems="center" gap={1}>
          <StarFilled
            style={{ color: theme.colors.blue400, fontSize: '1rem' }}
          />
          <Text as="span" size="xs">
            4.90
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default ReservationBreakDown;
