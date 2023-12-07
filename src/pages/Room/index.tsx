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
import LoadingCircle from '../../components/Loading';
import { getRoomDetail } from '../../api/room';

function Room() {
  const [roomDetailData, setRoomDetailData] = useState<RoomDetail>();
  const params = useParams();

  const fetchData = async () => {
    setRoomDetailData(await getRoomDetail(params.id));
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

  return roomDetailData ? (
    <StyledRoomContainer>
      <RoomNavi />
      <RoomMainImg images={roomDetailData?.roomImages} />
      <RoomTitle
        name={roomDetailData?.name}
        explanation={roomDetailData?.explanation}
        minCapacity={roomDetailData?.minCapacity}
        maxCapacity={roomDetailData?.maxCapacity}
        star={roomDetailData?.averageRating}
      />
      <RoomSelectedInfo
        roomId={params.id}
        price={roomDetailData?.price}
        startDate={startDate}
        endDate={endDate}
        discountPercentage={roomDetailData?.discountPercentage}
      />
      <RoomInfo
        checkinExplanation={roomDetailData?.checkinExplanation}
        serviceInfo={roomDetailData?.serviceInfo}
      />
      <RoomBottomNavi
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
  ) : (
    <LoadingCircle />
  );
}

export default Room;

const StyledRoomContainer = styled.div`
  width: 100%;
  padding: 60px 0;
  position: relative;
`;
