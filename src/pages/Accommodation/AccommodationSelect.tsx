import styled from '@emotion/styled';
import { Heading, useDisclosure } from '@chakra-ui/react';
import { CalendarOutlined } from '@ant-design/icons';
import { useRecoilState } from 'recoil';
import SelectModal from './SelectModal';
import {
  accommodationSelectStartDateState,
  accommodationSelectEndDateState,
  accommodationSelectVisitorsState,
} from '../../states/atom';

function AccommodationSelect() {
  const [accommodationSelectStartDate, setAccommodationSelectStartDate] =
    useRecoilState<Date | null>(accommodationSelectStartDateState);

  const [accommodationSelectEndDate, setAccommodationSelectEndDate] =
    useRecoilState<Date | null>(accommodationSelectEndDateState);

  const [accommodationSelectVisitors, setAccommodationSelectVisitors] =
    useRecoilState<number>(accommodationSelectVisitorsState);
  const { onOpen, isOpen, onClose } = useDisclosure();

  const Day = ['일', '월', '화', '수', '목', '금', '토'];

  return (
    <StyledAccommodationSelectWrapper onClick={onOpen}>
      <StyledAccommodationSelectTitle>
        <Heading as="h4" size="lg">
          객실 선택
        </Heading>
      </StyledAccommodationSelectTitle>
      <StyledAccommodationSelectBox>
        <StyledAccommodationSelectBoxLeft>
          <StyledAccommodationSelectBoxLeftSpan>
            {accommodationSelectStartDate &&
              accommodationSelectStartDate.getMonth() + 1}
            .
            {accommodationSelectStartDate &&
              accommodationSelectStartDate.getDate()}
            (
            {accommodationSelectStartDate &&
              Day[accommodationSelectStartDate.getDay()]}
            )~
            {accommodationSelectEndDate &&
              accommodationSelectEndDate.getMonth() + 1}
            .
            {accommodationSelectEndDate && accommodationSelectEndDate.getDate()}
            (
            {accommodationSelectEndDate &&
              Day[accommodationSelectEndDate.getDay()]}
            ) 날짜
          </StyledAccommodationSelectBoxLeftSpan>
          <CalendarOutlined style={{ fontSize: '20px' }} />
        </StyledAccommodationSelectBoxLeft>
        <StyledAccommodationSelectBoxRight>
          {accommodationSelectVisitors}명
        </StyledAccommodationSelectBoxRight>
      </StyledAccommodationSelectBox>
      <SelectModal isOpen={isOpen} onClose={onClose} />
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
