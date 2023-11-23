import styled from '@emotion/styled';
import AccommodationNavi from './AccommodationNavi';
import AccommodationMainImages from './AccommodationMainImg';
import AccommodationTitle from './AccommodationTitle';
import AccommodationSelect from './AccommodationSelect';
import AccommodationRooms from './AccommodationRooms';
import AccommodationReview from './AccommodationReview';
import AccommodationInfo from './AccommodationInfo';

function Accommodation() {
  return (
    <StyledAccommodationWrapper>
      <AccommodationNavi />
      <AccommodationMainImages />
      <AccommodationTitle />
      <AccommodationSelect />
      <AccommodationRooms />
      <AccommodationReview />
      <AccommodationInfo />
    </StyledAccommodationWrapper>
  );
}

export default Accommodation;

const StyledAccommodationWrapper = styled.div`
  width: 100%;
  padding-top: 60px;
  position: relative;
`;
