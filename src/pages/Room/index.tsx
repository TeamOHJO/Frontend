import styled from '@emotion/styled';
import { useState, useEffect } from 'react';
import { useSearchParams, useParams } from 'react-router-dom';
import RoomNavi from './RoomNavi';
import RoomMainImg from './RoomMainImg';
import RoomTitle from './RoomTitle';
import RoomSelectedInfo from './RoomSelectedInfo';
import RoomInfo from './Info/RoomInfo';
import RoomBottomNavi from './BottomNavi/RoomBottomNavi';
import { RoomDetail } from '../../@types/interface';
import { getRoomDetail } from '../../api/room';

function Room() {
  const [roomDetailData, setRoomDetailData] = useState<RoomDetail>();
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const params = useParams();

  const fetchData = async () => {
    setRoomDetailData(await getRoomDetail(params.id));
    setTimeout(() => {
      setIsLoaded(true);
    }, 500);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const [searchParams] = useSearchParams();
  const startDate = searchParams.get('startDate');
  const endDate = searchParams.get('endDate');
  // boolean 다시 정의
  const soldOut = searchParams.get('soldOut') === 'true';
  const category = searchParams.get('category');
  const location = searchParams.get('location');

  return (
    <StyledRoomContainer>
      <RoomNavi />
      <RoomMainImg isLoaded={isLoaded} images={roomDetailData?.roomImages} />
      <RoomTitle
        isLoaded={isLoaded}
        name={roomDetailData?.name}
        explanation={roomDetailData?.explanation}
        minCapacity={roomDetailData?.minCapacity}
        maxCapacity={roomDetailData?.maxCapacity}
        star={roomDetailData?.averageRating}
      />
      <RoomSelectedInfo
        isLoaded={isLoaded}
        roomId={params.id}
        price={roomDetailData?.price}
        startDate={startDate}
        endDate={endDate}
        discountPercentage={roomDetailData?.discountPercentage}
      />
      <RoomInfo
        isLoaded={isLoaded}
        checkinExplanation={roomDetailData?.checkinExplanation}
        serviceInfo={roomDetailData?.serviceInfo}
      />
      <RoomBottomNavi
        isLoaded={isLoaded}
        price={roomDetailData?.price}
        image={roomDetailData?.roomImages[0]}
        name={roomDetailData?.name}
        startDate={startDate}
        endDate={endDate}
        soldOut={soldOut}
        category={category}
        location={location}
        discountPercentage={roomDetailData?.discountPercentage}
        roomId={params.id}
        star={roomDetailData?.averageRating}
      />
    </StyledRoomContainer>
  );
}

export default Room;

const StyledRoomContainer = styled.div`
  width: 100%;
  padding: 60px 0;
  position: relative;
`;
