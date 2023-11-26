import { Dispatch, SetStateAction } from 'react';

export interface ToastPopupProps {
  status: AlertData;
  setFunc: Dispatch<SetStateAction<AlertData>>;
}

export interface AlertData {
  active: boolean;
  message: string;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  modalFunc: () => void;
  modalData: ModalDataProps;
}

export interface ModalDataProps {
  heading: string;
  text: string;
}

export interface FormData {
  email: string;
  password: string;
  passwordConfirm?: string;
  name?: string;
  phone?: string;
  verify?: boolean;
}

export interface FormError {
  email: string;
  password: string;
  passwordConfirm?: string;
  name?: string;
  phone?: string;
}

export interface LoginSetProps {
  value: string | boolean;
  key: keyof FormData;
}

export interface LoginTabButtonProps {
  errors: FormError;
  formData: FormData;
  errorSetFunc: ({ value, key }: LoginSetProps) => void;
}
export interface IsErrorProps {
  email: boolean | undefined;
  password: boolean | undefined;
  passwordConfirm?: boolean | undefined;
  name?: boolean | undefined;
  phone?: boolean | undefined;
  verify?: boolean | undefined;
}
export interface LoginTabInputProps {
  isError: IsErrorProps;
  errors: FormError;
  errorSetFunc: ({ value, key }: LoginSetProps) => void;
}

export interface ValidationLogin {
  key: keyof FormData;
  value: string | boolean;
  formData: FormData;
}
export interface HomeCardProps {
  name: any;
  category: any;
  score: any;
  price: any;
}

export interface ReservationData {
  reservationId: number;
  startTime: string;
  endTime: string;
  numberOfPerson: number;
  createdAt: string;
  deletedAt: string | null;
  category: string;
  accommodationName: string;
  image: string;
  name: string;
  price: number;
  nights: number;
  stars: number;
}

export interface BasketData {
  basketId: number;
  startDate: string;
  endDate: string;
  category: string;
  accommodationName: string;
  image: string;
  name: string;
  price: number;
  nights: number;
  stars: number;
  canReserve: boolean;
}
