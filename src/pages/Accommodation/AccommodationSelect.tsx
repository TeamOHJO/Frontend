import styled from '@emotion/styled';
import { Heading, useDisclosure, Skeleton } from '@chakra-ui/react';
import { CalendarOutlined } from '@ant-design/icons';
import { useRecoilState } from 'recoil';
import SelectModal from './SelectModal';
import {
  accommodationSelectStartDateState,
  accommodationSelectEndDateState,
  accommodationSelectVisitorsState,
} from '../../states/atom';

interface AccommodationSelectProps {
  isLoaded: boolean;
  fetchData: () => void;
}

function AccommodationSelect({ isLoaded, fetchData }: AccommodationSelectProps) {
  const [accommodationSelectStartDate] = useRecoilState<Date>(accommodationSelectStartDateState);

  const [accommodationSelectEndDate] = useRecoilState<Date>(accommodationSelectEndDateState);

  const [accommodationSelectVisitors] = useRecoilState<number>(accommodationSelectVisitorsState);
  const { onOpen, isOpen, onClose } = useDisclosure();

  const Day = ['일', '월', '화', '수', '목', '금', '토'];

  return (
    <StyledAccommodationSelectWrapper onClick={onOpen}>
      <StyledAccommodationSelectTitle>
        <Skeleton isLoaded={isLoaded} width="100px" height="25px">
          <Heading as="h4" size="lg">
            객실 선택
          </Heading>
        </Skeleton>
      </StyledAccommodationSelectTitle>
      <StyledAccommodationSelectBox>
        <StyledAccommodationSelectBoxLeft>
          <Skeleton isLoaded={isLoaded}>
            <StyledAccommodationSelectBoxLeftSpan>
              {accommodationSelectStartDate && accommodationSelectStartDate.getMonth() + 1}.
              {accommodationSelectStartDate && accommodationSelectStartDate.getDate()}(
              {accommodationSelectStartDate && Day[accommodationSelectStartDate.getDay()]}
              )~
              {accommodationSelectEndDate && accommodationSelectEndDate.getMonth() + 1}.
              {accommodationSelectEndDate && accommodationSelectEndDate.getDate()}(
              {accommodationSelectEndDate && Day[accommodationSelectEndDate.getDay()]}) 날짜
            </StyledAccommodationSelectBoxLeftSpan>
            <CalendarOutlined style={{ fontSize: '20px' }} />
          </Skeleton>
        </StyledAccommodationSelectBoxLeft>
        <StyledAccommodationSelectBoxRight>
          <Skeleton isLoaded={isLoaded}>{accommodationSelectVisitors}명</Skeleton>
        </StyledAccommodationSelectBoxRight>
      </StyledAccommodationSelectBox>
      <SelectModal isOpen={isOpen} onClose={onClose} fetchData={fetchData} />
    </StyledAccommodationSelectWrapper>
  );
}

export default AccommodationSelect;

const StyledAccommodationSelectWrapper = styled.div`
  width: 100%;
`;

const StyledAccommodationSelectTitle = styled.div`
  padding: 1rem;
`;

const StyledAccommodationSelectBox = styled.div`
  width: 100%;
  height: 60px;
  border-top: 1px solid #cecece;
  border-bottom: 1px solid #cecece;
  background-color: #fff;
  display: flex;
  justify-content: center;

  font-size: 14px;
  font-weight: 700;

  cursor: pointer;
`;

const StyledAccommodationSelectBoxLeft = styled.div`
  width: 60%;
  height: 60px;
  border-right: 1px solid #cecece;

  display: flex;
  align-items: center;
  justify-content: center;
`;
const StyledAccommodationSelectBoxLeftSpan = styled.span`
  margin-right: 0.5rem;
`;

const StyledAccommodationSelectBoxRight = styled.div`
  width: 40%;
  height: 60px;

  display: flex;
  align-items: center;
  justify-content: center;
`;
