import styled from '@emotion/styled';
import { theme } from '../../../styles/theme';

function AccommodationMainImg() {
  return (
    <AccommodationMainImgWrapper>ImageCarousel</AccommodationMainImgWrapper>
  );
}

export default AccommodationMainImg;

const AccommodationMainImgWrapper = styled.div`
  width: 100%;
  height: 320px;
  background-color: ${theme.colors.gray100};
`;
