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
  id: number;
  name: string;
  images: string[];
  category: string;
  score: number;
  price: number;
  isLiked: boolean;
}

export interface MyPageReservationData {
  reservationId: number;
  roomId: number;
  category: string;
  accommodationName: string;
  roomName: string;
  location: string;
  star: number;
  image: string;
  startDate: string;
  endDate: string;
  name: string;
  stars: number;
  nights: number;
  deletedAt?: string;
}

export interface ReservationInfoData {
  reservationId: number;
  startDate: string;
  endDate: string;
  numberOfPerson: number;
  category: string;
  location: string;
  discountPercentage: number;
  discountPrice: number;
  accommodationName: string;
  image: string;
  name: string;
  price: number;
  nights: number;
  averageRating: number;
  startTime: number;
  endTime: number;
  deletedAt: number;
  roomImages: string[];
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
  code: number;
  message: string;
  data: {
    accommodationId: number;
    category: string;
    name: string;
    location: string;
    tag: string;
    domestic: boolean;
    explanation: string;
    cancelInfo: string;
    useGuide: string;
    reservationNotice: string;
    liked: boolean;
    serviceInfo: string[];
    accommodationImages: string[];
    averageRating: number;
    soldOut: boolean;
    reviews: {
      userName: string;
      reviewContents: string;
      star: number;
      createdAt: string;
    }[];
    roomDetails: {
      roomId: string;
      name: string;
      price: number;
      discountPercentage: number;
      minCapacity: number;
      maxCapacity: number;
      roomImages: string[];
      soldOut: boolean;
      averageRating: number;
      serviceInfo: string[];
    }[];
  };
}

export interface RoomDetail {
  name: string;
  price: number;
  discountPercentage: number;
  checkinExplanation: string;
  explanation: string;
  serviceInfo: string[];
  minCapacity: number;
  maxCapacity: number;
  roomImages: string[];
  soldOut: boolean;
  averageRating: number;
}

export interface BasketData {
  basketId: number;
  accommodationName: string;
  roomId: number;
  tag: string;
  category: string;
  roomName: string;
  roomInfo: string;
  startDate: string;
  endDate: string;
  checkInOutExplanation: string;
  star: number;
  price: number;
  discountPercentage: number;
  image: string;
  canReserve: boolean;
  numberOfPerson: number;
  location: string;
}

export interface Review {
  reviewId: number;
  star: number;
  roomId: number;
  userName: string;
  accommodationName: string;
  roomName: string;
  category: string;
  reviewContent: string;
  images: string[];
  updatedAt: string;
}

export interface WishlistData {
  category: string;
  image: string;
  liked: boolean;
  location: string;
  name: string;
  price: number;
  accommodationId: number;
}

export interface AddReviewData {
  reviewContent: string;
  images?: string[];
  star: number;
}

export interface HomeHeartToastPopupProps {
  status: AlertData;
  setFunc: Dispatch<SetStateAction<AlertData>>;
  setShowPopUp: Dispatch<SetStateAction<boolean>>;
}
