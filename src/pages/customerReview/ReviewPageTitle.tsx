import styled from '@emotion/styled';
import React from 'react';
import { theme } from '../../styles/theme';

const ReviewPageTitle = () => {
  return <StyledReviewTitle>후기 전체 보기</StyledReviewTitle>;
};

export default ReviewPageTitle;

const StyledReviewTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  max-width: 768px;
  height: 5.625rem;

  color: ${theme.colors.basic};
  font-family: ${theme.fonts.subtitle4};

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
