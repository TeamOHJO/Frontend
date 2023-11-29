import styled from '@emotion/styled';
import { Center, Text } from '@chakra-ui/react';
import MyPageTabs from './MyPageTabs';
import { getCookie } from '../../utils/utils';

function MyPage() {
  const name = getCookie('userName');
  return (
    <StyledContainer>
      <StyledInnerContainer>
        <Center height="90px">
          <Text as="p" size="sm" textAlign="center">
            {name}님, 같이 여행을 즐겨요
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
`;

const StyledInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: calc(100vh - 74px);
`;
