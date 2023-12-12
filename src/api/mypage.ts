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

// 마이페이지 > 내 정보 가져오기
export const getMyInfo = async () => {
  const res = await clientToken.get(`${import.meta.env.VITE_SERVER_URL}/user/mypage`);
  return res.data;
};

// 마이페이지 > 내 정보 변경
export const changeInfo = async (userName: string, phoneNum: string) => {
  const res = await clientToken.put(`${import.meta.env.VITE_SERVER_URL}/user`, {
    username: userName,
    phonenumber: phoneNum,
  });

  return res.data;
};

// 마이페이지 > 비밀번호 변경
export const changePw = async (oldPw: string, newPw: string) => {
  const res = await clientToken.put(`${import.meta.env.VITE_SERVER_URL}/user/password`, {
    oldPassword: oldPw,
    newPassword: newPw,
  });
  return res.data;
};

// 마이페이지 > 회원탈퇴
export const resignUser = async () => {
  const res = await clientToken.delete(`${import.meta.env.VITE_SERVER_URL}/user`);
  return res.data;
};
