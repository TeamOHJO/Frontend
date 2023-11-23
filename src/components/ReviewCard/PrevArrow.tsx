import { LeftCircleFilled } from '@ant-design/icons';
import styled from '@emotion/styled';
import React from 'react';
import { theme } from '../../styles/theme';

interface PrevArrowProps {
  onClick: () => void;
}

const PrevArrow = ({ onClick }: PrevArrowProps) => (
  <StyledPrevArrow className="custom-arrow custom-prev" onClick={onClick}>
    <LeftCircleFilled />
  </StyledPrevArrow>
);

export default PrevArrow;

const StyledPrevArrow = styled.div`
  font-size: 24px;
  color: ${theme.colors.gray500};
  padding: 10px;
  cursor: pointer;

  &:hover {
    color: ${theme.colors.blue400};
    transition: color 0.5s;
  }
`;
