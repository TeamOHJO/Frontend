import React from 'react';
import styled from '@emotion/styled';
import { Text, Button } from '@chakra-ui/react';
import { theme } from '../../styles/theme';

const BasketFooter = () => {
  return (
    <StyledBasketFooterWrapper>
      <StyledTextWrapper>
        <Text as="p" size="md" fontWeight="bold">
          결제 예상 금액
        </Text>
        <Text as="p" size="md" fontWeight="bold" color="red.500">
          ₩ 435,400
        </Text>
      </StyledTextWrapper>
      <Button variant="blue" size="lg" width="100%">
        결제하기
      </Button>
    </StyledBasketFooterWrapper>
  );
};

export default BasketFooter;

const StyledBasketFooterWrapper = styled.div`
  width: 768px;
  height: 105px;
  padding: 10px 1rem;

  position: fixed;
  bottom: 58px;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 10;

  background-color: ${theme.colors.white};
  box-shadow: ${theme.shadows.shadowTop.shadow};

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const StyledTextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding: 10px 0;
`;
