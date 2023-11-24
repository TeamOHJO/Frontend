import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import MyPageSubtitle from '../MyPageSubtitle';
import MyPageReservationCard from './MyPageReservationCard';
import { ReservationData } from '../../../@types/interface';

function MyPageReservation() {
  const [reservationData, setReservationData] = useState([]);

  const reservationList = reservationData.filter(
    (item: ReservationData) => item.deletedAt !== null,
  );
  const cancellationList = reservationData.filter(
    (item: ReservationData) => item.deletedAt === null,
  );

  const fetchData = async () => {
    const response = await fetch(
      'http://localhost:5173/data/reservationData.json',
      {
        method: 'GET',
      },
    );
    setReservationData(await response.json());
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <MyPageSubtitle subtitle="예약 내역" />
      <StyledCardWrapper>
        {reservationList.map((item: ReservationData) => {
          return <MyPageReservationCard item={item} />;
        })}
      </StyledCardWrapper>
      <MyPageSubtitle subtitle="취소 내역" />
      <StyledCardWrapper>
        {cancellationList.map((item: ReservationData) => {
          return <MyPageReservationCard item={item} />;
        })}
      </StyledCardWrapper>
    </>
  );
}

export default MyPageReservation;

const StyledCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  margin-top: 1rem;
`;
