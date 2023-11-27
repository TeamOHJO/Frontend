import { atom } from 'recoil';
import { AlertData } from '../@types/interface';
import { getTomorrow, changeDateFormat } from '../utils/utils';

export const toastPopupState = atom<AlertData>({
  key: 'toastPopupState',
  default: { active: false, message: '' },
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
    page: 0,
  },
});

export const searchPages = atom({
  key: 'searchPage',
  default: 0,
});

export const searchAttempt = atom({
  key: 'searchAttempt',
  default: 0,
});
