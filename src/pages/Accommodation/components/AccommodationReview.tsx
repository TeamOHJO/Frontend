import styled from '@emotion/styled';
import { theme } from '../../../styles/theme';

function AccommodationReview() {
  const array: number[] = [1, 2, 3, 4, 5];

  return (
    <AccommodationReviewWrapper>
      타이틀
      <AccommodationReviewItemsContainer>
        <AccommodationReviewItemsWrapper>
          {array.map((i: number) => (
            <AccommodationReviewItem key={i}>{i}</AccommodationReviewItem>
          ))}
        </AccommodationReviewItemsWrapper>
      </AccommodationReviewItemsContainer>
      전체보기
    </AccommodationReviewWrapper>
  );
}

export default AccommodationReview;

const AccommodationReviewWrapper = styled.div`
  width: 100%;
  height: 280px;
  overflow: hidden;
  background-color: ${theme.colors.gray100};
`;

const AccommodationReviewItemsContainer = styled.div`
  width: 100%;
  height: 240px;

  padding: 0 1rem;
  overflow-x: scroll;
`;

const AccommodationReviewItemsWrapper = styled.div`
  width: 300%;
  height: 220px;

  display: flex;
  flex-wrap: nowrap;
`;

const AccommodationReviewItem = styled.div`
  width: 50%;
  min-width: 350px;
  height: 200px;

  border-radius: 15px;

  margin: 1rem;
  padding: 1rem;

  background-color: ${theme.colors.white};
`;
