import { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import { Box } from '@chakra-ui/react';
import MyPageSubtitle from '../MyPageSubtitle';
import MyPageReservationCard from './MyPageReservationCard';
import MyPageReservationButtons from './MyPageReservationButtons';
import { ReservationData } from '../../../@types/interface';

function MyPageReservation() {
  const isReserved = true;
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
      <StyledContent ref={reservationRef}>
        <StyledHeader>
          <MyPageSubtitle subtitle="예약 내역" />
          <MyPageReservationButtons
            isReserved={isReserved}
            reservationRef={reservationRef}
            cancellationRef={cancellationRef}
          />
        </StyledHeader>
        <StyledCardWrapper>
          {reservationList.map((item: ReservationData) => {
            return <MyPageReservationCard item={item} />;
          })}
        </StyledCardWrapper>
      </StyledContent>
      <StyledContent ref={cancellationRef} mt={20}>
        <StyledHeader>
          <MyPageSubtitle subtitle="취소 내역" />
          <MyPageReservationButtons
            isReserved={!isReserved}
            reservationRef={reservationRef}
            cancellationRef={cancellationRef}
          />
        </StyledHeader>
        <StyledCardWrapper>
          {cancellationList.map((item: ReservationData) => {
            return <MyPageReservationCard item={item} />;
          })}
        </StyledCardWrapper>
      </StyledContent>
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

const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const StyledContent = styled(Box)``;
