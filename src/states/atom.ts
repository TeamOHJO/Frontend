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
