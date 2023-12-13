import styled from '@emotion/styled';
import RoomInfoText from './RoomInfoText';
import RoomInfoTag from './RoomInfoTag';

interface RoomInfoProps {
  isLoaded: boolean;
  checkinExplanation: string | undefined;
  serviceInfo: string[] | undefined;
}

function RoomInfo({
  isLoaded,
  checkinExplanation = '',
  serviceInfo = ['', '', '', '', '', '', '', '', '', ''],
}: RoomInfoProps) {
  return (
    <StyledRoomInfoWrapper>
      <RoomInfoText title="체크인 안내" content={checkinExplanation} isLoaded={isLoaded} />
      <RoomInfoTag serviceInfo={serviceInfo} isLoaded={isLoaded} />
    </StyledRoomInfoWrapper>
  );
}

export default RoomInfo;

const StyledRoomInfoWrapper = styled.div`
  width: 100%;
  padding: 1rem;
`;
