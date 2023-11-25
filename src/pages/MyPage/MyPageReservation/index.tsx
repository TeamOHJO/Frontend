import { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import MyPageSubtitle from '../MyPageSubtitle';
import MyPageReservationCard from './MyPageReservationCard';
import { ReservationData } from '../../../@types/interface';
import MyPageReservationButtons from './MyPageReservationButtons';

function MyPageReservation() {
  const [reservationData, setReservationData] = useState([]);
  const reservationRef = useRef<HTMLDivElement>(null);
  const cancellationRef = useRef<HTMLDivElement>(null);

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
      <div ref={reservationRef} id="reservationDiv">
        <StyledHeaderWrapper>
          <MyPageSubtitle subtitle="예약 내역" />
          <MyPageReservationButtons
            leftColor="blue"
            rightColor="gray"
            reservationRef={reservationRef}
            cancellationRef={cancellationRef}
          />
        </StyledHeaderWrapper>
        <StyledCardWrapper>
          {reservationList.map((item: ReservationData) => {
            return <MyPageReservationCard item={item} />;
          })}
        </StyledCardWrapper>
      </div>
      <div ref={cancellationRef} id="cancellationDiv">
        <StyledHeaderWrapper>
          <MyPageSubtitle subtitle="취소 내역" />
          <MyPageReservationButtons
            leftColor="gray"
            rightColor="blue"
            reservationRef={reservationRef}
            cancellationRef={cancellationRef}
          />
        </StyledHeaderWrapper>
        <StyledCardWrapper>
          {cancellationList.map((item: ReservationData) => {
            return <MyPageReservationCard item={item} />;
          })}
        </StyledCardWrapper>
      </div>
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

const StyledHeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
