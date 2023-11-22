import styled from '@emotion/styled';
import { theme } from '../../../styles/theme';

function RoomTitle() {
  return <RoomTitleWrapper>Title</RoomTitleWrapper>;
}

export default RoomTitle;

const RoomTitleWrapper = styled.div`
  width: 100%;
  height: 200px;
  background-color: ${theme.colors.blue100};
`;
