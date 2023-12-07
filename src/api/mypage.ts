import { AddReviewData } from '../@types/interface';
import { clientToken } from './index';

// 마이페이지 > 예약 취소 요청 API
export const postCancelReservation = async (reservationId: number) => {
  const res = await clientToken.delete(`/reservation/${reservationId}`);
  return res;
};

// 마이페이지 > 예약 내역 가져오기
export const getMyPageReservationList = async () => {
  const res = await clientToken.get('/reservation');
  return res;
};

// 마이페이지 > 예약 취소 내역 가져오기
export const getMyPageCancelledList = async () => {
  const res = await clientToken.get('/reservation/canceled');
  return res;
};

// 마이페이지 > 리뷰 작성
export const submitReview = async (reservationId: number, reviewData: AddReviewData) => {
  const res = await clientToken.post(
    `/review/reservations/${reservationId}`,
    JSON.stringify(reviewData),
  );
  return res;
};
