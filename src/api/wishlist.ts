import { WishlistData } from '../@types/interface';
import { clientToken } from './index';

// 위시리스트 목록 불러오기
export const getWishlist = async () => {
  try {
    const response = await clientToken.get('/wishlist');
    return response.data.data as WishlistData[];
  } catch (error) {
    console.error(error);
    throw error;
  }
};
