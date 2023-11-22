import styled from '@emotion/styled';
import { Heading } from '@chakra-ui/react';
import { theme } from '../../../styles/theme';

function AccommodationSelect() {
  return (
    <StyledAccommodationSelectWrapper>
      <StyledAccommodationSelectTitle>
        <Heading as="h4" size="lg">
          객실 선택
        </Heading>
      </StyledAccommodationSelectTitle>
      <StyledAccommodationSelectBox>
        <StyledAccommodationSelectBoxLeft>1</StyledAccommodationSelectBoxLeft>
        <StyledAccommodationSelectBoxRight>2</StyledAccommodationSelectBoxRight>
      </StyledAccommodationSelectBox>
    </StyledAccommodationSelectWrapper>
  );
}

export default AccommodationSelect;

const StyledAccommodationSelectWrapper = styled.div`
  width: 100%;

  background-color: ${theme.colors.gray100};
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
`;

const StyledAccommodationSelectBoxLeft = styled.div`
  width: 60%;
  height: 60px;
  border-right: 1px solid #cecece;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledAccommodationSelectBoxRight = styled.div`
  width: 40%;
  height: 60px;

  display: flex;
  align-items: center;
  justify-content: center;
`;
