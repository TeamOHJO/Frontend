import styled from '@emotion/styled';
import { theme } from '../../styles/theme';

function Navigation() {
  return (
    <StyledContainer>
      <StyledItem>홈</StyledItem>
      <StyledItem>홈</StyledItem>
      <StyledItem>홈</StyledItem>
    </StyledContainer>
  );
}

export default Navigation;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 0;
  box-shadow: ${theme.shadows.shadowTop.shadow};
  width: 768px;
  min-width: 375px;
  height: 58px;
  background-color: ${theme.colors.white};
  z-index: 20;

  @media screen and (max-width: 768px) {
    width: 100%;
    min-width: 375px;
  }
`;

const StyledItem = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
`;
