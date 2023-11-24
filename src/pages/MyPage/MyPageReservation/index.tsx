import styled from '@emotion/styled';
import MyPageSubtitle from '../MyPageSubtitle';
import MyPageReservationCard from './MyPageReservationCard';

function MyPageReservation() {
  return (
    <>
      <MyPageSubtitle subtitle="예약 내역" />
      <StyledCardWrapper>
        <MyPageReservationCard />
      </StyledCardWrapper>
      <MyPageSubtitle subtitle="취소 내역" />
      <StyledCardWrapper>
        <MyPageReservationCard />
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
