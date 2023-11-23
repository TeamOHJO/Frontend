import { Input, FormErrorMessage, FormControl } from '@chakra-ui/react';
import { LoginTabInputProps } from '../../@types/interface';

const LoginInput = ({ isError, errors, errorSetFunc }: LoginTabInputProps) => {
  return (
    <>
      <FormControl isRequired isInvalid={isError.email}>
        <Input
          type="text"
          placeholder="이메일 입력"
          onChange={(e) => errorSetFunc({ e, key: 'email' })}
        />
        {isError.email && (
          <FormErrorMessage textAlign="left">{errors.email}</FormErrorMessage>
        )}
      </FormControl>

      <FormControl isRequired isInvalid={isError.password}>
        <Input
          type="password"
          placeholder="비밀번호 입력"
          onChange={(e) => errorSetFunc({ e, key: 'password' })}
        />
        {isError.password && (
          <FormErrorMessage textAlign="left">
            {errors.password}
          </FormErrorMessage>
        )}
      </FormControl>
    </>
  );
};
export default LoginInput;
