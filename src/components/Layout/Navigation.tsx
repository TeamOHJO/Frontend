import styled from '@emotion/styled';
import { theme } from '../../styles/theme';
import TopBtn from '../TopBtn';

function Navigation() {
  return (
    <StyledContainer>
      <StyledItem>홈</StyledItem>
      <StyledItem>홈</StyledItem>
      <StyledItem>홈</StyledItem>
      <TopBtn />
    </StyledContainer>
  );
}

export default Navigation;

const StyledContainer = styled.div`
  position: relative;
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
