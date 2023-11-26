import { forwardRef } from 'react';
import { CalendarOutlined } from '@ant-design/icons';
import styled from '@emotion/styled';

const CalendarCustomInput = forwardRef(({ value, onClick }: any, ref: any) => (
  <StyledButton
    type="button"
    className="custom-input"
    onClick={onClick}
    ref={ref}
  >
    <CalendarOutlined style={{ paddingRight: '10px' }} />
    {value}
  </StyledButton>
));

export default CalendarCustomInput;

const StyledButton = styled.button`
  width: 50%;
  min-width: 250px;
  padding: 8px;
  margin-bottom: 5px;
  border: 1px solid #2b6cb0;
  border-radius: 8px;
  color: black;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    background-color: #ebf8ff;
  }
`;
