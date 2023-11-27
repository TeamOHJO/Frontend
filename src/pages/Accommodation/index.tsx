import styled from '@emotion/styled';
import { useState, useEffect } from 'react';
import AccommodationNavi from './AccommodationNavi';
import AccommodationMainImages from './AccommodationMainImg';
import AccommodationTitle from './AccommodationTitle';
import AccommodationSelect from './AccommodationSelect';
import AccommodationRooms from './AccommodationRooms';
import AccommodationReview from './AccommodationReview';
import AccommodationInfo from './AccommodationInfo';
import { AccommodationDetail } from '../../@types/interface';

function Accommodation() {
  const [accommodationDetailData, setAccommodationDetailData] =
    useState<AccommodationDetail>();

  const fetchData = async () => {
    const response = await fetch(
      'http://localhost:5173/data/accommodationDetail.json',
      {
        method: 'GET',
      },
    );
    setAccommodationDetailData(await response.json());
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    accommodationDetailData && (
      <StyledAccommodationWrapper>
        <AccommodationNavi />
        <AccommodationMainImages
          images={accommodationDetailData?.images}
          isLiked={accommodationDetailData?.isLiked}
        />
        <AccommodationTitle
          accommodationName={accommodationDetailData?.accommodationName}
          category={accommodationDetailData?.category}
          location={accommodationDetailData?.location}
          stars={accommodationDetailData?.stars}
        />
        <AccommodationSelect />
        <AccommodationRooms rooms={accommodationDetailData?.rooms} />
        <AccommodationReview
          reviews={accommodationDetailData?.reviews}
          accommodationName={accommodationDetailData?.accommodationName}
          category={accommodationDetailData?.category}
        />
        <AccommodationInfo
          explanation={accommodationDetailData?.explanation}
          cancelInfo={accommodationDetailData?.cancelInfo}
          useGuide={accommodationDetailData?.useGuide}
          reservationNotice={accommodationDetailData?.reservationNotice}
          serviceInfo={accommodationDetailData?.serviceInfo}
          location={accommodationDetailData?.location}
        />
      </StyledAccommodationWrapper>
    )
  );
}

export default Accommodation;

const StyledAccommodationWrapper = styled.div`
  width: 100%;
  padding-top: 60px;
  position: relative;
`;
