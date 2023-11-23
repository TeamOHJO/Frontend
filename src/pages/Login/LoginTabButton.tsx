import { useMemo } from 'react';
import { Button } from '@chakra-ui/react';
import { LoginTabButtonProps } from '../../@types/interface';

const LoginTabButton = ({
  errors,
  formData,
  errorSetFunc,
}: LoginTabButtonProps) => {
  let isFormValid = true;
  isFormValid = useMemo(() => {
    const errorData = Object.values(errors).every((error) => error === '');
    const isForm = Object.values(formData).every((data) => data !== '');
    if (isForm && errorData) return false;
    return true;
  }, [errorSetFunc]);

  return (
    <Button
      variant="blue"
      type="submit"
      isDisabled={isFormValid}
      _disabled={{
        bg: '#CBD5E0',
      }}
    >
      로그인
    </Button>
  );
};
export default LoginTabButton;
