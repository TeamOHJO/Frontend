import { Card, SimpleGrid } from '@chakra-ui/react';
import ReservationDate from './ReservationDate';
import ReservationBreakDown from './ReservationBreakDown';
import ReservationSubBreakDown from './ReservationSubBreakDown';
import { ReservationData } from '../../@types/interface';

interface ReservationInfoCardProps {
  roomDetails?: ReservationData | null;
}

const ReservationInfoCard = ({ roomDetails }: ReservationInfoCardProps) => {
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
        <ReservationBreakDown roomDetails={roomDetails} />
        <ReservationSubBreakDown roomDetails={roomDetails} />
      </Card>
    </SimpleGrid>
  );
};
ReservationInfoCard.defaultProps = {
  roomDetails: null,
};

export default ReservationInfoCard;
