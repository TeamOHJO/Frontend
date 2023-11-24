import styled from '@emotion/styled';
import MyPageSubtitle from '../MyPageSubtitle';
import MyPageReservationCard from './MyPageReservationCard';
import { reservationData } from './reservationData';

function MyPageReservation() {
  const reservationList = reservationData.filter(
    (item) => item.deletedAt !== null,
  );
  const cancellationList = reservationData.filter(
    (item) => item.deletedAt === null,
  );

  return (
    <>
      <MyPageSubtitle subtitle="예약 내역" />
      <StyledCardWrapper>
        {reservationList.map((item) => {
          return <MyPageReservationCard item={item} />;
        })}
      </StyledCardWrapper>
      <MyPageSubtitle subtitle="취소 내역" />
      <StyledCardWrapper>
        {cancellationList.map((item) => {
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
