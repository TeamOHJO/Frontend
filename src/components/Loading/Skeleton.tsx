import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { theme } from '../../styles/theme';

const Skeleton = () => {
  return <StyledContainer />;
};

export default Skeleton;

const load = keyframes`
0% {
        background-color: ${theme.colors.gray200}
    }

    50% {
        background-color: ${theme.colors.gray300}
    }

    100% {
        background-color: ${theme.colors.gray200}
    }
    
`;

const StyledContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  border-radius: inherit;
  animation: ${load} 1.8s infinite;
`;
