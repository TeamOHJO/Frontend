import { useEffect, useState } from 'react';
import { MyPageReservationData } from '../../../@types/interface';
import MyPageReservationTabs from './MyPageReservationTabs';
import { getCookie } from '../../../utils/utils';

function MyPageReservation() {
  const accessToken = getCookie('token');
  const [reservationData, setReservationData] = useState<MyPageReservationData[]>([]);
  const [cancelledList, setCancelledList] = useState<MyPageReservationData[]>([]);

  // 예약 목록 조회
  const fetchReservationData = async () => {
    const response = await fetch('https://yanoljaschool.site:8080/reservation', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const { data } = await response.json();

    // Sort the data by startDate
    data.sort(
      (a: MyPageReservationData, b: MyPageReservationData) =>
        new Date(a.startDate).getTime() - new Date(b.startDate).getTime(),
    );

    setReservationData(data);
  };

  // 예약 취소 목록 조회
  const fetchCancelledData = async () => {
    const response = await fetch('https://yanoljaschool.site:8080/reservation/canceled', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const { data } = await response.json();
    setCancelledList(data);
  };

  useEffect(() => {
    fetchReservationData();
    fetchCancelledData();
  }, []);

  return <MyPageReservationTabs reservationData={reservationData} cancelledList={cancelledList} />;
}

export default MyPageReservation;
