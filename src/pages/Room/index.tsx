import styled from '@emotion/styled';
import RoomNavi from './components/RoomNavi';
import RoomMainImg from './components/RoomMainImg';
import RoomTitle from './components/RoomTitle';
import RoomSelectedInfo from './components/RoomSelectedInfo';
import RoomInfo from './components/RoomInfo';
import RoomBottomNavi from './components/RoomBottomNavi';

function Room() {
  return (
    <RoomContainer>
      <RoomNavi />
      <RoomMainImg />
      <RoomTitle />
      <RoomSelectedInfo />
      <RoomInfo />
      <RoomBottomNavi />
    </RoomContainer>
  );
}

export default Room;

const RoomContainer = styled.div`
  width: 100%;
  position: relative;
`;
