import styled from '@emotion/styled';
import { theme } from '../../styles/theme';

function RoomTitle() {
  return <StyledRoomTitleWrapper>Title</StyledRoomTitleWrapper>;
}

export default RoomTitle;

const StyledRoomTitleWrapper = styled.div`
  width: 100%;
  height: 200px;
  background-color: ${theme.colors.blue100};
`;
