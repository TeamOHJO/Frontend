import { Badge, Box, Heading, Image, Text } from '@chakra-ui/react';
import { StarFilled } from '@ant-design/icons';
import { useSearchParams } from 'react-router-dom';
import { theme } from '../../styles/theme';

const ReservationBreakDown = () => {
  const [searchParams] = useSearchParams();
  const roomName = searchParams.get('name');
  const category = searchParams.get('category');
  const numberOfPerson = searchParams.get('numberOfPerson');
  const star = searchParams.get('star');
  const image = String(searchParams.get('image'));

  return (
    <Box display="flex" flexDir="row" pl="8" pr="8" pb="8" height="100%">
      <Box width="50%">
        <Image
          width="20rem"
          height="12rem"
          objectFit="cover"
          borderRadius={8}
          src={image}
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
          <Badge variant="blue">{category}</Badge>
        </Box>
        <Heading size="md">{roomName}</Heading>
        <Text fontWeight="bold" color={theme.colors.gray600}>
          예약 인원 {numberOfPerson}명
        </Text>
        <Box display="flex" alignItems="center" gap={1}>
          <StarFilled
            style={{ color: theme.colors.blue400, fontSize: '1rem' }}
          />
          <Text as="span" size="xs">
            {star}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default ReservationBreakDown;
