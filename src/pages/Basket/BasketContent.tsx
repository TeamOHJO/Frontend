import React from 'react';
import styled from '@emotion/styled';
import BasketCard from './BasketCard';
import BasketDisabledCard from './BasketDisabledCard';

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
