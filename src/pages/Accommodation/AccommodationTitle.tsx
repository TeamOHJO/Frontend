import styled from '@emotion/styled';
import { StarFilled } from '@ant-design/icons';
import { Badge, Heading, Text, Skeleton, SkeletonText } from '@chakra-ui/react';
import { theme } from '../../styles/theme';
import { handleBadgeColor } from '../../utils/handleBadgeColor';
import { changeCategoryReverseFormat, changeStarFormat } from '../../utils/utils';

interface AccommodationTitleProps {
  name: string | undefined;
  category: string | undefined;
  location: string | undefined;
  averageRating: number | undefined;
  isLoaded: boolean | undefined;
}

function AccommodationTitle({
  name,
  category,
  location,
  averageRating,
  isLoaded,
}: AccommodationTitleProps) {
  return (
    <StyledAccommodationTitleWrapper>
      <StyledAccommodationBadgeStarWrapper>
        <StyledAccommodationBadge>
          <Skeleton isLoaded={isLoaded} width="72px">
            <Badge
              variant={category && handleBadgeColor(changeCategoryReverseFormat(category))}
              fontSize="0.8rem"
            >
              {category && changeCategoryReverseFormat(category)}
            </Badge>
          </Skeleton>
        </StyledAccommodationBadge>
        <StyledAccommodationStar>
          <Skeleton isLoaded={isLoaded} width="50px">
            <StarFilled style={{ color: `${theme.colors.blue400}`, fontSize: '0.8rem' }} />
            <StyledStarDigit>{averageRating && changeStarFormat(averageRating)}</StyledStarDigit>
          </Skeleton>
        </StyledAccommodationStar>
      </StyledAccommodationBadgeStarWrapper>

      <StyledAccommodationTitleName>
        <SkeletonText isLoaded={isLoaded} noOfLines={2} spacing="2">
          <Heading as="h2" size="lg">
            {name}
          </Heading>
          <Text as="p" size="sm" color="gray.84">
            {location}
          </Text>
        </SkeletonText>
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
