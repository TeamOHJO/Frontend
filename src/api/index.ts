import axios from 'axios';
import { JoinData, LoginData, Email } from './type';
import { getCookie } from '../utils/utils';

axios.defaults.withCredentials = true;
const token = await getCookie('token');

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

export const testToken = async () => {
  const res = await clientToken.get('/user/test');
  return res;
};
