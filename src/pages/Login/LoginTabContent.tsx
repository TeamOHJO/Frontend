import {
  useState, FormEvent, ChangeEvent, useMemo,
} from 'react';
import {
  Flex,
  Input,
  Button,
  FormErrorMessage,
  FormControl,
} from '@chakra-ui/react';
import { LoginData, ValidationLogin } from '../../@types/interface';

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

  const validateField = ({ key, value }: ValidationLogin): string => {
    let error = '';
    switch (key) {
      case 'email':
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) error = '이메일 형식이 아닙니다.';
        break;
      case 'password':
        if (value.length < 5) error = '비밀번호는 최소 5자 이상이어야 합니다';
        break;
      default:
        break;
    }
    return error;
  };

  const errorSetFunc = (
    e: ChangeEvent<HTMLInputElement>,
    key: keyof LoginData,
  ) => {
    const { value } = e.target;
    setFormData({ ...formData, [key]: value });
    const newErrors: { [key in keyof LoginData]?: string } = {};
    const newIsError: { [key in keyof LoginData]?: boolean } = {};

    const error = validateField({ key, value });

    newErrors[key] = error;
    newIsError[key] = Boolean(error);

    setErrors((prevErrors) => ({ ...prevErrors, ...newErrors }));
    setIsError((prevIsError) => ({ ...prevIsError, ...newIsError }));
  };

  let isFormValid = true;

  isFormValid = useMemo(() => {
    const errorData = Object.values(errors).every((error) => error === '');
    const isForm = Object.values(formData).every((data) => data !== '');
    if (isForm && errorData) return false;
    return true;
  }, [errorSetFunc]);

  return (
    <Flex flexDirection="column" alignItems="center">
      <form onSubmit={handleLoginSubmit}>
        <FormControl isRequired isInvalid={isError.email}>
          <Input
            type="text"
            placeholder="이메일 입력"
            onChange={(e) => errorSetFunc(e, 'email')}
          />
          {isError.email && (
            <FormErrorMessage textAlign="left">
              {errors.email}
            </FormErrorMessage>
          )}
        </FormControl>

        <FormControl isRequired isInvalid={isError.password}>
          <Input
            type="password"
            placeholder="비밀번호 입력"
            onChange={(e) => errorSetFunc(e, 'password')}
          />
          {isError.password && (
            <FormErrorMessage textAlign="left">
              {errors.password}
            </FormErrorMessage>
          )}
        </FormControl>
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
      </form>
    </Flex>
  );
};

export default LoginTabContent;
