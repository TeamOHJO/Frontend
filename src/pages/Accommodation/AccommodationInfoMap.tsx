import styled from '@emotion/styled';
import { theme } from '../../styles/theme';

function AccommodationInfoMap() {
  return <AccommodationInfoMapWrapper>InfoMap</AccommodationInfoMapWrapper>;
}

export default AccommodationInfoMap;

const AccommodationInfoMapWrapper = styled.div`
  width: 100%;
  height: 200px;
  background-color: ${theme.colors.gray100};
`;
