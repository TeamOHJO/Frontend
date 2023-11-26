import DatePicker from 'react-datepicker';
import { Text } from '@chakra-ui/react';
import styled from '@emotion/styled';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale';
import { theme } from '../../../styles/theme';
import CalendarCustomInput from './CalendarCustomInput';

interface CalendarProps {
  startDate: Date | null;
  endDate: Date | null;
  onChangeDate: (dates: any) => void;
}

function Calendar({ startDate, endDate, onChangeDate }: CalendarProps) {
  return (
    <StyledDateContainer>
      <StyledLabel as="p" size="lg">
        날짜
      </StyledLabel>
      <StyledSubLabel>체크인 - 체크아웃</StyledSubLabel>
      <DatePicker
        locale={ko}
        selected={startDate}
        onChange={onChangeDate}
        minDate={new Date()}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        showDisabledMonthNavigation
        dateFormat="yyyy-MM-dd"
        customInput={<CalendarCustomInput />}
      />
    </StyledDateContainer>
  );
}

export default Calendar;

const StyledDateContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;

const StyledLabel = styled(Text)`
  margin-bottom: 0.5rem;
`;

const StyledSubLabel = styled.span`
  margin-bottom: 0.5rem;
  font-size: 14px;
  color: ${theme.colors.gray400};
`;
