import styled from '@emotion/styled';
import { Heading, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import AccommodationReviewItem from './AccommodationReviewItem';

interface AccommodationReviewObject {
  userName: string;
  reviewContents: string;
  star: number;
  createdAt: string;
}

interface AccommodationReviewProps {
  reviews: AccommodationReviewObject[];
  accommodationName: string;
  category: string;
}

function AccommodationReview({
  reviews,
  accommodationName,
  category,
}: AccommodationReviewProps) {
  const navigate = useNavigate();

  return (
    <StyledAccommodationReviewWrapper>
      <StyledAccommodationReviewTitle>
        <Heading as="h4" size="lg">
          후기
        </Heading>
      </StyledAccommodationReviewTitle>
      <StyledAccommodationReviewItemsContainer>
        <StyledAccommodationReviewItemsWrapper>
          {reviews &&
            reviews.map((review: AccommodationReviewObject) => (
              <AccommodationReviewItem
                review={review}
                accommodationName={accommodationName}
                category={category}
                key={uuid()}
              />
            ))}
        </StyledAccommodationReviewItemsWrapper>
      </StyledAccommodationReviewItemsContainer>
      <StyledAccommodationReviewMoreBtnWrapper>
        <Button
          variant="blue"
          size="lg"
          style={{ width: '260px', height: '40px' }}
          onClick={() => navigate('/review/id')}
        >
          후기 전체보기
        </Button>
      </StyledAccommodationReviewMoreBtnWrapper>
    </StyledAccommodationReviewWrapper>
  );
}

export default AccommodationReview;

const StyledAccommodationReviewWrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;

const StyledAccommodationReviewItemsContainer = styled.div`
  width: 100%;
  height: 240px;

  padding: 0 1rem;
  overflow-x: scroll;
`;

const StyledAccommodationReviewItemsWrapper = styled.div`
  width: 300%;
  height: 220px;

  display: flex;
  flex-wrap: nowrap;
`;

const StyledAccommodationReviewTitle = styled.div`
  padding: 1rem;
`;

const StyledAccommodationReviewMoreBtnWrapper = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
