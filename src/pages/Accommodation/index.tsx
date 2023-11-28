import styled from '@emotion/styled';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
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
import { getCookie } from '../../utils/utils';

function Accommodation() {
  const [accommodationDetailData, setAccommodationDetailData] =
    useState<AccommodationDetail>();

  const params = useParams();

  const [accommodationSelectStartDate] = useRecoilState<Date>(
    accommodationSelectStartDateState,
  );

  const [accommodationSelectEndDate] = useRecoilState<Date>(
    accommodationSelectEndDateState,
  );

  const [accommodationSelectVisitors] = useRecoilState<number>(
    accommodationSelectVisitorsState,
  );

  // 날짜 포멧팅
  function leftPad(value: number) {
    if (value >= 10) {
      return value;
    }

    return `0${value}`;
  }

  function toStringByFormatting(source: any, delimiter = '-') {
    const year = source.getFullYear();
    const month = leftPad(source.getMonth() + 1);
    const day = leftPad(source.getDate());

    return [year, month, day].join(delimiter);
  }

  const accessToken = getCookie('token');

  const fetchData = async () => {
    if (accessToken) {
      const response = await fetch(
        `https://yanoljaschool.site:8080/accommodation/detail/${
          params.id
        }?maxCapacity=${accommodationSelectVisitors}&startDate=${toStringByFormatting(
          new Date(accommodationSelectStartDate),
        )}&endDate=${toStringByFormatting(
          new Date(accommodationSelectEndDate),
        )}`,
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );
      setAccommodationDetailData(await response.json());
    } else {
      const response = await fetch(
        `https://yanoljaschool.site:8080/accommodation/detail/${
          params.id
        }?maxCapacity=${accommodationSelectVisitors}&startDate=${toStringByFormatting(
          new Date(accommodationSelectStartDate),
        )}&endDate=${toStringByFormatting(
          new Date(accommodationSelectEndDate),
        )}`,
        {
          method: 'GET',
        },
      );
      setAccommodationDetailData(await response.json());
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
      <AccommodationRooms rooms={accommodationDetailData?.data.roomDetails} />
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
    <>스켈레톤</>
  );
}

export default Accommodation;

const StyledAccommodationWrapper = styled.div`
  width: 100%;
  padding-top: 60px;
  position: relative;
`;
