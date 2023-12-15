import styled from '@emotion/styled';
import { Heading, Button } from '@chakra-ui/react';

const Error = () => {
  return (
    <StyledContainer>
      <Heading as="h2">404 Not Found</Heading>
      <Button variant="blue">메인으로</Button>
    </StyledContainer>
  );
};

export default Error;

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;
