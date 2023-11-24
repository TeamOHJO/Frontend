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

function MyPageReservationCard() {
  return (
    <Card size="sm">
      <CardBody>
        <Image
          width="100%"
          height="290px"
          objectFit="cover"
          src="https://www.lottehotel.com/content/dam/lotte-hotel/city/mapo/overview/introduction/190725-1-768-ove-LTMA.png.thumb.768.768.jpg"
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
              <Badge variant="blue">펜션/풀빌라</Badge>
            </Box>
            <Heading size="md">일본 도쿄 Nakano City</Heading>
            <Text size="sm">디럭스 패밀리룸</Text>
            <Text as="p" size="xs" color="blackAlpha.600">
              12월 26일 - 12월 29일 (3박)
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
                4.90
              </Text>
            </Box>
            <Button variant="gray" size="sm">
              예약 취소
            </Button>
          </Box>
        </Box>
      </CardBody>
    </Card>
  );
}

export default MyPageReservationCard;
