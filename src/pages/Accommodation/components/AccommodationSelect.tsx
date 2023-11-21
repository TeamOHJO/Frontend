import styled from '@emotion/styled';
import { theme } from '../../../styles/theme';

function AccommodationSelect() {
  return (
    <AccommodationSelectWrapper>AccommodationSelect</AccommodationSelectWrapper>
  );
}

export default AccommodationSelect;

const AccommodationSelectWrapper = styled.div`
  width: 100%;
  height: 160px;
  background-color: ${theme.colors.gray100};
`;
