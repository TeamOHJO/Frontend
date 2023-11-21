import styled from '@emotion/styled';
import { theme } from '../../../styles/theme';

function AccommodationMainImages() {
  return (
    <AccommodationMainImagesWrapper>
      ImageCarousel
    </AccommodationMainImagesWrapper>
  );
}

export default AccommodationMainImages;

const AccommodationMainImagesWrapper = styled.div`
  width: 100%;
  height: 320px;
  background-color: ${theme.colors.gray100};
`;
