import { useEffect, FunctionComponent } from 'react';
import { Alert, AlertIcon, CloseButton, AlertDescription, Fade } from '@chakra-ui/react';
import { HomeHeartToastPopupProps } from '../../@types/interface';

const HomeHeartToastPopup: FunctionComponent<HomeHeartToastPopupProps> = ({
  status,
  setFunc,
  setShowPopUp,
}) => {
  const onClose = () => {
    setFunc({ active: false, message: status.message });
    setShowPopUp(false);
  };

  useEffect(() => {
    // alert 창 5초 후에 사라지게 하기
    if (status.active) {
      const timer = setTimeout(() => {
        setFunc({ active: false, message: status.message });
        setShowPopUp(false);
      }, 5000);
      return () => {
        clearTimeout(timer);
      };
    }

    return undefined;
  }, [status.active]);

  return (
    <Fade
      in={status.active}
      onMouseOver={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.stopPropagation();
      }}
    >
      <Alert
        borderRadius={4}
        height="64px"
        bg="alert"
        width="320px"
        position="fixed"
        left="50%"
        bottom="60px"
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
export default HomeHeartToastPopup;
