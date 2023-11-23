import React from 'react';
import styled from '@emotion/styled';
import { Text, Button } from '@chakra-ui/react';
import { theme } from '../../styles/theme';

const BasketDisabledFooter = () => {
  return (
    <StyledBasketFooterWrapper>
      <StyledTextWrapper>
        <Text
          as="p"
          size="md"
          fontWeight="bold"
          color="red.500"
          textAlign="center"
        >
          ※ 해당 날짜에 예약이 꽉 차있습니다
        </Text>
      </StyledTextWrapper>
      <Button
        isDisabled
        colorScheme="blackAlpha"
        border="1px"
        borderColor="blackAlpha.50"
        size="lg"
        width="100%"
      >
        예약 불가
      </Button>
    </StyledBasketFooterWrapper>
  );
};

export default BasketDisabledFooter;

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
  padding: 10px 0;
`;
