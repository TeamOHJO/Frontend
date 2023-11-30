import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import UnFooterNav from '../../components/Layout/UnFooterNav';
import ReservationInfo from '../../components/ReservationInfo';
import ReservationCompleteText from './ReservationCompleteText';
import { getRoomDetails } from '../../api';
import { MyPageReservationData } from '../../@types/interface';

const ReservationComplete = () => {
  const pathSegments = window.location.pathname.split('/');
  const roomIdString = pathSegments[pathSegments.length - 1];
  const roomId = parseInt(roomIdString, 10);

  const [roomDetails, setRoomDetails] = useState<MyPageReservationData | null>(null);

  useEffect(() => {
    const fetchRoomDetails = async () => {
      try {
        const details = await getRoomDetails(roomId);

        setRoomDetails(details.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchRoomDetails();
  }, [roomId]);

  return (
    <StyledLayout>
      <UnFooterNav />
      <ReservationInfo roomDetails={roomDetails} />
      <ReservationCompleteText />
    </StyledLayout>
  );
};

export default ReservationComplete;

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  min-height: 100vh;
`;
