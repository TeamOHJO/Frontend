import { Card, CardBody, Image, Box } from '@chakra-ui/react';
import MyPageReservationCardLeft from './MyPageReservationCardLeft';
import MyPageReservationCardRight from './MyPageReservationCardRight';

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
          <MyPageReservationCardLeft />
          <MyPageReservationCardRight />
        </Box>
      </CardBody>
    </Card>
  );
}

export default MyPageReservationCard;
