import styled from '@emotion/styled';
import HomeHeader from './HomeHeader';
import ContentsContainer from './ContentsContainer';

function Home() {
  return (
    <StyledContainer>
      <HomeHeader />
      <ContentsContainer />
    </StyledContainer>
  );
}

export default Home;

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
`;
