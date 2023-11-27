import styled from '@emotion/styled';
import SearchBtn from './SearchBtn';
import MenuBar from './MenuBar';
import { theme } from '../../styles/theme';

function HomeHeader() {
  return (
    <StyledContainer>
      <SearchBtn />
      <MenuBar />
    </StyledContainer>
  );
}

export default HomeHeader;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  padding-top: 1rem;
  width: ${theme.device.tablet};
  box-shadow: ${theme.shadows.shadow1.shadow};
  background-color: ${theme.colors.white};
  z-index: 100;

  @media screen and (max-width: ${theme.device.tablet}) {
    width: 100%;
  }
`;
