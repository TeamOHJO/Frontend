import styled from '@emotion/styled';
import ReviewPageTitle from './ReviewPageTitle';
import ReviewSubtitle from './ReviewSubtitle';
import ReviewCard from '../../components/ReviewCard';

const CustomerReview = () => {
  return (
    <StyledLayout>
      <ReviewPageTitle />
      <ReviewSubtitle />
      <ReviewCard />
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
