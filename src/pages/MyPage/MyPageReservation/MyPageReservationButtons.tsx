import { ButtonGroup, Button, Text } from '@chakra-ui/react';

interface MyPageReservationTabsProps {
  isReserved: boolean;
  onMoveToReservationRef: () => void;
  onMoveToCancellationRef: () => void;
}

function MyPageReservationButtons({
  isReserved,
  onMoveToReservationRef,
  onMoveToCancellationRef,
}: MyPageReservationTabsProps) {
  return (
    <ButtonGroup variant="link" spacing="3" mt="1rem">
      <Button
        colorScheme={isReserved ? 'blue' : 'gray'}
        onClick={onMoveToReservationRef}
      >
        예약 내역
      </Button>
      <Text>/</Text>
      <Button
        colorScheme={!isReserved ? 'blue' : 'gray'}
        onClick={onMoveToCancellationRef}
      >
        취소 내역
      </Button>
    </ButtonGroup>
  );
}

export default MyPageReservationButtons;
