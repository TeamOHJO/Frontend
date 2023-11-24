import { Card, SimpleGrid } from '@chakra-ui/react';
import ReservationDate from './ReservationDate';

const ReservationInfoCard = () => {
  return (
    <SimpleGrid
      mt="1rem"
      p="4"
      spacing={4}
      templateColumns={['repeat(1, 1fr)']}
      justifyContent="center"
      alignItems="center"
    >
      <Card variant="elevated" pb="2rem">
        <ReservationDate />
      </Card>
    </SimpleGrid>
  );
};

export default ReservationInfoCard;
