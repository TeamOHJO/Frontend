import { atom } from 'recoil';
import { AlertData } from '../@types/interface';

export const toastPopupState = atom<AlertData>({
  key: 'toastPopupState',
  default: { active: false, message: '' },
});

export const accommodationSelectStartDateState = atom<Date | null>({
  key: 'accommodationSelectStartDateState',
  default: new Date(),
});

const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);

export const accommodationSelectEndDateState = atom<Date | null>({
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
