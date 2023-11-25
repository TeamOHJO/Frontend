import { Card, SimpleGrid } from '@chakra-ui/react';
import styled from '@emotion/styled';
import ReviewCardHeader from './ReviewCardHeader';
import ReviewCardBody from './ReviewCardBody';
import ReviewCardImage from './ReviewCardImage';

const ReviewCard = () => {
  return (
    <StyledSimpleGrid
      mt="1rem"
      p="4"
      spacing={4}
      templateColumns={['repeat(1, 1fr)']}
      justifyContent="center"
      alignItems="center"
    >
      <Card variant="elevated" pb="2rem">
        <ReviewCardHeader />
        <ReviewCardBody />
        <ReviewCardImage />
      </Card>
      <Card variant="elevated" pb="2rem">
        <ReviewCardHeader />
        <ReviewCardBody />
        <ReviewCardImage />
      </Card>
    </StyledSimpleGrid>
  );
};

export default ReviewCard;

const StyledSimpleGrid = styled(SimpleGrid)`
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }

  /* @media (min-width: 769px) and (max-width: 1023px) {
    grid-template-columns: repeat(2, 1fr);
  } */
`;
