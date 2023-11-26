import { atom, selector } from 'recoil';
import { AlertData, BasketData } from '../@types/interface';

export const toastPopupState = atom<AlertData>({
  key: 'toastPopupState',
  default: { active: false, message: '' },
});

export const loginTabState = atom<number>({
  key: 'loginTabState',
  default: 0,
});

export const basketDataState = atom<BasketData[]>({
  key: 'basketDataState',
  default: [],
});

export const basketAvailableListState = atom<BasketData[]>({
  key: 'basketAvailableListState',
  default: [],
});

export const basketUnavailableListState = atom<BasketData[]>({
  key: 'basketUnavailableListState',
  default: [],
});

export const basketCheckedItemsState = atom<BasketData[]>({
  key: 'basketCheckedItemsState',
  default: [],
});

export const getTotalPriceOfCheckedItems = selector({
  key: 'getTotalPriceOfCheckedItems',
  get: ({ get }) => {
    const checkedItems = get(basketCheckedItemsState);
    return checkedItems.reduce((acc, cur) => acc + cur.price * cur.nights, 0);
  },
});
