import styled from '@emotion/styled';
import BasketTabs from './BasketTabs';
import BasketHeader from './BasketHeader';

function Basket() {
  return (
    <StyledContainer>
      <StyledBasketWrapper>
        <BasketHeader />
        <StyledBasketContent>
          <BasketTabs />
        </StyledBasketContent>
      </StyledBasketWrapper>
    </StyledContainer>
  );
}

export default Basket;

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

const StyledBasketContent = styled.div`
  padding: 1rem;
`;
