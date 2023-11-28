import styled from '@emotion/styled';
import { StarFilled } from '@ant-design/icons';
import { Badge, Heading, Text } from '@chakra-ui/react';
import { theme } from '../../styles/theme';
import { handleBadgeColor } from '../../utils/handleBadgeColor';

interface AccommodationTitleProps {
  accommodationName: string;
  category: string;
  location: string;
  stars: number;
}

function AccommodationTitle({
  accommodationName,
  category,
  location,
  stars,
}: AccommodationTitleProps) {
  return (
    <StyledAccommodationTitleWrapper>
      <StyledAccommodationBadgeStarWrapper>
        <StyledAccommodationBadge>
          <Badge variant={handleBadgeColor(category)} fontSize="0.8rem">
            {category}
          </Badge>
        </StyledAccommodationBadge>
        <StyledAccommodationStar>
          <StarFilled
            style={{ color: `${theme.colors.blue400}`, fontSize: '0.8rem' }}
          />
          <StyledStarDigit>{stars}</StyledStarDigit>
        </StyledAccommodationStar>
      </StyledAccommodationBadgeStarWrapper>
      <StyledAccommodationTitleName>
        <Heading as="h2" size="lg">
          {accommodationName}
        </Heading>
        <Text as="p" size="sm" color="gray.84">
          {location}
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
