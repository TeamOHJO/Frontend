import { useEffect, useState } from 'react';
import { MyPageReservationData } from '../../../@types/interface';
import MyPageReservationTabs from './MyPageReservationTabs';

function MyPageReservation() {
  const [reservationData, setReservationData] = useState<MyPageReservationData[]>([]);

  const fetchData = async () => {
    const response = await fetch('http://localhost:5173/data/reservationData.json', {
      method: 'GET',
    });
    setReservationData(await response.json());
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <MyPageReservationTabs reservationData={reservationData} />;
}

export default MyPageReservation;
