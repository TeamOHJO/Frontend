import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { MyPageReservationData } from '../../../@types/interface';
import MyPageReservationTabs from './MyPageReservationTabs';
import { myPageCancelledState, myPageReservationDataState } from '../../../states/atom';
import { getMyPageCancelledList, getMyPageReservationList } from '../../../api/mypage';

function MyPageReservation() {
  const [reservationData, setReservationData] = useRecoilState(myPageReservationDataState);
  const [cancelledList, setCancelledList] = useRecoilState(myPageCancelledState);
  const [upcomingList, setUpcomingList] = useState<MyPageReservationData[]>([]);
  const [completedList, setCompletedList] = useState<MyPageReservationData[]>([]);
  const TODAY = new Date();

  // 예약 목록 조회
  const fetchReservationData = async () => {
    const response = await getMyPageReservationList();

    // Sort the data by startDate
    response.sort(
      (a: MyPageReservationData, b: MyPageReservationData) =>
        new Date(a.startDate).getTime() - new Date(b.startDate).getTime(),
    );

    setReservationData(response);
  };

  // 예약 취소 목록 조회
  const fetchCancelledData = async () => {
    const response = await getMyPageCancelledList();
    const { data } = response.data;

    // Sort the data by startDate
    data.sort(
      (a: MyPageReservationData, b: MyPageReservationData) =>
        new Date(a.startDate).getTime() - new Date(b.startDate).getTime(),
    );

    setCancelledList(data);
  };

  useEffect(() => {
    fetchReservationData();
  }, []);

  useEffect(() => {
    fetchCancelledData();
  }, [reservationData]);

  useEffect(() => {
    // 이용 예정
    setUpcomingList(
      reservationData.filter(
        (item: MyPageReservationData) =>
          TODAY < new Date(item.startDate) || TODAY < new Date(item.endDate),
      ),
    );

    // 이용 완료
    setCompletedList(
      reservationData.filter((item: MyPageReservationData) => TODAY >= new Date(item.endDate)),
    );
  }, [reservationData, setReservationData]);

  return (
    <MyPageReservationTabs
      upcomingList={upcomingList}
      completedList={completedList}
      cancelledList={cancelledList}
    />
  );
}

export default MyPageReservation;
