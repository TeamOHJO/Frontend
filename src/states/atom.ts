import { atom, selector } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { AlertData, BasketData, WishlistData } from '../@types/interface';
import { getTomorrow, changeDateFormat } from '../utils/utils';

const { persistAtom } = recoilPersist({
  key: 'localStorage',
  storage: localStorage,
});

export const toastPopupState = atom<AlertData>({
  key: 'toastPopupState',
  default: { active: false, message: '' },
});

export const accommodationSelectStartDateState = atom<Date>({
  key: 'accommodationSelectStartDateState',
  default: new Date(),
});

const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);

export const accommodationSelectEndDateState = atom<Date>({
  key: 'accommodationSelectEndDateState',
  default: tomorrow,
});

export const accommodationSelectVisitorsState = atom<number>({
  key: 'accommodationSelectVisitorsState',
  default: 2,
});

export const loginTabState = atom<number>({
  key: 'loginTabState',
  default: 0,
});

export const searchFilteredState = atom({
  key: 'searchFilteredState',
  default: {
    category: 'HOTEL',
    isDomestic: true,
    startDate: changeDateFormat(new Date()),
    endDate: changeDateFormat(getTomorrow()),
    numberOfPeople: 2,
  },
  effects_UNSTABLE: [persistAtom],
});

export const searchPages = atom({
  key: 'searchPage',
  default: 0,
});

export const searchAttempt = atom({
  key: 'searchAttempt',
  default: 0,
});

export const accommodationList = atom<any[]>({
  key: 'accommodationList',
  default: [],
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

export const getCheckedIds = selector({
  key: 'getCheckedIds',
  get: ({ get }) => {
    const checkedItems = get(basketCheckedItemsState);
    const checkedIds = checkedItems.map(
      (checkedItem: BasketData) => checkedItem.basketId,
    );
    return checkedIds;
  },
});

export const getUnavailableIds = selector({
  key: 'getUnavailableIds',
  get: ({ get }) => {
    const unavailableList = get(basketUnavailableListState);
    const unavailableIds = unavailableList.map(
      (checkedItem: BasketData) => checkedItem.basketId,
    );
    return unavailableIds;
  },
});

export const basketCountState = atom<number>({
  key: 'basketCountState',
  default: 0,
});

export const wishlistDataState = atom<WishlistData[]>({
  key: 'wishlistDataState',
  default: [],
});
