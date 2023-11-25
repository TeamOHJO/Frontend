import { ButtonGroup, Button, Text } from '@chakra-ui/react';

interface MyPageReservationTabsProps {
  isReserved: boolean;
  reservationRef: React.RefObject<HTMLDivElement>;
  cancellationRef: React.RefObject<HTMLDivElement>;
}

function MyPageReservationButtons({
  isReserved,
  reservationRef,
  cancellationRef,
}: MyPageReservationTabsProps) {
  const onMoveToRef = (ref: React.RefObject<HTMLDivElement>) => {
    ref?.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <ButtonGroup variant="link" spacing="3" mt="1rem">
      <Button
        colorScheme={isReserved ? 'blue' : 'gray'}
        onClick={() => onMoveToRef(reservationRef)}
      >
        예약 내역
      </Button>
      <Text>/</Text>
      <Button
        colorScheme={!isReserved ? 'blue' : 'gray'}
        onClick={() => onMoveToRef(cancellationRef)}
      >
        취소 내역
      </Button>
    </ButtonGroup>
  );
}

export default MyPageReservationButtons;
