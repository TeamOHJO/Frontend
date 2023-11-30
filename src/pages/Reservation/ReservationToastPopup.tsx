import { useEffect, FunctionComponent } from 'react';
import { Alert, AlertIcon, CloseButton, AlertDescription, Fade } from '@chakra-ui/react';
import { ToastPopupProps } from '../../@types/interface';

const ReservationToastPopup: FunctionComponent<ToastPopupProps> = ({ status, setFunc }) => {
  const onClose = () => {
    setFunc({ active: false, message: status.message });
  };

  useEffect(() => {
    if (status.active) {
      const timer = setTimeout(() => {
        setFunc({ active: false, message: status.message });
      }, 2000);
      return () => {
        clearTimeout(timer);
      };
    }

    return undefined;
  }, [status.active]);

  return (
    <Fade in={status.active}>
      <Alert
        borderRadius={4}
        height="64px"
        bg="alert"
        width="320px"
        position="fixed"
        left="50%"
        bottom="50px"
        marginLeft="-160px"
        style={{ zIndex: 2, cursor: 'auto' }}
        onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
          event.stopPropagation();
        }}
      >
        <AlertIcon />
        <AlertDescription>{status.message}</AlertDescription>
        <CloseButton alignSelf="flex-end" position="absolute" right={1} top={1} onClick={onClose} />
      </Alert>
    </Fade>
  );
};
export default ReservationToastPopup;
