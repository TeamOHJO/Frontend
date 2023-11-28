import styled from '@emotion/styled';
import { useState, useEffect } from 'react';
import RoomNavi from './RoomNavi';
import RoomMainImg from './RoomMainImg';
import RoomTitle from './RoomTitle';
import RoomSelectedInfo from './RoomSelectedInfo';
import RoomInfo from './RoomInfo';
import RoomBottomNavi from './RoomBottomNavi';
import { RoomDetail } from '../../@types/interface';

function Room() {
  const [roomDetailData, setRoomDetailData] = useState<RoomDetail>();

  const fetchData = async () => {
    const response = await fetch('http://localhost:5173/data/roomDetail.json', {
      method: 'GET',
    });
    setRoomDetailData(await response.json());
  };

  useEffect(() => {
    fetchData();
  }, []);
  return roomDetailData ? (
    <StyledRoomContainer>
      <RoomNavi />
      <RoomMainImg images={roomDetailData?.images} />
      <RoomTitle
        name={roomDetailData?.name}
        minCapacity={roomDetailData?.minCapacity}
        maxCapacity={roomDetailData?.maxCapacity}
        stars={roomDetailData?.stars}
      />
      <RoomSelectedInfo price={roomDetailData?.price} />
      <RoomInfo
        explanation={roomDetailData?.explanation}
        checkinExplanation={roomDetailData?.checkinExplanation}
        serviceInfo={roomDetailData?.serviceInfo}
      />
      <RoomBottomNavi price={roomDetailData?.price} />
    </StyledRoomContainer>
  ) : (
    <>스켈레톤</>
  );
}

export default Room;

const StyledRoomContainer = styled.div`
  width: 100%;
  padding: 60px 0;
  position: relative;
`;
