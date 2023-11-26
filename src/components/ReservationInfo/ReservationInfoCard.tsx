import { Card, SimpleGrid } from '@chakra-ui/react';
import ReservationDate from './ReservationDate';
import ReservationBreakDown from './ReservationBreakDown';
import ReservationSubBreakDown from './ReservationSubBreakDown';

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
        <ReservationBreakDown />
        <ReservationSubBreakDown />
      </Card>
    </SimpleGrid>
  );
};

export default ReservationInfoCard;
