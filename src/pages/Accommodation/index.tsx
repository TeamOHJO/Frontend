import styled from '@emotion/styled';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import AccommodationNavi from './AccommodationNavi';
import AccommodationMainImages from './AccommodationMainImg';
import AccommodationTitle from './AccommodationTitle';
import AccommodationSelect from './AccommodationSelect';
import AccommodationRooms from './Rooms/AccommodationRooms';
import AccommodationReview from './Review/AccommodationReview';
import AccommodationInfo from './Info/AccommodationInfo';
import { AccommodationDetail } from '../../@types/interface';
import {
  accommodationSelectStartDateState,
  accommodationSelectEndDateState,
  accommodationSelectVisitorsState,
} from '../../states/atom';
import { getCookie, changeDateFormat } from '../../utils/utils';
import LoadingCircle from '../../components/Loading';
import { getAccommodationDetail, getAccommodationDetailToken } from '../../api/accommodation';
import AccommodationToastPopup from './AccommodationToastPopup';

function Accommodation() {
  const [accommodationDetailData, setAccommodationDetailData] = useState<AccommodationDetail>();
  // 장바구니 팝업
  const [showAlert, setShowAlert] = useState({
    active: false,
    message: '',
  });

  const params = useParams();

  const [accommodationSelectStartDate] = useRecoilState<Date>(accommodationSelectStartDateState);
  const [accommodationSelectEndDate] = useRecoilState<Date>(accommodationSelectEndDateState);
  const [accommodationSelectVisitors] = useRecoilState<number>(accommodationSelectVisitorsState);

  const accessToken = getCookie('token');

  const fetchData = async () => {
    if (accessToken) {
      setAccommodationDetailData(
        await getAccommodationDetailToken(
          params.id,
          accommodationSelectVisitors,
          changeDateFormat(new Date(accommodationSelectStartDate)),
          changeDateFormat(new Date(accommodationSelectEndDate)),
        ),
      );
    } else {
      setAccommodationDetailData(
        await getAccommodationDetail(
          params.id,
          accommodationSelectVisitors,
          changeDateFormat(new Date(accommodationSelectStartDate)),
          changeDateFormat(new Date(accommodationSelectEndDate)),
        ),
      );
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return accommodationDetailData ? (
    <StyledAccommodationWrapper>
      <AccommodationNavi />
      <AccommodationMainImages
        images={accommodationDetailData?.data.accommodationImages}
        liked={accommodationDetailData?.data.liked}
        tag={accommodationDetailData?.data.tag}
      />
      <AccommodationTitle
        name={accommodationDetailData?.data.name}
        category={accommodationDetailData?.data.category}
        location={accommodationDetailData?.data.location}
        averageRating={accommodationDetailData?.data.averageRating}
      />
      <AccommodationSelect fetchData={fetchData} />
      <AccommodationRooms
        rooms={accommodationDetailData?.data.roomDetails}
        category={accommodationDetailData?.data.category}
        location={accommodationDetailData?.data.location}
        setShowAlert={setShowAlert}
      />
      <AccommodationReview />
      <AccommodationInfo
        explanation={accommodationDetailData?.data.explanation}
        cancelInfo={accommodationDetailData?.data.cancelInfo}
        useGuide={accommodationDetailData?.data.useGuide}
        reservationNotice={accommodationDetailData?.data.reservationNotice}
        serviceInfo={accommodationDetailData?.data.serviceInfo}
        location={accommodationDetailData?.data.location}
      />
      <AccommodationToastPopup status={showAlert} setFunc={setShowAlert} />
    </StyledAccommodationWrapper>
  ) : (
    <LoadingCircle />
  );
}

export default Accommodation;

const StyledAccommodationWrapper = styled.div`
  width: 100%;
  padding-top: 60px;
  position: relative;
`;
