import styled from '@emotion/styled';
import { LoadingOutlined } from '@ant-design/icons';

const LoadingCircle = () => {
  return (
    <StyledContainer>
      <LoadingOutlined style={{ fontSize: '100px', color: '#3182CE' }} />
    </StyledContainer>
  );
};

export default LoadingCircle;

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;
