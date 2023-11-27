import { atom } from 'recoil';
import { AlertData } from '../@types/interface';
import { getTomorrow } from '../utils/utils';

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
    startTime: new Date(),
    endtime: getTomorrow(),
    numberOfPerson: 2,
  },
});

export const searchPages = atom({
  key: 'searchPage',
  default: 0,
});
