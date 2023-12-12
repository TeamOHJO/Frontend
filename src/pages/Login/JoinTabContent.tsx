import { useState, FormEvent } from 'react';
import styled from '@emotion/styled';
import { isAxiosError, AxiosError } from 'axios';
import { useSetRecoilState } from 'recoil';
import { validateField } from '../../utils/utils';
import { FormData, LoginSetProps } from '../../@types/interface';
import JoinInput from './JoinInput';
import JoinTabButton from './JoinTabButton';
import { postJoin } from '../../api/login';
import { ErrorData } from '../../api/type';
import { toastPopupState } from '../../states/atom';
import useThrottle from '../../hooks/useThrottle';
import SocialLoginContainer from './SocialLoginContainer';

const JoinTabContent = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
    name: '',
    phone: '',
    verify: false,
  });
  const [isError, setIsError] = useState({
    email: false,
    password: false,
    passwordConfirm: false,
    name: false,
    phone: false,
    verify: false,
  });
  const [errors, setErrors] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
    name: '',
    phone: '',
    verify: '',
  });
  const setShowAlert = useSetRecoilState(toastPopupState);
  const handleThrottle = useThrottle();

  const handleJoinSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const joinData = {
      email: formData.email,
      username: formData.name,
      password: formData.password,
      phonenumber: formData.phone,
    };
    handleThrottle(async () => {
      try {
        const res = await postJoin(joinData);
        const { code } = res;
        if (code) {
          if (code === 201) {
            window.location.reload();
          }
          if (code === 200) {
            alert('기존의 계정이 복구되었습니다');
            window.location.reload();
          }
        }
      } catch (error) {
        if (isAxiosError(error)) {
          const axiosError = error as AxiosError;
          const data = axiosError.response?.data as ErrorData;
          if (data.code === 412) {
            setShowAlert({
              active: true,
              message: '유효하지 않은 이메일 형식입니다.',
            });
          } else if (data.code === 400) {
            setShowAlert({
              active: true,
              message: '이미 가입된 회원입니다.',
            });
          } else if (data.code === 411) {
            setShowAlert({
              active: true,
              message: '유효하지 않은 휴대폰 번호 형식입니다.',
            });
          }
        } else {
          console.log('Axios 에러가 아닌 다른 에러가 발생했습니다:', error);
        }
      }
    });
  };

  const errorSetFunc = ({ value, key }: LoginSetProps) => {
    setFormData({ ...formData, [key]: value });
    const newErrors: { [key in keyof FormData]?: string } = {};
    const newIsError: { [key in keyof FormData]?: boolean } = {};

    const error = validateField({ key, value, formData });

    newErrors[key] = error;
    newIsError[key] = !!error;

    setErrors(prevErrors => ({ ...prevErrors, ...newErrors }));
    setIsError(prevIsError => ({ ...prevIsError, ...newIsError }));
  };
  return (
    <StyledForm onSubmit={handleJoinSubmit}>
      <JoinInput isError={isError} errors={errors} errorSetFunc={errorSetFunc} />
      <JoinTabButton errors={errors} formData={formData} errorSetFunc={errorSetFunc} />
      <SocialLoginContainer />
    </StyledForm>
  );
};
const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default JoinTabContent;
