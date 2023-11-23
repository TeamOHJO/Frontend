import React from 'react';
import styled from '@emotion/styled';
import BasketTabs from './BasketTabs';
import BasketHeader from './BasketHeader';

function Basket() {
  return (
    <StyledBasketWrapper>
      <BasketHeader />
      <StyledBasketContent>
        <BasketTabs />
      </StyledBasketContent>
    </StyledBasketWrapper>
  );
}

export default Basket;

const StyledBasketWrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 250px);
  margin-top: 60px; //상하단 nav바 높이 제외 목적
  margin-bottom: 80px;
`;

const StyledBasketContent = styled.div`
  padding: 1rem;
`;
