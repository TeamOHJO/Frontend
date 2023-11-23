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

export interface LoginData {
  email: string;
  password: string;
}

export interface LoginSetProps {
  e: ChangeEvent<HTMLInputElement>;
  key: keyof LoginData;
}

export interface LoginTabButtonProps {
  errors: LoginData;
  formData: LoginData;
  errorSetFunc: ({ e, key }: LoginSetProps) => void;
}

export interface ValidationLogin {
  key: keyof LoginData;
  value: string;
}
export interface HomeCardProps {
  name: any;
  category: any;
  score: any;
  price: any;
}
