import React from 'react';
import styled from '@emotion/styled';
import BasketCard from './BasketCard';
import BasketDisabledCard from './BasketDisabledCard';

// 레이아웃 단계에서 사용하지 않고
// API 통신해서 예약 가능/불가 숙소 구분해서 받아올 수 있을 때 사용 예정
const BasketContent = () => {
  return (
    <StyledBasketCardWrapper>
      <BasketCard />
      <BasketCard />
      <BasketCard />
      <BasketCard />
      <BasketDisabledCard />
      <BasketDisabledCard />
      <BasketDisabledCard />
      <BasketDisabledCard />
    </StyledBasketCardWrapper>
  );
};

export default BasketContent;

const StyledBasketCardWrapper = styled.div`
  width: 100%;
  position: relative;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 15px;
`;
