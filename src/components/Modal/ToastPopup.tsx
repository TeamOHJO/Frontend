import { useEffect, FunctionComponent } from 'react';
import {
  Alert,
  AlertIcon,
  CloseButton,
  AlertDescription,
  Fade,
} from '@chakra-ui/react';
import { ToastPopupProps } from '../../@types/interface';

const ToastPopup: FunctionComponent<ToastPopupProps> = ({
  status,
  setFunc,
}) => {
  const onClose = () => {
    setFunc({ active: false, message: status.message });
  };

  useEffect(() => {
    // alert 창 5초 후에 사라지게 하기
    if (status.active) {
      const timer = setTimeout(() => {
        setFunc({ active: false, message: status.message });
      }, 5000);
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
        position="absolute"
        left="50%"
        bottom="75px"
        marginLeft="-160px"
      >
        <AlertIcon />
        <AlertDescription>{status.message}</AlertDescription>
        <CloseButton
          alignSelf="flex-end"
          position="absolute"
          right={1}
          top={1}
          onClick={onClose}
        />
      </Alert>
    </Fade>
  );
};
export default ToastPopup;
