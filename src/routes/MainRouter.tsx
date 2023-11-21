import { Outlet, Route, Routes } from 'react-router-dom';
import styled from '@emotion/styled';
import { theme } from '../styles/theme';
import Navigation from '../components/Layout/Navigation';

function Dashboard() {
  return (
    <StyledContainer>
      <StyledInnerContainer>
        <Outlet />
        <Navigation />
      </StyledInnerContainer>
    </StyledContainer>
  );
}

function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route index element={<>This is home!</>} />
      </Route>
    </Routes>
  );
}

export default MainRouter;

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background-color: ${theme.colors.gray50};
`;

const StyledInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow-y: auto;
  padding: 1rem;
  width: 768px;
  height: 100vh;
  background-color: ${theme.colors.white};
  box-shadow: ${theme.shadows.shadow1.shadow};

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
