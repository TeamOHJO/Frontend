import styled from '@emotion/styled';
import RoomInfoText from '../RoomInfoText';
import RoomInfoTag from '../RoomInfoTag';

interface RoomInfoProps {
  checkinExplanation: string;
  serviceInfo: string[];
}

function RoomInfo({ checkinExplanation, serviceInfo }: RoomInfoProps) {
  return (
    <StyledRoomInfoWrapper>
      <RoomInfoText title="체크인 안내" content={checkinExplanation} />
      <RoomInfoTag serviceInfo={serviceInfo} />
    </StyledRoomInfoWrapper>
  );
}

export default RoomInfo;

const StyledRoomInfoWrapper = styled.div`
  width: 100%;
  padding: 1rem;
`;
