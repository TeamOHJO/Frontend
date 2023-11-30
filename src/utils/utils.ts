import { ValidationLogin } from '../@types/interface';

/* eslint-disable */
export const validateField = ({ key, value, formData }: ValidationLogin) => {
  let error = '';
  if (typeof value === 'string') {
    switch (key) {
      case 'email':
        if (!/^[a-zA-Z0-9]+@[^\s@]+\.[^\s@]+$/.test(value))
          error = '올바른 이메일 형식이 아닙니다.';
        break;
      case 'password':
        if (value.length < 5) error = '비밀번호는 최소 5자 이상이어야 합니다.';
        break;
      case 'passwordConfirm':
        if (value !== formData.password) error = '비밀번호가 일치하지 않습니다.';
        break;
      case 'phone':
        if (!/^\d{10,11}$/.test(value)) error = '올바른 휴대전화번호 형식이 아닙니다.';
        break;
      case 'name':
        if (value.length > 10) error = '이름은 10자 이내로 입력해야 합니다.';
        break;
      default:
        break;
    }
  }

  return error;
};
/* eslint-enable */

export const setCookies = async (userEmail: string, userName: string, token: string) => {
  try {
    document.cookie = `userEmail=${userEmail};max-age=3600;path=/;secure`;
    document.cookie = `userName=${userName};max-age=3600;path=/;secure`;
    document.cookie = `token=${token};max-age=3600;path=/;secure`;
  } catch (error) {
    alert('쿠키설정에 실패했습니다.');
  }
};

export function getCookie(name: string): string | undefined {
  const cookieValue = document.cookie
    .split('; ')
    .find((row: any) => row.startsWith(`${name}=`))
    ?.split('=')[1];
  return cookieValue || undefined;
}

export const removeCookies = async () => {
  try {
    document.cookie = 'userEmail=; Max-Age=0; path=/';
    document.cookie = 'userName=; Max-Age=0; path=/';
    document.cookie = 'token=; Max-Age=0; path=/';
  } catch (e) {
    alert('쿠키삭제에 실패했습니다.');
  }
};

export const getTomorrow = () => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  return tomorrow;
};

const setTwoDigit = (num: number) => {
  return num < 10 ? `0${num}` : `${num}`;
};

export const changeDateFormat = (date: Date) => {
  // mysql DATETIME 형식으로 변환, api에 사용
  const year = date.getFullYear();
  const month = setTwoDigit(date.getMonth() + 1);
  const day = setTwoDigit(date.getDate());

  return `${year}-${month}-${day}`;
};

export const changeCategoryFormat = (category: string | undefined) => {
  if (category === undefined) return 'HOTEL';
  if (category === '호텔·리조트') return 'HOTEL';
  if (category === '한옥') return 'HANOK';
  if (category === '펜션·풀빌라') return 'PENSION';
  if (category === '모텔') return 'MOTEL';
  if (category === '게스트하우스') return 'GUESTHOUSE';

  // 아무것도 없을때
  return category;
};

export const changeCategoryReverseFormat = (category: string) => {
  if (category === 'HOTEL') return '호텔/리조트';
  if (category === 'HANOK') return '한옥';
  if (category === 'PENSION') return '펜션/풀빌라';
  if (category === 'MOTEL') return '모텔';
  if (category === 'GUESTHOUSE') return '게스트하우스';

  // 아무것도 없을때
  return category;
};

export function calculateDaysDifference(
  startDate: string,
  endDate: string,
): number {
  const start: Date = new Date(startDate);
  const end: Date = new Date(endDate);

  const timeDifference: number = end.getTime() - start.getTime();

  const daysDifference: number = Math.floor(
    timeDifference / (1000 * 60 * 60 * 24),
  );

  return daysDifference;
}

export function formatNumberWithCommas(number: number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export function calculateDiscountedPrice(
  price: number,
  discountPercentage: number,
) {
  if (Number.isNaN(price) || Number.isNaN(discountPercentage)) {
    throw new Error('유효하지 않은 가격이나 할인가 입니다.');
  }

  if (discountPercentage === 0) {
    return price;
  }

  const discountAmount = (price * discountPercentage) / 100;
  const discountedPrice = price - discountAmount;

  return discountedPrice;
}

export const changePriceDiscountFormat = (
  price: number,
  discountPercentage: number,
  day: number,
) => {
  return (Math.floor((price * day * (100 - discountPercentage)) / 100000) * 1000).toLocaleString();
};

export const changeStarFormat = (star: number) => {
  if (star === 0) {
    return '(리뷰 없음)';
  }
  return star.toFixed(1);
};

export const cutStringLength = (str: string) => {
  if (str.length > 15) {
    return `${str.slice(0, 15)}...`;
  }
  return str;
};
