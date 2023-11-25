import { ValidationLogin } from '../@types/interface';

export const validateField = ({
  key,
  value,
  formData,
}: ValidationLogin): string => {
  let error = '';
  switch (key) {
    case 'email':
      if (!/^[a-zA-Z0-9]+@[^\s@]+\.[^\s@]+$/.test(value)) error = '올바른 이메일 형식이 아닙니다.';
      break;
    case 'password':
      if (value.length < 5) error = '비밀번호는 최소 5자 이상이어야 합니다.';
      break;
    case 'passwordConfirm':
      if (value !== formData.password) error = '비밀번호가 일치하지 않습니다.';
      break;
    case 'number':
      if (!/^\d{10,11}$/.test(value)) error = '올바른 휴대전화번호 형식이 아닙니다.';
      break;
    case 'name':
      if (value.length > 10) error = '이름은 10자 이내로 입력해야 합니다.';
      break;
    default:
      break;
  }
  return error;
};

export const setCookies = async (userEmail: string, userName: string) => {
  try {
    document.cookie = `userEmail=${userEmail};max-age=1200;path=/;secure`;
    document.cookie = `userName=${userName};max-age=1200;path=/;secure`;
  } catch (error) {
    console.error(error);
    alert('쿠키설정에 실패했습니다.');
  }
};

export function getCookie(name: string): string | undefined {
  const cookieValue = document.cookie
    .split('; ')
    .find((row) => row.startsWith(`${name}=`))
    ?.split('=')[1];

  return cookieValue || undefined;
}

export const removeCookies = async () => {
  try {
    document.cookie = 'userEmail=; Max-Age=0; path=/';
    document.cookie = 'userName=; Max-Age=0; path=/';
  } catch (e) {
    console.error(e);
    alert('쿠키삭제에 실패했습니다.');
  }
};
