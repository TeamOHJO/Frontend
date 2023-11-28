import axios from 'axios';
import { JoinData, LoginData, Email } from './type';
import { getCookie } from '../utils/utils';

axios.defaults.withCredentials = true;
const token = getCookie('token');

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
    Authorization: `Bearer ${token}`,
  },
});

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

export const getVerify = async (verify: string) => {
  const res = await client.get(`/user/verify/${verify}`);
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

// 장바구니 API
export const getBasket = async () => {
  const res = await clientToken.get('/basket');
  return res;
};

export const DeleteBasketItem = async (basketId: number) => {
  const res = await clientToken.delete(`/basket/${basketId}`);
  return res;
};

interface SearchFilterProps {
  category: string;
  isDomestic: boolean;
  startDate: string;
  endDate: string;
  numberOfPeople: number;
  page: number;
}

/* eslint-disable */
export const getAccommodationList = async ({
  category,
  isDomestic,
  startDate,
  endDate,
  numberOfPeople,
  page,
}: SearchFilterProps) => {
  const newToken = getCookie('token');
  console.log(newToken);
  if (newToken) {
    const res = await clientToken.get(
      `/accommodation?category=${category}&isDomestic=${isDomestic}&page=${page}&startDate=${startDate}&endDate=${endDate}&numberOfPeople=${numberOfPeople}`,
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
/* eslint-enable */

export const getReview = async () => {
  const res = await client.get('/review/accommodation/1');
  return res.data;
};
