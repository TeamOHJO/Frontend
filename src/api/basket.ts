import { clientToken } from './index';

// 장바구니 목록 가져오기
export const getBasket = async () => {
  const res = await clientToken.get('/basket');
  return res;
};

// 장바구니 삭제
export const deleteBasketItem = async (basketId: number) => {
  const res = await clientToken.delete(`/basket/${basketId}`);
  return res;
};
