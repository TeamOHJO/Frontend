import styled from '@emotion/styled';
import { Heading, Text } from '@chakra-ui/react';
import { CheckOutlined } from '@ant-design/icons';

function ExplanationModalInfoTag() {
  const array = [
    '보일러',
    '주차시설하',
    '여섯글자까지',
    '일곱글자까지돼',
    '보일러',
    '보일러',
    '보일러',
    '보일러',
    '보일러',
    '보일러',
    '보일러',
    '보일러',
    '보일러',
  ];

  return (
    <StyledExplanationModalInfoTagWrapper>
      <StyledExplanationModalInfoTagTitle>
        <Heading as="h4" size="lg">
          시설 및 서비스
        </Heading>
      </StyledExplanationModalInfoTagTitle>
      <StlyedExplanationModalInfoTagBox>
        {array.map((data: string) => (
          <StyledExplanationModalInfoTagItem>
            <CheckOutlined
              style={{ fontSize: '12px', marginRight: '0.5rem' }}
            />
            <Text as="p" size="xs" color="basic">
              {data}
            </Text>
          </StyledExplanationModalInfoTagItem>
        ))}
      </StlyedExplanationModalInfoTagBox>
    </StyledExplanationModalInfoTagWrapper>
  );
}

export default ExplanationModalInfoTag;

const StyledExplanationModalInfoTagWrapper = styled.div`
  width: 100%;
  padding: 1rem;
`;

const StyledExplanationModalInfoTagTitle = styled.div`
  width: 100%;
  padding: 1rem 0;
`;

const StlyedExplanationModalInfoTagBox = styled.div`
  width: 100%;
  padding: 0 1rem;
  /* 그리드 */
  display: grid;
  grid-template-columns: repeat(auto-fill, 120px);
  justify-content: space-between;

  flex-wrap: wrap;
`;

const StyledExplanationModalInfoTagItem = styled.div`
  width: 120px;
  padding: 0.5rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
