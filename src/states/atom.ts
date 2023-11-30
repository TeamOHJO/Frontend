import { atom, selector } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { AlertData, BasketData, MyPageReservationData, WishlistData } from '../@types/interface';
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

export const getUnavailableIds = selector({
  key: 'getUnavailableIds',
  get: ({ get }) => {
    const unavailableList = get(basketUnavailableListState);
    const unavailableIds = unavailableList.map((item: BasketData) => item.basketId);
    return unavailableIds;
  },
});

export const getAvailableIds = selector({
  key: 'getAvailableIds',
  get: ({ get }) => {
    const availableList = get(basketAvailableListState);
    const availableIds = availableList.map((item: BasketData) => item.basketId);
    return availableIds;
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

export const userInformation = atom({
  key: 'userInfo',
  default: {
    email: '',
    userName: '',
    phoneNum: '',
  },
});

export const myPageReservationDataState = atom<MyPageReservationData[]>({
  key: 'myPageReservationDataState',
  default: [],
});

export const myPageCancelledState = atom<MyPageReservationData[]>({
  key: 'myPageCancelledState',
  default: [],
});
