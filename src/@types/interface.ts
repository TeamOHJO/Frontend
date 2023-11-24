import { Dispatch, SetStateAction, ChangeEvent } from 'react';

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
  number?: string;
}

export interface LoginSetProps {
  e: ChangeEvent<HTMLInputElement>;
  key: keyof FormData;
}

export interface LoginTabButtonProps {
  errors: FormData;
  formData: FormData;
  errorSetFunc: ({ e, key }: LoginSetProps) => void;
}
export interface IsErrorProps {
  email: boolean | undefined;
  password: boolean | undefined;
  passwordConfirm?: boolean | undefined;
  name?: boolean | undefined;
  number?: boolean | undefined;
}
export interface LoginTabInputProps {
  isError: IsErrorProps;
  errors: FormData;
  errorSetFunc: ({ e, key }: LoginSetProps) => void;
}

export interface ValidationLogin {
  key: keyof FormData;
  value: string;
  formData: FormData;
}
export interface HomeCardProps {
  name: any;
  category: any;
  score: any;
  price: any;
}
