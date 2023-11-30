import styled from '@emotion/styled';
import { Heading } from '@chakra-ui/react';
import SearchBtn from './SearchBtn';
import MenuBar from './MenuBar';
import { theme } from '../../styles/theme';

function HomeHeader() {
  return (
    <StyledContainer>
      <StyledSearchContainer>
        <StyledHeading as="h3" size="lg">
          OHNOLZA
        </StyledHeading>
        <SearchBtn />
      </StyledSearchContainer>
      <MenuBar />
    </StyledContainer>
  );
}

export default HomeHeader;

const StyledSearchContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledHeading = styled(Heading)`
  margin-left: 1rem;
  cursor: pointer;
`;

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
