import { Card, SimpleGrid } from '@chakra-ui/react';
import ReservationPaymentTitle from './ReservationPaymentTitle';
import ReservationProdPrice from './ReservationProdPrice';

const ReservationPaymentCard = () => {
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
        <ReservationPaymentTitle />
        <ReservationProdPrice />
      </Card>
    </SimpleGrid>
  );
};

export default ReservationPaymentCard;
