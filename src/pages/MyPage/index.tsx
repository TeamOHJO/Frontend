import styled from '@emotion/styled';
import { Center, Text } from '@chakra-ui/react';
import MyPageTabs from './MyPageTabs';

function MyPage() {
  return (
    <StyledContainer>
      <StyledInnerContainer>
        <Center height="90px">
          <Text as="p" size="sm" textAlign="center">
            000님, 같이 여행을 즐겨요
          </Text>
        </Center>
        <MyPageTabs />
      </StyledInnerContainer>
    </StyledContainer>
  );
}

export default MyPage;

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
`;

const StyledInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: calc(100vh - 74px);
`;
