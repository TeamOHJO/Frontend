import styled from '@emotion/styled';
import { StarFilled } from '@ant-design/icons';
import { Heading, Text } from '@chakra-ui/react';
import { theme } from '../../styles/theme';

interface AccommodationReviewProps {
  review: {
    userName: string;
    reviewContents: string;
    star: number;
    createdAt: string;
  };
  accommodationName: string;
  category: string;
}

function AccommodationReviewItem({
  review,
  accommodationName,
  category,
}: AccommodationReviewProps) {
  return (
    <StyledAccommodationReviewItemWrapper>
      <StyledAccommodationReviewItemTop>
        <StyledAccommodationReviewItemTopLeft>
          <div>
            <StarFilled
              style={{ color: `${theme.colors.blue400}`, fontSize: '0.8rem' }}
            />
            <StyledStarDigit>{review.star}</StyledStarDigit>
          </div>
          <Heading as="h4" size="sm">
            {review.userName}
          </Heading>
        </StyledAccommodationReviewItemTopLeft>
        <Text as="p" size="sm" color="gray.84">
          {review.createdAt}
        </Text>
      </StyledAccommodationReviewItemTop>
      <StyledAccommodationReviewItemTitle>
        <Heading as="h4" size="sm">
          {accommodationName}
        </Heading>
        <Text as="p" size="sm" color="gray.84">
          {category}
        </Text>
      </StyledAccommodationReviewItemTitle>
      <StyledAccommodationReviewItemContent>
        <Text as="p" size="sm" color="basic">
          {review.reviewContents}
        </Text>
      </StyledAccommodationReviewItemContent>
    </StyledAccommodationReviewItemWrapper>
  );
}

export default AccommodationReviewItem;

const StyledAccommodationReviewItemWrapper = styled.div`
  width: 50%;
  min-width: 350px;
  height: 200px;

  border-radius: 15px;
  box-shadow: ${theme.shadows.shadow2.shadow};

  margin: 1rem;
  padding: 1rem;

  background-color: ${theme.colors.white};
`;

const StyledAccommodationReviewItemTop = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledAccommodationReviewItemTopLeft = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledStarDigit = styled.span`
  margin-left: 0.5rem;
  margin-right: 1rem;
  font-size: 0.8rem;
`;

const StyledAccommodationReviewItemTitle = styled.div`
  width: 100%;
  margin: 0.5rem 0;
`;

const StyledAccommodationReviewItemContent = styled.div`
  width: 100%;
`;
