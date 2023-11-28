import styled from '@emotion/styled';
import { useState, useEffect } from 'react';
import { useSearchParams, useParams } from 'react-router-dom';
import RoomNavi from './RoomNavi';
import RoomMainImg from './RoomMainImg';
import RoomTitle from './RoomTitle';
import RoomSelectedInfo from './RoomSelectedInfo';
import RoomInfo from './RoomInfo';
import RoomBottomNavi from './RoomBottomNavi';
import { RoomDetail } from '../../@types/interface';

function Room() {
  const [roomDetailData, setRoomDetailData] = useState<RoomDetail>();
  const params = useParams();

  const fetchData = async () => {
    const response = await fetch(
      `https://yanoljaschool.site:8080/accommodation/detail/room/${params.id}`,
      {
        method: 'GET',
      },
    );
    const res = await response.json();
    setRoomDetailData(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const [searchParams] = useSearchParams();
  const startDate = searchParams.get('startDate');
  const endDate = searchParams.get('endDate');
  const soldOut = Boolean(searchParams.get('soldOut'));

  return roomDetailData ? (
    <StyledRoomContainer>
      <RoomNavi />
      <RoomMainImg images={roomDetailData?.roomImages} />
      <RoomTitle
        name={roomDetailData?.name}
        minCapacity={roomDetailData?.minCapacity}
        maxCapacity={roomDetailData?.maxCapacity}
        stars={roomDetailData?.stars}
      />
      <RoomSelectedInfo
        price={roomDetailData?.price}
        startDate={startDate}
        endDate={endDate}
      />
      <RoomInfo
        explanation={roomDetailData?.explanation}
        checkinExplanation={roomDetailData?.checkinExplanation}
        serviceInfo={roomDetailData?.serviceInfo}
      />
      <RoomBottomNavi
        price={roomDetailData?.price}
        startDate={startDate}
        endDate={endDate}
        soldOut={soldOut}
      />
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
