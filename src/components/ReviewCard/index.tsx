import { Card, SimpleGrid } from '@chakra-ui/react';
import styled from '@emotion/styled';
import ReviewCardHeader from './ReviewCardHeader';
import ReviewCardBody from './ReviewCardBody';
import ReviewCardImage from './ReviewCardImage';
import { useReviewData } from '../../hooks/useReviewData';
import { Review } from '../../@types/interface';

const ReviewCard = ({ accommodationId }: { accommodationId: string }) => {
  const reviewData = useReviewData(accommodationId);

  if (!reviewData || reviewData.length === 0) {
    return null;
  }

  return (
    <StyledSimpleGrid
      mt="1rem"
      p="4"
      spacing={4}
      templateColumns={['repeat(1, 1fr)']}
      justifyContent="center"
      alignItems="center"
    >
      {reviewData.map((review: Review) => (
        <Card key={review.reviewId} variant="elevated" pb="2rem">
          <ReviewCardHeader reviewData={review} />
          <ReviewCardBody reviewData={review} />
          <ReviewCardImage reviewData={review} />
        </Card>
      ))}
    </StyledSimpleGrid>
  );
};

export default ReviewCard;

const StyledSimpleGrid = styled(SimpleGrid)`
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
