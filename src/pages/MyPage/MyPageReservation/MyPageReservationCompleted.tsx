import styled from '@emotion/styled';
import MyPageReservationCard from './MyPageReservationCard';
import { MyPageReservationData } from '../../../@types/interface';

function MyPageReservationCompleted({ completedList }: { completedList: MyPageReservationData[] }) {
  return (
    <StyledCardWrapper>
      {completedList.map((item: MyPageReservationData) => {
        return <MyPageReservationCard key={item.reservationId} item={item} />;
      })}
    </StyledCardWrapper>
  );
}

export default MyPageReservationCompleted;

const StyledCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  margin-top: 1rem;
`;
