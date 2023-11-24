import MyPageSubtitle from '../MyPageSubtitle';
import MyPageReservationCard from './MyPageReservationCard';

function MyPageReservation() {
  return (
    <div>
      <MyPageSubtitle subtitle="예약 내역" />
      <MyPageReservationCard />
    </div>
  );
}

export default MyPageReservation;
