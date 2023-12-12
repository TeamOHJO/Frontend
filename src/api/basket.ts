import { BasketData } from '../@types/interface';
import { clientToken } from './index';

// 장바구니 목록 가져오기
export const getBasket = async () => {
  try {
    const response = await clientToken.get('/basket');
    return response.data.data as BasketData[];
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// 장바구니 삭제
export const deleteBasketItem = async (basketId: number) => {
  const res = await clientToken.delete(`/basket/${basketId}`);
  return res;
};
