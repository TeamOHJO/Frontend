import { useState, FormEvent } from 'react';
import styled from '@emotion/styled';
import { AxiosError } from 'axios';
import { useSetRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { FormData, LoginSetProps } from '../../@types/interface';
import LoginTabButton from './LoginTabButton';
import LoginInput from './LoginInput';
import { setCookies, validateField } from '../../utils/utils';
import { postLogin } from '../../api/login';
import { ErrorData } from '../../api/type';
import { toastPopupState } from '../../states/atom';
import useThrottle from '../../hooks/useThrottle';

const LoginTabContent = () => {
  const handleThrottle = useThrottle();
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
  const navigate = useNavigate();
  const setShowAlert = useSetRecoilState(toastPopupState);

  const handleLoginSubmit = async (e: FormEvent) => {
    e.preventDefault();
    handleThrottle(async () => {
      try {
        console.log('로그인');
        const res = await postLogin(formData);
        const { data } = res;
        await setCookies(data.email, data.name, data.token);
        navigate('/');
      } catch (error) {
        if (isAxiosError(error)) {
          const axiosError = error as AxiosError;
          const data = axiosError.response?.data as ErrorData;
          if (data.code === 400) {
            setShowAlert({
              active: true,
              message: '이메일 또는 비밀번호가 다릅니다.',
            });
          }
        } else {
          console.log('Axios 에러가 아닌 다른 에러가 발생했습니다:', error);
        }
      }
    });
  };

  // 에러가 Axios 에러인지 확인하는 함수
  const isAxiosError = (error: any): error is AxiosError => {
    return error.isAxiosError !== undefined;
  };

  const errorSetFunc = ({ value, key }: LoginSetProps) => {
    setFormData({ ...formData, [key]: value });
    const newErrors: { [key in keyof FormData]?: string } = {};
    const newIsError: { [key in keyof FormData]?: boolean } = {};

    const error = validateField({ key, value, formData });

    newErrors[key] = error;
    newIsError[key] = !!error;

    setErrors((prevErrors: any) => ({ ...prevErrors, ...newErrors }));
    setIsError((prevIsError: any) => ({ ...prevIsError, ...newIsError }));
  };

  return (
    <StyledForm onSubmit={handleLoginSubmit}>
      <LoginInput isError={isError} errors={errors} errorSetFunc={errorSetFunc} />
      <LoginTabButton errors={errors} formData={formData} errorSetFunc={errorSetFunc} />
    </StyledForm>
  );
};

const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default LoginTabContent;
