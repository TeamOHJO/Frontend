import styled from '@emotion/styled';

import RoomInfoText from './RoomInfoText';

interface RoomInfoProps {
  explanation: string;
  checkinExplanation: string;
  serviceInfo: string[];
}

function RoomInfo({
  explanation,
  checkinExplanation,
  serviceInfo,
}: RoomInfoProps) {
  console.log(serviceInfo);

  return (
    <StyledRoomInfoWrapper>
      <RoomInfoText title="숙소 안내" content={explanation} />
      <RoomInfoText title="체크인 안내" content={checkinExplanation} />
    </StyledRoomInfoWrapper>
  );
}

export default RoomInfo;

const StyledRoomInfoWrapper = styled.div`
  width: 100%;
  padding: 1rem;
`;
