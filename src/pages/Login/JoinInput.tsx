import {
  Input,
  FormErrorMessage,
  FormControl,
  InputGroup,
  InputRightElement,
  Button,
  IconButton,
  Flex,
} from '@chakra-ui/react';
import { useState } from 'react';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import { LoginTabInputProps } from '../../@types/interface';

const JoinInput = ({ isError, errors, errorSetFunc }: LoginTabInputProps) => {
  const [show, setShow] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <>
      <FormControl
        isRequired
        isInvalid={isError.email}
        width="70%"
        marginBottom="40px"
        minWidth="260px"
      >
        <Flex justifyContent="space-between">
          <Input
            type="text"
            width="calc(100% - 70px)"
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
          <Button variant="blue" size="sm" width="60px">
            인증요청
          </Button>
        </Flex>
        {isError.email && (
          <FormErrorMessage textAlign="left">{errors.email}</FormErrorMessage>
        )}
      </FormControl>

      <FormControl
        isRequired
        isInvalid={isError.name}
        width="70%"
        marginBottom="40px"
        minWidth="260px"
      >
        <Flex justifyContent="space-between">
          <Input
            type="text"
            variant="outline"
            borderColor="gray.200"
            placeholder="이름 입력"
            _placeholder={{
              color: 'gray.400',
            }}
            color="basic"
            onChange={(e) => errorSetFunc({ e, key: 'name' })}
            fontSize="sm"
          />
        </Flex>
        {isError.name && (
          <FormErrorMessage textAlign="left">{errors.name}</FormErrorMessage>
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
              onClick={() => setShow(!show)}
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

      <FormControl
        isRequired
        isInvalid={isError.passwordConfirm}
        width="70%"
        marginBottom="40px"
        minWidth="260px"
      >
        <InputGroup>
          <Input
            type={showConfirm ? 'text' : 'password'}
            variant="outline"
            placeholder="비밀번호 확인 입력"
            borderColor="gray.200"
            _placeholder={{
              color: 'gray.400',
            }}
            color="basic"
            onChange={(e) => errorSetFunc({ e, key: 'passwordConfirm' })}
            fontSize="sm"
          />
          <InputRightElement width="3.5rem">
            <IconButton
              minWidth="45px"
              height="30px"
              aria-label={
                showConfirm ? '비밀번호 확인 보기' : '비밀번호 확인 가리기'
              }
              onClick={() => setShowConfirm(!showConfirm)}
            >
              {showConfirm ? (
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
        {isError.passwordConfirm && (
          <FormErrorMessage textAlign="left">
            {errors.passwordConfirm}
          </FormErrorMessage>
        )}
      </FormControl>

      <FormControl
        isRequired
        isInvalid={isError.number}
        width="70%"
        marginBottom="40px"
        minWidth="260px"
      >
        <Flex justifyContent="space-between">
          <Input
            type="text"
            variant="outline"
            borderColor="gray.200"
            placeholder="휴대전화번호 입력"
            _placeholder={{
              color: 'gray.400',
            }}
            color="basic"
            onChange={(e) => errorSetFunc({ e, key: 'number' })}
            fontSize="sm"
          />
        </Flex>
        {isError.number && (
          <FormErrorMessage textAlign="left">{errors.number}</FormErrorMessage>
        )}
      </FormControl>
    </>
  );
};
export default JoinInput;
