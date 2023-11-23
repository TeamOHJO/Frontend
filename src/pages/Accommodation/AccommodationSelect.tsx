import styled from '@emotion/styled';
import { Heading } from '@chakra-ui/react';
import { CalendarOutlined } from '@ant-design/icons';

function AccommodationSelect() {
  return (
    <StyledAccommodationSelectWrapper>
      <StyledAccommodationSelectTitle>
        <Heading as="h4" size="lg">
          객실 선택
        </Heading>
      </StyledAccommodationSelectTitle>
      <StyledAccommodationSelectBox>
        <StyledAccommodationSelectBoxLeft>
          <StyledAccommodationSelectBoxLeftSpan>
            11.22(수)~11월23일(목)·1박
          </StyledAccommodationSelectBoxLeftSpan>
          <CalendarOutlined style={{ fontSize: '20px' }} />
        </StyledAccommodationSelectBoxLeft>
        <StyledAccommodationSelectBoxRight>
          2명
        </StyledAccommodationSelectBoxRight>
      </StyledAccommodationSelectBox>
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
  margin-right: 1rem;
`;

const StyledAccommodationSelectBoxRight = styled.div`
  width: 40%;
  height: 60px;

  display: flex;
  align-items: center;
  justify-content: center;
`;
