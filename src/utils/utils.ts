import { ValidationLogin } from '../@types/interface';

export const validateField = ({ key, value }: ValidationLogin): string => {
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
