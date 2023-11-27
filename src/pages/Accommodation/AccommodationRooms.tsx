import styled from '@emotion/styled';
import { v4 as uuid } from 'uuid';
import { theme } from '../../styles/theme';
import AccommodationRoomItem from './AccommodationRoomItem';

interface AccommodationRoom {
  name: string;
  price: number;
  discountPercentage: number;
  minCapacity: number;
  maxCapacity: number;
  roomImages: string[];
  soldOut: boolean;
  averageRating: number;
  serviceInfo: string[];
}

interface AccommodationRoomsProps {
  rooms: AccommodationRoom[];
}

function AccommodationRooms({ rooms }: AccommodationRoomsProps) {
  return (
    <StyledAccommodationRoomsWrapper>
      {rooms.map((room: AccommodationRoom) => (
        <AccommodationRoomItem
          name={room.name}
          price={room.price}
          discountPercentage={room.discountPercentage}
          minCapacity={room.minCapacity}
          maxCapacity={room.maxCapacity}
          images={room.roomImages}
          soldOut={room.soldOut}
          averageRating={room.averageRating}
          key={uuid()}
        />
      ))}
    </StyledAccommodationRoomsWrapper>
  );
}

export default AccommodationRooms;

const StyledAccommodationRoomsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  width: 100%;
  background-color: ${theme.colors.white};
`;
