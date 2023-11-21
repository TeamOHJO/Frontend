import styled from '@emotion/styled';
import { theme } from '../../../styles/theme';

function AccommodationInfoTag() {
  return <AccommodationInfoTagWrapper>InfoTag</AccommodationInfoTagWrapper>;
}

export default AccommodationInfoTag;

const AccommodationInfoTagWrapper = styled.div`
  width: 100%;
  height: 200px;
  background-color: ${theme.colors.blue100};
`;
