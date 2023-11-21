import styled from '@emotion/styled';
import AccommodationNavi from './components/AccommodationNavi';
import AccommodationMainImages from './components/AccommodationMainImages';
import AccommodationTitle from './components/\bAccommodationTitle';
import AccommodationSelect from './components/AccommodationSelect';
import AccommodationRooms from './components/AccommodationRooms';
import AccommodationReview from './components/AccommodationReview';
import AccommodationInfo from './components/AccommodationInfo';

function Accommodation() {
  return (
    <AccommodationWrapper>
      <AccommodationNavi />
      <AccommodationMainImages />
      <AccommodationTitle />
      <AccommodationSelect />
      <AccommodationRooms />
      <AccommodationReview />
      <AccommodationInfo />
    </AccommodationWrapper>
  );
}

export default Accommodation;

const AccommodationWrapper = styled.div`
  width: 100%;
  position: relative;
`;
