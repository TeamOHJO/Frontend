import styled from '@emotion/styled';
import { theme } from '../../../styles/theme';
import AccommodationRoomItem from './AccommodationRoomItem';

function AccommodationRooms() {
  const array = [1, 2, 3, 4, 5];
  return (
    <AccommodationRoomsWrapper>
      {array.map((i: number) => (
        <AccommodationRoomItem key={i} />
      ))}
    </AccommodationRoomsWrapper>
  );
}

export default AccommodationRooms;

const AccommodationRoomsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  width: 100%;
  background-color: ${theme.colors.white};
`;
