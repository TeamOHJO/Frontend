import styled from '@emotion/styled';
import { v4 as uuid } from 'uuid';
import { theme } from '../../../styles/theme';
import AccommodationRoomItem from './AccommodationRoomItem';

interface AccommodationRoom {
  roomId: number;
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
  category: string;
  location: string;
}

function AccommodationRooms({ rooms, category, location }: AccommodationRoomsProps) {
  return (
    <StyledAccommodationRoomsWrapper>
      {rooms.map((room: AccommodationRoom) => (
        <AccommodationRoomItem
          roomId={room.roomId}
          name={room.name}
          price={room.price}
          discountPercentage={room.discountPercentage}
          minCapacity={room.minCapacity}
          maxCapacity={room.maxCapacity}
          images={room.roomImages}
          soldOut={room.soldOut}
          averageRating={room.averageRating}
          category={category}
          location={location}
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
