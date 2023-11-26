import { Card, SimpleGrid } from '@chakra-ui/react';
import ReservationAgreeTitle from './ReservationAgreeTitle';

const ReservationAgreeCard = () => {
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
        <ReservationAgreeTitle />
      </Card>
    </SimpleGrid>
  );
};

export default ReservationAgreeCard;
