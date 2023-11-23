import { useState, FormEvent } from 'react';
import { Flex } from '@chakra-ui/react';
import { FormData, LoginSetProps } from '../../@types/interface';
import LoginTabButton from './LoginTabButton';
import LoginInput from './LoginInput';
import { validateField } from '../../utils/utils';

const LoginTabContent = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [isError, setIsError] = useState({
    email: false,
    password: false,
  });
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const handleLoginSubmit = async (e: FormEvent) => {
    e.preventDefault();
  };

  const errorSetFunc = ({ e, key }: LoginSetProps) => {
    const { value } = e.target;
    setFormData({ ...formData, [key]: value });
    const newErrors: { [key in keyof FormData]?: string } = {};
    const newIsError: { [key in keyof FormData]?: boolean } = {};

    const error = validateField({ key, value });

    newErrors[key] = error;
    newIsError[key] = Boolean(error);

    setErrors((prevErrors) => ({ ...prevErrors, ...newErrors }));
    setIsError((prevIsError) => ({ ...prevIsError, ...newIsError }));
  };

  return (
    <Flex flexDirection="column" alignItems="center">
      <form onSubmit={handleLoginSubmit}>
        <LoginInput
          isError={isError}
          errors={errors}
          errorSetFunc={errorSetFunc}
        />
        <LoginTabButton
          errors={errors}
          formData={formData}
          errorSetFunc={errorSetFunc}
        />
      </form>
    </Flex>
  );
};

export default LoginTabContent;
