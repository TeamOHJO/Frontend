import axios from 'axios';
import { JoinData, LoginData, Email, ReservationPostData } from './type';
import { getCookie } from '../utils/utils';
import { AddReviewData } from '../@types/interface';

axios.defaults.withCredentials = true;
// const token = getCookie('token');

const client = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
  headers: {
    'content-type': import.meta.env.VITE_CONTENT_TYPE,
  },
});

const clientToken = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
  headers: {
    'content-type': import.meta.env.VITE_CONTENT_TYPE,
    // Authorization: `Bearer ${token}`,
  },
});

clientToken.interceptors.request.use(
  config => {
    const accessToken = getCookie('token');
    if (accessToken) {
      const newConfig = { ...config };
      newConfig.headers.Authorization = `Bearer ${accessToken}`;
      return newConfig;
    }
    return config;
  },
  error => Promise.reject(error),
);

export const postLogin = async (loginData: LoginData) => {
  const res = await client.post('/login', loginData);
  return res.data;
};

export const postJoin = async (joinData: JoinData) => {
  const res = await client.post('/user/signup', joinData);
  return res.data;
};

export const postEmail = async (email: Email) => {
  const res = await client.post('/user/email/confirmation', email);
  return res.data;
};

export const getVerify = async (verify: string, email: string) => {
  const res = await client.get(`/user/verify/${verify}?email=${email}`);
  return res.data;
};

// 토큰 쓰는 API 형식
export const postLogout = async () => {
  const res = await clientToken.post('/logout');
  return res.data;
};

export const testToken = async () => {
  const res = await clientToken.get('/user/test');
  return res;
};

// 장바구니 가져오기
export const getBasket = async () => {
  const res = await clientToken.get('/basket');
  return res;
};

// 장바구니 삭제
export const DeleteBasketItem = async (basketId: number) => {
  const res = await clientToken.delete(`/basket/${basketId}`);
  return res;
};

// 마이페이지 > 예약 취소 요청 API
export const CancelReservation = async (reservationId: number) => {
  const res = await clientToken.delete(`/reservation/${reservationId}`);
  return res;
};

// 마이페이지 > 예약 내역 가져오기
export const getMyPageReservationList = async () => {
  const res = await clientToken.get('/reservation');
  return res;
};

// 마이페이지 > 예약 취소 내역 가져오기
export const getMyPageCancelledList = async () => {
  const res = await clientToken.get('/reservation/canceled');
  return res;
};

// 마이페이지 > 리뷰 작성
export const SubmitReview = async (reservationId: number, reviewData: AddReviewData) => {
  const res = await clientToken.post(
    `/review/reservations/${reservationId}`,
    JSON.stringify(reviewData),
  );
  return res;
};

// 예약내역 GET 해오기 !!
export const getReservation = async (roomsId: number) => {
  const res = await clientToken.get(`/reservation/details/rooms/${roomsId}`);
  return res;
};

export const postReservation = async (roomsId: number, reservationInfo: ReservationPostData) => {
  try {
    const res = await clientToken.post(`/reservation/rooms/${roomsId}`, reservationInfo);
    return res;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// room ID를 통해 객실 상세 정보 가져오기 API!
export const getRoomDetails = async (roomId: number) => {
  try {
    const response = await client.get(`/accommodation/detail/room/${roomId}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// 리뷰 조회 GET 해오기!!
export const getReview = async (accommodationId: string) => {
  const res = await client.get(`/review/accommodation/${accommodationId}`);
  return res.data;
};

interface SearchFilterProps {
  category: string;
  isDomestic: boolean;
  startDate: string;
  endDate: string;
  numberOfPeople: number;
}

/* eslint-disable */
export const getAccommodationList = async (
  page: number,
  { category, isDomestic, startDate, endDate, numberOfPeople }: SearchFilterProps,
) => {
  const newToken = getCookie('token');
  if (newToken) {
    const res = await axios.get(
      `${
        import.meta.env.VITE_SERVER_URL
      }/accommodation?category=${category}&isDomestic=${isDomestic}&page=${page}&startDate=${startDate}&endDate=${endDate}&numberOfPeople=${numberOfPeople}`,
      {
        headers: {
          'content-type': import.meta.env.VITE_CONTENT_TYPE,
          Authorization: `Bearer ${newToken}`,
        },
      },
    );

    return res.data;
  }
  if (!newToken) {
    const res = await client.get(
      `/accommodation?category=${category}&isDomestic=${isDomestic}&page=${page}&startDate=${startDate}&endDate=${endDate}&numberOfPeople=${numberOfPeople}`,
    );
    return res.data;
  }
};

// 위시리스트 목록 불러오기
export const getWishlist = async () => {
  const res = await clientToken.get('/wishlist');
  return res;
};

// 좋아요 생성 & 해제
export const clickLiked = async (accommodationId: number) => {
  const res = await clientToken.post(`/accommodation/${accommodationId}/likes`);
  return res;
};

export const getMyInfo = async () => {
  const newToken = getCookie('token');

  const res = await axios.get(`${import.meta.env.VITE_SERVER_URL}/user/mypage`, {
    headers: {
      'content-type': import.meta.env.VITE_CONTENT_TYPE,
      Authorization: `Bearer ${newToken}`,
    },
  });
  return res.data;
};

export const changeInfo = async (userName: string, phoneNum: string) => {
  const newToken = getCookie('token');

  const res = await axios.put(
    `${import.meta.env.VITE_SERVER_URL}/user`,
    {
      username: userName,
      phonenumber: phoneNum,
    },
    {
      headers: {
        'content-type': import.meta.env.VITE_CONTENT_TYPE,
        Authorization: `Bearer ${newToken}`,
      },
    },
  );

  return res.data;
};

export const changePw = async (oldPw: string, newPw: string) => {
  const newToken = getCookie('token');

  const res = await axios.put(
    `${import.meta.env.VITE_SERVER_URL}/user/password`,
    {
      oldPassword: oldPw,
      newPassword: newPw,
    },
    {
      headers: {
        'content-type': import.meta.env.VITE_CONTENT_TYPE,
        Authorization: `Bearer ${newToken}`,
      },
    },
  );

  return res.data;
};

export const resignUser = async () => {
  const newToken = getCookie('token');

  const res = await axios.delete('https://yanoljaschool.site:8080/user', {
    headers: {
      'content-type': import.meta.env.VITE_CONTENT_TYPE,
      Authorization: `Bearer ${newToken}`,
    },
  });

  return res.data;
};
