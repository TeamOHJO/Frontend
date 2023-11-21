import styled from '@emotion/styled';
import { theme } from '../../../styles/theme';

function AccommodationTitle() {
  return <AccommodationTitleWrapper>Title</AccommodationTitleWrapper>;
}

export default AccommodationTitle;

const AccommodationTitleWrapper = styled.div`
  width: 100%;
  height: 200px;
  background-color: ${theme.colors.blue100};
`;
