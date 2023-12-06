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
import { useSetRecoilState } from 'recoil';
import { LoginTabInputProps } from '../../@types/interface';
import { getVerify, postEmail } from '../../api';
import { toastPopupState } from '../../states/atom';
import useThrottle from '../../hooks/useThrottle';

const JoinInput = ({ isError, errors, errorSetFunc }: LoginTabInputProps) => {
  const [show, setShow] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [openVerify, setOpenVerify] = useState(false);
  const [verify, setVerify] = useState({
    isVerify: false,
    verify: '',
  });
  const setShowAlert = useSetRecoilState(toastPopupState);
  const checkEmail = () => {
    if (isError.email === true || userEmail === '') {
      return true;
    }
    return false;
  };
  const handleThrottle = useThrottle();

  const sendVerify = async () => {
    setOpenVerify(true);
    const email = {
      email: userEmail,
    };
    handleThrottle(async () => {
      try {
        const res = await postEmail(email);
        if (res === 'success') {
          setShowAlert({
            active: true,
            message: '이메일로 인증번호를 전송했습니다.',
          });
        }
      } catch (error) {
        console.log(error);
      }
    });
  };

  const checkVerify = async () => {
    handleThrottle(async () => {
      try {
        const res = await getVerify(verify.verify);
        const { success } = res;
        if (success === true) {
          setShowAlert({
            active: true,
            message: '이메일 인증에 성공했습니다.',
          });
          setOpenVerify(false);
          errorSetFunc({ value: true, key: 'verify' });
        } else {
          setShowAlert({
            active: true,
            message: '이메일 인증번호가 다릅니다. 다시 시도해 주세요.',
          });
        }
      } catch (error) {
        console.log(error);
      }
    });
  };

  return (
    <>
      <FormControl
        isRequired
        isInvalid={isError.email}
        width="70%"
        marginBottom={!openVerify ? '40px' : '10px'}
        minWidth="260px"
      >
        <Flex justifyContent="space-between">
          <Input
            readOnly={openVerify}
            type="text"
            width="calc(100% - 70px)"
            variant="outline"
            borderColor="gray.200"
            placeholder="이메일 입력"
            _placeholder={{
              color: 'gray.400',
            }}
            color="basic"
            backgroundColor={openVerify ? 'gray.200' : 'white'}
            onChange={e => {
              const { value } = e.target;
              errorSetFunc({ value, key: 'email' });
              setUserEmail(e.target.value);
            }}
            fontSize="sm"
          />

          <Button
            variant="blue"
            size="sm"
            width="60px"
            isDisabled={checkEmail()}
            onClick={sendVerify}
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
            {!openVerify ? '인증요청' : '재전송'}
          </Button>
        </Flex>
        {isError.email && <FormErrorMessage textAlign="left">{errors.email}</FormErrorMessage>}
      </FormControl>

      {openVerify && (
        <FormControl isRequired width="70%" marginBottom="40px" minWidth="260px">
          <Flex justifyContent="space-between">
            <Input
              type="text"
              width="calc(100% - 70px)"
              variant="outline"
              borderColor="gray.200"
              placeholder="인증번호 입력"
              _placeholder={{
                color: 'gray.400',
              }}
              color="basic"
              onChange={e => setVerify({ isVerify: true, verify: e.target.value })}
              fontSize="sm"
            />

            <Button
              variant="blue"
              size="sm"
              width="60px"
              isDisabled={!verify.isVerify}
              onClick={checkVerify}
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
              확인
            </Button>
          </Flex>
        </FormControl>
      )}

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
            onChange={e => {
              const { value } = e.target;
              errorSetFunc({ value, key: 'name' });
            }}
            fontSize="sm"
          />
        </Flex>
        {isError.name && <FormErrorMessage textAlign="left">{errors.name}</FormErrorMessage>}
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
            onChange={e => {
              const { value } = e.target;
              errorSetFunc({ value, key: 'password' });
            }}
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
          <FormErrorMessage textAlign="left">{errors.password}</FormErrorMessage>
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
            onChange={e => {
              const { value } = e.target;
              errorSetFunc({ value, key: 'passwordConfirm' });
            }}
            fontSize="sm"
          />
          <InputRightElement width="3.5rem">
            <IconButton
              minWidth="45px"
              height="30px"
              aria-label={showConfirm ? '비밀번호 확인 보기' : '비밀번호 확인 가리기'}
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
          <FormErrorMessage textAlign="left">{errors.passwordConfirm}</FormErrorMessage>
        )}
      </FormControl>

      <FormControl
        isRequired
        isInvalid={isError.phone}
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
            onChange={e => {
              const { value } = e.target;
              errorSetFunc({ value, key: 'phone' });
            }}
            fontSize="sm"
          />
        </Flex>
        {isError.phone && <FormErrorMessage textAlign="left">{errors.phone}</FormErrorMessage>}
      </FormControl>
    </>
  );
};
export default JoinInput;
