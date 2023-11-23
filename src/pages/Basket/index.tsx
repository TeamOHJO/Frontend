import React from 'react';
import styled from '@emotion/styled';
import BasketNav from './BasketNav';
import BasketHeader from './BasketHeader';

function Basket() {
  return (
    <StyledBasketWrapper>
      <BasketNav />
      <StyledBasketContent>
        <BasketHeader />
      </StyledBasketContent>
    </StyledBasketWrapper>
  );
}

export default Basket;

const StyledBasketWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 60px; //상하단 nav바 높이 제외 목적
  margin-bottom: 80px;
`;

const StyledBasketContent = styled.div``;
