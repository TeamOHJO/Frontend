import styled from '@emotion/styled';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import AccommodationNavi from './AccommodationNavi';
import AccommodationMainImages from './AccommodationMainImg';
import AccommodationTitle from './AccommodationTitle';
import AccommodationSelect from './AccommodationSelect';
import AccommodationRooms from './AccommodationRooms';
import AccommodationReview from './AccommodationReview';
import AccommodationInfo from './AccommodationInfo';
import { AccommodationDetail } from '../../@types/interface';
import {
  accommodationSelectStartDateState,
  accommodationSelectEndDateState,
  accommodationSelectVisitorsState,
} from '../../states/atom';
import { getCookie, changeDateFormat } from '../../utils/utils';
import LoadingCircle from '../../components/Loading';

function Accommodation() {
  const [accommodationDetailData, setAccommodationDetailData] = useState<AccommodationDetail>();

  const params = useParams();

  const [accommodationSelectStartDate] = useRecoilState<Date>(accommodationSelectStartDateState);

  const [accommodationSelectEndDate] = useRecoilState<Date>(accommodationSelectEndDateState);

  const [accommodationSelectVisitors] = useRecoilState<number>(accommodationSelectVisitorsState);

  const accessToken = getCookie('token');
  const navigate = useNavigate();

  const fetchData = async () => {
    if (accessToken) {
      const response = await fetch(
        `https://yanoljaschool.site:8080/accommodation/detail/${
          params.id
        }?maxCapacity=${accommodationSelectVisitors}&startDate=${changeDateFormat(
          new Date(accommodationSelectStartDate),
        )}&endDate=${changeDateFormat(new Date(accommodationSelectEndDate))}`,
        {
          method: 'GET',
          headers: {
            'content-type': import.meta.env.VITE_CONTENT_TYPE,
            Authorization: `Bearer ${accessToken}`,
          },
        },
      ).then((res: any) => {
        if (!res.ok) navigate('/');
        return res.json();
      });
      setAccommodationDetailData(await response);
    } else {
      const response = await fetch(
        `https://yanoljaschool.site:8080/accommodation/detail/${
          params.id
        }?maxCapacity=${accommodationSelectVisitors}&startDate=${changeDateFormat(
          new Date(accommodationSelectStartDate),
        )}&endDate=${changeDateFormat(new Date(accommodationSelectEndDate))}`,
        {
          method: 'GET',
        },
      ).then((res: any) => {
        if (!res.ok) navigate('/');
        return res.json();
      });
      setAccommodationDetailData(await response);
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
