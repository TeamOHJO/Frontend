import { ButtonGroup, Button } from '@chakra-ui/react';

interface MyPageReservationTabsProps {
  leftColor: string;
  rightColor: string;
  reservationRef: React.RefObject<HTMLDivElement>;
  cancellationRef: React.RefObject<HTMLDivElement>;
}

function MyPageReservationButtons({
  leftColor,
  rightColor,
  reservationRef,
  cancellationRef,
}: MyPageReservationTabsProps) {
  const onMoveToReservationRef = () => {
    reservationRef?.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };
  const onMoveToCancellationRef = () => {
    cancellationRef?.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <ButtonGroup variant="link" spacing="3" mt="1rem">
      <Button colorScheme={leftColor} onClick={onMoveToReservationRef}>
        예약 내역
      </Button>
      <Button colorScheme={rightColor} onClick={onMoveToCancellationRef}>
        취소 내역
      </Button>
    </ButtonGroup>
  );
}

export default MyPageReservationButtons;
