import {
  Input,
  FormErrorMessage,
  FormControl,
  InputGroup,
  InputRightElement,
  IconButton,
} from '@chakra-ui/react';
import { useState } from 'react';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import { LoginTabInputProps } from '../../@types/interface';

const LoginInput = ({ isError, errors, errorSetFunc }: LoginTabInputProps) => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  return (
    <>
      <FormControl
        isRequired
        isInvalid={isError.email}
        width="70%"
        marginBottom="40px"
        minWidth="260px"
      >
        <Input
          type="text"
          variant="outline"
          borderColor="gray.200"
          placeholder="이메일 입력"
          _placeholder={{
            color: 'gray.400',
          }}
          color="basic"
          onChange={(e) => errorSetFunc({ e, key: 'email' })}
          fontSize="sm"
        />
        {isError.email && (
          <FormErrorMessage textAlign="left">{errors.email}</FormErrorMessage>
        )}
      </FormControl>

      <FormControl
        isRequired
        isInvalid={isError.password}
        width="70%"
        marginBottom="40px"
        minWidth="260px"
      >
        <InputGroup>
          <Input
            type={show ? 'text' : 'password'}
            variant="outline"
            placeholder="비밀번호 입력"
            borderColor="gray.200"
            _placeholder={{
              color: 'gray.400',
            }}
            color="basic"
            onChange={(e) => errorSetFunc({ e, key: 'password' })}
            fontSize="sm"
          />
          <InputRightElement width="3.5rem">
            <IconButton
              minWidth="45px"
              height="30px"
              aria-label={show ? '비밀번호 보기' : '비밀번호 가리기'}
              onClick={handleClick}
            >
              {show ? (
                <EyeInvisibleOutlined
                  style={{
                    fontSize: '1.1rem',
                    color: 'RGBA(0, 0, 0, 0.48)',
                  }}
                />
              ) : (
                <EyeOutlined
                  style={{
                    fontSize: '1.1rem',
                    color: 'RGBA(0, 0, 0, 0.48)',
                  }}
                />
              )}
            </IconButton>
          </InputRightElement>
        </InputGroup>
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
