import styled from '@emotion/styled';
import { useParams } from 'react-router-dom';
import ReviewPageTitle from './ReviewPageTitle';
import ReviewSubtitle from './ReviewSubtitle';
import ReviewCard from '../../components/ReviewCard';
import { useReviewData } from '../../hooks/useReviewData';

const CustomerReview = () => {
  const { id } = useParams();
  if (!id) {
    return <div>Review ID no provided</div>;
  }

  const reviewData = useReviewData(id);

  return (
    <StyledLayout>
      <ReviewPageTitle />
      <ReviewSubtitle />
      {reviewData && <ReviewCard accommodationId={id} />}
    </StyledLayout>
  );
};

export default CustomerReview;

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  min-height: 100vh;
`;
