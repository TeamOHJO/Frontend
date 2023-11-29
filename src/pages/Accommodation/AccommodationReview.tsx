import styled from '@emotion/styled';
import { Heading, Button } from '@chakra-ui/react';
import { useNavigate, useParams } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { useState, useEffect } from 'react';
import AccommodationReviewItem from './AccommodationReviewItem';

interface AccommodationReviewObject {
  reviewId: number;
  roomId: number;
  username: string;
  roomName: string;
  category: string;
  reviewContent: string;
  star: number;
  images: string[];
  updatedAt: string;
}
interface ReviewsResponse {
  code: number;
  message: string;
  data: AccommodationReviewObject[];
}

function AccommodationReview() {
  const [reviews, setReviews] = useState<ReviewsResponse>();
  const navigate = useNavigate();
  const params = useParams();

  const fetchData = async () => {
    const response = await fetch(
      `https://yanoljaschool.site:8080/review/accommodation/${params.id}`,
      {
        method: 'GET',
      },
    );
    setReviews(await response.json());
  };

  useEffect(() => {
    fetchData();
  }, []);

  return reviews ? (
    <StyledAccommodationReviewWrapper>
      <StyledAccommodationReviewTitle>
        <Heading as="h4" size="lg">
          후기
        </Heading>
      </StyledAccommodationReviewTitle>
      <StyledAccommodationReviewItemsContainer>
        <StyledAccommodationReviewItemsWrapper>
          {reviews &&
            reviews.data
              .slice(0, 5)
              .map((review: AccommodationReviewObject) => (
                <AccommodationReviewItem review={review} key={uuid()} />
              ))}
        </StyledAccommodationReviewItemsWrapper>
      </StyledAccommodationReviewItemsContainer>
      <StyledAccommodationReviewMoreBtnWrapper>
        <Button
          variant="blue"
          size="lg"
          style={{ width: '260px', height: '40px' }}
          onClick={() => navigate(`/review/${params.id}`)}
        >
          후기 전체보기
        </Button>
      </StyledAccommodationReviewMoreBtnWrapper>
    </StyledAccommodationReviewWrapper>
  ) : (
    <>스켈레톤</>
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
  width: auto;
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
