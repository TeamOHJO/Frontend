import styled from '@emotion/styled';
import AddReviewHeader from './AddReviewHeader';
import AddReviewForm from './AddReviewForm';

function AddReview() {
  return (
    <StyledContainer>
      <StyledBasketWrapper>
        <AddReviewHeader />
        <AddReviewForm />
      </StyledBasketWrapper>
    </StyledContainer>
  );
}

export default AddReview;

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
`;

const StyledBasketWrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 250px);
  margin-top: 60px; //상하단 nav바 높이 제외 목적
  margin-bottom: 80px;
`;
