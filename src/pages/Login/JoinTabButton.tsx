import { useMemo } from 'react';
import { Button } from '@chakra-ui/react';
import { LoginTabButtonProps } from '../../@types/interface';

const JoinTabButton = ({
  errors,
  formData,
  errorSetFunc,
}: LoginTabButtonProps) => {
  let isFormValid = true;
  isFormValid = useMemo(() => {
    const errorData = Object.values(errors).every((error) => error === '');
    const isForm = Object.values(formData).every((data) => data !== '');

    if (isForm && errorData) {
      if (formData.verify !== true) {
        return true;
      }
      return false;
    }
    return true;
  }, [errorSetFunc]);

  return (
    <Button
      variant="blue"
      type="submit"
      isDisabled={isFormValid}
      _disabled={{
        bg: 'gray.300',
        borderColor: 'gray.300',
        color: 'gray.500',
        cursor: 'default',
        _hover: {
          bg: 'gray.300',
        },
      }}
    >
      회원가입
    </Button>
  );
};
export default JoinTabButton;
