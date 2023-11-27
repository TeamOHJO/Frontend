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

export interface ImagesModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
}

export interface ExplanationModalProps {
  isOpen: boolean;
  onClose: () => void;
  explanation: string;
  cancelInfo: string;
  useGuide: string;
  reservationNotice: string;
  serviceInfo: string[];
}

export interface AccommodationDetail {
  category: string;
  accommodationName: string;
  location: string;
  tag: string;
  isDomestic: boolean;
  explanation: string;
  cancelInfo: string;
  useGuide: string;
  reservationNotice: string;
  isLiked: boolean;
  serviceInfo: string[];
  images: string[];
  stars: number;
  reviews: {
    userName: string;
    reviewContents: string;
    star: number;
    createdAt: string;
  }[];
  rooms: {
    name: string;
    price: number;
    discountPercentage: number;
    minCapacity: number;
    maxCapacity: number;
    images: string[];
    isReservation: boolean;
    stars: number;
  }[];
}
