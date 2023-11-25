import { forwardRef } from 'react';
import { CalendarOutlined } from '@ant-design/icons';

const CalendarCustomInput = forwardRef(({ value, onClick }: any, ref: any) => (
  <button type="button" className="custom-input" onClick={onClick} ref={ref}>
    <CalendarOutlined style={{ paddingRight: '10px' }} />
    {value}
  </button>
));

export default CalendarCustomInput;
