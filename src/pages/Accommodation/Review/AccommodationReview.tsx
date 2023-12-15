import styled from '@emotion/styled';
import { Heading, Button, Skeleton } from '@chakra-ui/react';
import { useNavigate, useParams } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { useState, useEffect } from 'react';
import AccommodationReviewItem from './AccommodationReviewItem';
import { getReviews } from '../../../api/accommodation';

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

interface ReviewProps {
  isLoaded: boolean;
}

function AccommodationReview({ isLoaded }: ReviewProps) {
  const [reviews, setReviews] = useState<ReviewsResponse>();
  const navigate = useNavigate();
  const params = useParams();

  const fetchData = async () => {
    setReviews(await getReviews(params.id));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return reviews ? (
    <StyledAccommodationReviewWrapper>
      <StyledAccommodationReviewTitle>
        <Skeleton isLoaded={isLoaded} width="100px" height="25px">
          <Heading as="h4" size="lg">
            후기
          </Heading>
        </Skeleton>
      </StyledAccommodationReviewTitle>
      <StyledAccommodationReviewItemsContainer>
        <Skeleton isLoaded={isLoaded}>
          <StyledAccommodationReviewItemsWrapper>
            {reviews &&
              (reviews.data.length > 0 ? (
                reviews.data
                  .slice(0, 5)
                  .map((review: AccommodationReviewObject) => (
                    <AccommodationReviewItem review={review} key={uuid()} />
                  ))
              ) : (
                <StyledNotReview>후기가 없습니다.</StyledNotReview>
              ))}
          </StyledAccommodationReviewItemsWrapper>
        </Skeleton>
      </StyledAccommodationReviewItemsContainer>
      {reviews.data.length ? (
        <StyledAccommodationReviewMoreBtnWrapper>
          <Skeleton isLoaded={isLoaded} height="50px">
            <Button
              variant="blue"
              size="lg"
              style={{ width: '260px', height: '40px' }}
              onClick={() => navigate(`/review/${params.id}`)}
            >
              후기 전체보기
            </Button>
          </Skeleton>
        </StyledAccommodationReviewMoreBtnWrapper>
      ) : (
        ''
      )}
    </StyledAccommodationReviewWrapper>
  ) : (
    <Skeleton />
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

const StyledNotReview = styled.div`
  width: 100%;
  height: 220px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 700;
`;
