import { RightCircleFilled } from '@ant-design/icons';
import styled from '@emotion/styled';
import { theme } from '../../styles/theme';

interface NextArrowProps {
  onClick: () => void;
}

const NextArrow = ({ onClick }: NextArrowProps) => (
  <StyledPrevArrow className="custom-arrow custom-prev" onClick={onClick}>
    <RightCircleFilled />
  </StyledPrevArrow>
);

export default NextArrow;

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
