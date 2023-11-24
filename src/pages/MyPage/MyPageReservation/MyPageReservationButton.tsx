import { Button } from '@chakra-ui/react';

interface MyPageReservationButtonProps {
  buttonFunc: () => void;
  buttonText: string;
}

function MyPageReservationButton({
  buttonFunc,
  buttonText,
}: MyPageReservationButtonProps) {
  return (
    <Button variant="gray" size="sm" onClick={buttonFunc}>
      {buttonText}
    </Button>
  );
}

export default MyPageReservationButton;
