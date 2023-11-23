import styled from '@emotion/styled';
import RoomNavi from './RoomNavi';
import RoomMainImg from './RoomMainImg';
import RoomTitle from './RoomTitle';
import RoomSelectedInfo from './RoomSelectedInfo';
import RoomInfo from './RoomInfo';
import RoomBottomNavi from './RoomBottomNavi';

function Room() {
  return (
    <StyledRoomContainer>
      <RoomNavi />
      <RoomMainImg />
      <RoomTitle />
      <RoomSelectedInfo />
      <RoomInfo />
      <RoomBottomNavi />
    </StyledRoomContainer>
  );
}

export default Room;

const StyledRoomContainer = styled.div`
  width: 100%;
  padding: 60px 0;
  position: relative;
`;
