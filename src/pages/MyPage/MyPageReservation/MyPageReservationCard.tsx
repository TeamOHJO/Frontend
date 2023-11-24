import {
  Card,
  CardBody,
  Image,
  Box,
  Badge,
  Heading,
  Text,
  Button,
} from '@chakra-ui/react';
import { StarFilled } from '@ant-design/icons';
import { theme } from '../../../styles/theme';
import { ReservationData } from '../../../@types/interface';

interface MyPageReservationCardProps {
  item: ReservationData;
}

function MyPageReservationCard({ item }: MyPageReservationCardProps) {
  return (
    <Card size="sm">
      <CardBody>
        <Image
          width="100%"
          height="290px"
          objectFit="cover"
          src={item.image}
          alt="Accommodation Photo"
          borderRadius="lg"
        />
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          mt="6"
        >
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            alignItems="flex-start"
            gap={1}
          >
            <Box textAlign="left">
              <Badge variant="blue">{item.category}</Badge>
            </Box>
            <Heading size="md">{item.accommodationName}</Heading>
            <Text size="sm">{item.name}</Text>
            <Text as="p" size="xs" color="blackAlpha.600">
              {item.startTime} - {item.endTime} ({item.nights}박)
            </Text>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            alignItems="flex-end"
          >
            <Box display="flex" alignItems="center" gap={1}>
              <StarFilled
                style={{ color: theme.colors.blue400, fontSize: '1rem' }}
              />
              <Text as="span" size="xs">
                {item.stars.toFixed(2)}
              </Text>
            </Box>
            {item.deletedAt ? (
              <Button variant="gray" size="sm">
                예약 취소
              </Button>
            ) : (
              <Text size="sm" fontWeight="bold" color="red.500">
                취소됨
              </Text>
            )}
          </Box>
        </Box>
      </CardBody>
    </Card>
  );
}

export default MyPageReservationCard;
