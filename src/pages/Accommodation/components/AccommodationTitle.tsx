import styled from '@emotion/styled';
import { StarFilled } from '@ant-design/icons';
import { Badge, Heading, Text } from '@chakra-ui/react';
import { theme } from '../../../styles/theme';

function AccommodationTitle() {
  return (
    <StyledAccommodationTitleWrapper>
      <StyledAccommodationBadgeStarWrapper>
        <StyledAccommodationBadge>
          <Badge variant="blue" fontSize="0.8rem">
            호텔/리조트
          </Badge>
        </StyledAccommodationBadge>
        <StyledAccommodationStar>
          <StarFilled
            style={{ color: `${theme.colors.blue400}`, fontSize: '0.8rem' }}
          />
          <StyledStarDigit>4.90</StyledStarDigit>
        </StyledAccommodationStar>
      </StyledAccommodationBadgeStarWrapper>
      <StyledAccommodationTitleName>
        <Heading as="h2" size="lg">
          숙박 업소 이름
        </Heading>
        <Text as="p" size="sm" color="gray.84">
          서울특별시 주소 주소 주소
        </Text>
      </StyledAccommodationTitleName>
    </StyledAccommodationTitleWrapper>
  );
}

export default AccommodationTitle;

const StyledAccommodationTitleWrapper = styled.div`
  width: 100%;
  padding: 1rem;
`;

const StyledAccommodationBadgeStarWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledAccommodationBadge = styled.div``;

const StyledAccommodationStar = styled.div``;

const StyledStarDigit = styled.span`
  margin-left: 0.5rem;
  font-size: 0.8rem;
`;

const StyledAccommodationTitleName = styled.div`
  padding: 1rem 0;
`;
