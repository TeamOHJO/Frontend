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
