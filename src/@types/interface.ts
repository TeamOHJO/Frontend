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
  id: any;
  name: any;
  images: any;
  category: any;
  score: any;
  price: any;
  isLiked: boolean;
}

export interface MyPageReservationData {
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
  stars: number;
  startTime: number;
  endTime: number;
  deletedAt: number;
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
      roomId: number;
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

export interface ReservationInfo {
  startDate: string;
  endDate: string;
  numberOfPerson: number;
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
  accommodationId: number;
  accommodationName: string;
  category: string;
  location: string;
  image: string;
  lowestPrice: number;
  isLiked: boolean;
}

export interface AddReviewData {
  reviewContent: string;
  images?: string[];
  star: number;
}
