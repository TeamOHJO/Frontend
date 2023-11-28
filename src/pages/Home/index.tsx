import { useEffect } from 'react';
import styled from '@emotion/styled';
import { useParams, useNavigate } from 'react-router-dom';
import HomeHeader from './HomeHeader';
import ContentsContainer from './ContentsContainer';

function Home() {
  const { id } = useParams();

  const navigate = useNavigate();
  useEffect(() => {
    if (id !== undefined) {
      navigate('/');
    }
  }, []);

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
