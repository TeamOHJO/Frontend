import { clientToken } from './index';

// 위시리스트 목록 불러오기
export const getWishlist = async () => {
  const res = await clientToken.get('/wishlist');
  return res;
};
