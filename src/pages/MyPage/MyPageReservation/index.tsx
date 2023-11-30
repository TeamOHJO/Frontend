import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { MyPageReservationData } from '../../../@types/interface';
import MyPageReservationTabs from './MyPageReservationTabs';
import { getMyPageCancelledList, getMyPageReservationList } from '../../../api';
import { myPageReservationDataState } from '../../../states/atom';

function MyPageReservation() {
  const [reservationData, setReservationData] = useRecoilState(myPageReservationDataState);
  const [cancelledList, setCancelledList] = useState<MyPageReservationData[]>([]);
  const [upcomingList, setUpcomingList] = useState<MyPageReservationData[]>([]);
  const [completedList, setCompletedList] = useState<MyPageReservationData[]>([]);
  const TODAY = new Date();

  // 예약 목록 조회
  const fetchReservationData = async () => {
    const response = await getMyPageReservationList();
    const { data } = response.data;

    // Sort the data by startDate
    data.sort(
      (a: MyPageReservationData, b: MyPageReservationData) =>
        new Date(a.startDate).getTime() - new Date(b.startDate).getTime(),
    );

    setReservationData(data);
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
  }, []);

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

  console.log(reservationData);
  console.log(upcomingList);
  console.log(completedList);

  return (
    <MyPageReservationTabs
      upcomingList={upcomingList}
      completedList={completedList}
      cancelledList={cancelledList}
    />
  );
}

export default MyPageReservation;
