import styled from '@emotion/styled';
import MyPageReservationCard from './MyPageReservationCard';
import { MyPageReservationData } from '../../../@types/interface';

function MyPageReservationUpcoming({ upcomingList }: { upcomingList: MyPageReservationData[] }) {
  return (
    <StyledCardWrapper>
      {upcomingList.map((item: MyPageReservationData) => {
        return <MyPageReservationCard key={item.reservationId} item={item} />;
      })}
    </StyledCardWrapper>
  );
}

export default MyPageReservationUpcoming;

const StyledCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  margin-top: 1rem;
`;
