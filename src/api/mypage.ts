import { AddReviewData, MyPageReservationData } from '../@types/interface';
import { clientToken } from './index';

// 마이페이지 > 예약 취소 요청 API
export const postCancelReservation = async (reservationId: number) => {
  const res = await clientToken.delete(`/reservation/${reservationId}`);
  return res;
};

// 마이페이지 > 예약 내역 가져오기
export const getMyPageReservationList = async () => {
  try {
    const response = await clientToken.get('/reservation');
    return response.data.data as MyPageReservationData[];
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// 마이페이지 > 예약 취소 내역 가져오기
export const getMyPageCancelledList = async () => {
  try {
    const response = await clientToken.get('/reservation/canceled');
    return response.data.data as MyPageReservationData[];
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// 마이페이지 > 리뷰 작성
export const submitReview = async (reservationId: number, reviewData: AddReviewData) => {
  try {
    const response = await clientToken.post(
      `/review/reservations/${reservationId}`,
      JSON.stringify(reviewData),
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
