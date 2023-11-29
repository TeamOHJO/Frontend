import styled from '@emotion/styled';
import { Heading, Text } from '@chakra-ui/react';
import { CheckOutlined } from '@ant-design/icons';
import { v4 as uuid } from 'uuid';

interface RoomInfoTagProps {
  serviceInfo: string[];
}

function RoomInfoTag({ serviceInfo }: RoomInfoTagProps) {
  return (
    <StyledRoomInfoTagWrapper>
      <StyledRoomInfoTagTitle>
        <Heading as="h4" size="lg">
          시설 및 서비스
        </Heading>
      </StyledRoomInfoTagTitle>
      <StlyedRoomInfoTagBox>
        {serviceInfo &&
          serviceInfo.map((data: string) => (
            <StyledRoomInfoTagItem key={uuid()}>
              <CheckOutlined style={{ fontSize: '12px', marginRight: '0.5rem' }} />
              <Text as="p" size="xs" color="basic">
                {data}
              </Text>
            </StyledRoomInfoTagItem>
          ))}
      </StlyedRoomInfoTagBox>
    </StyledRoomInfoTagWrapper>
  );
}

export default RoomInfoTag;

const StyledRoomInfoTagWrapper = styled.div`
  width: 100%;
  padding: 1rem;
`;

const StyledRoomInfoTagTitle = styled.div`
  width: 100%;
  padding: 1rem 0;
`;

const StlyedRoomInfoTagBox = styled.div`
  width: 100%;
  padding: 0 1rem;
  /* 그리드 */
  display: grid;
  grid-template-columns: repeat(auto-fill, 120px);
  justify-content: space-between;

  flex-wrap: wrap;
`;

const StyledRoomInfoTagItem = styled.div`
  width: 120px;
  padding: 0.5rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
