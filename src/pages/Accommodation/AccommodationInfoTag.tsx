import styled from '@emotion/styled';
import { Heading, Text } from '@chakra-ui/react';
import { CheckOutlined } from '@ant-design/icons';

function AccommodationInfoTag() {
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
    <StyledAccommodationInfoTagWrapper>
      <StyledAccommodationInfoTagTitle>
        <Heading as="h4" size="lg">
          시설 및 서비스
        </Heading>
      </StyledAccommodationInfoTagTitle>
      <StlyedAccommodationInfoTagBox>
        {array.map((data: string) => (
          <StyledAccommodationinfoTagItem>
            <CheckOutlined
              style={{ fontSize: '12px', marginRight: '0.5rem' }}
            />
            <Text as="p" size="xs" color="basic">
              {data}
            </Text>
          </StyledAccommodationinfoTagItem>
        ))}
      </StlyedAccommodationInfoTagBox>
    </StyledAccommodationInfoTagWrapper>
  );
}

export default AccommodationInfoTag;

const StyledAccommodationInfoTagWrapper = styled.div`
  width: 100%;
  padding: 1rem;
`;

const StyledAccommodationInfoTagTitle = styled.div`
  width: 100%;
  padding: 1rem 0;
`;

const StlyedAccommodationInfoTagBox = styled.div`
  width: 100%;
  padding: 0 1rem;
  /* 그리드 */
  display: grid;
  grid-template-columns: repeat(auto-fill, 120px);
  justify-content: space-between;

  flex-wrap: wrap;
`;

const StyledAccommodationinfoTagItem = styled.div`
  width: 120px;
  padding: 0.5rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
