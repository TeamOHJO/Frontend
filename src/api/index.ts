import axios from 'axios';
import { ReservationPostData } from './type';
import { getCookie } from '../utils/utils';

axios.defaults.withCredentials = true;

export const client = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
  headers: {
    'content-type': import.meta.env.VITE_CONTENT_TYPE,
  },
});

export const clientToken = axios.create({
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
