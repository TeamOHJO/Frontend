import React from 'react';
import styled from '@emotion/styled';
import { Button, Box } from '@chakra-ui/react';
import BasketTabs from './BasketTabs';

const BasketHeader = () => {
  return (
    <StyledBasketHeader>
      <Box textAlign="right">
        <Button variant="blue" size="mini">
          선택 삭제
        </Button>
      </Box>
      <BasketTabs />
    </StyledBasketHeader>
  );
};

export default BasketHeader;

const StyledBasketHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
