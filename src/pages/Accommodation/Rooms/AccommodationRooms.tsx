import styled from '@emotion/styled';
import { Skeleton } from '@chakra-ui/react';
import { theme } from '../../../styles/theme';
import AccommodationRoomItem from './AccommodationRoomItem';

interface AccommodationRoom {
  roomId: string;
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
  setShowAlert: React.Dispatch<
    React.SetStateAction<{
      active: boolean;
      message: string;
    }>
  >;
}

function AccommodationRooms({ rooms, category, location, setShowAlert }: AccommodationRoomsProps) {
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
          setShowAlert={setShowAlert}
          key={room.roomId}
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
