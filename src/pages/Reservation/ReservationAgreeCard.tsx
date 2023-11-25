import { SimpleGrid } from '@chakra-ui/react';
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
      <ReservationAgreeTitle />
    </SimpleGrid>
  );
};

export default ReservationAgreeCard;
