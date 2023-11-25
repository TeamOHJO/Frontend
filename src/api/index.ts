import axios from 'axios';
import { JoinData, LoginData } from './type';

const client = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
  headers: {
    'content-type': import.meta.env.VITE_CONTENT_TYPE,
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
