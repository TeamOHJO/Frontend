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
    <>
      <StyledAccommodationWrapperTop>
        <AccommodationNavi />
        <AccommodationMainImages />
        <AccommodationTitle />
      </StyledAccommodationWrapperTop>
      <StyledAccommodationWrapperMiddle>
        <AccommodationSelect />
      </StyledAccommodationWrapperMiddle>
      <StyledAccommodationWrapperBottom>
        <AccommodationRooms />
        <AccommodationReview />
        <AccommodationInfo />
      </StyledAccommodationWrapperBottom>
    </>
  );
}

export default Accommodation;

const StyledAccommodationWrapperTop = styled.div`
  width: 100%;
  padding-top: 60px;
  position: relative;
`;
const StyledAccommodationWrapperMiddle = styled.div`
  width: 100%;
  position: sticky;
  top: 60px;
`;

const StyledAccommodationWrapperBottom = styled.div`
  width: 100%;
  position: relative;
`;
