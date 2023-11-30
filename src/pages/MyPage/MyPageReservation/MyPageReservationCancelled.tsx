import { v4 as uuid } from 'uuid';
import styled from '@emotion/styled';
import MyPageReservationCard from './MyPageReservationCard';
import { MyPageReservationData } from '../../../@types/interface';

function MyPageReservationCancelled({ cancelledList }: { cancelledList: MyPageReservationData[] }) {
  return (
    <StyledCardWrapper>
      {cancelledList.map((item: MyPageReservationData) => {
        return <MyPageReservationCard key={uuid()} item={item} />;
      })}
    </StyledCardWrapper>
  );
}

export default MyPageReservationCancelled;

const StyledCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  margin-top: 1rem;
`;
