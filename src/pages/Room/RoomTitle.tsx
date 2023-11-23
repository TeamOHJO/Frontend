import styled from '@emotion/styled';
import { StarFilled } from '@ant-design/icons';
import { Heading, Text } from '@chakra-ui/react';
import { theme } from '../../styles/theme';

function RoomTitle() {
  return (
    <StyledRoomTitleWrapper>
      <StyledRoomBadgeStarWrapper>
        <StyledRoomTitleName>
          <Heading as="h2" size="lg">
            객실 이름 101호
          </Heading>
          <Text as="p" size="sm" color="gray.84">
            객실 정보 1
          </Text>

          <Text as="p" size="sm" color="gray.84">
            객실 정보 2
          </Text>
        </StyledRoomTitleName>
        <StyledRoomStar>
          <StarFilled
            style={{ color: `${theme.colors.blue400}`, fontSize: '0.8rem' }}
          />
          <StyledStarDigit>4.90</StyledStarDigit>
        </StyledRoomStar>
      </StyledRoomBadgeStarWrapper>
    </StyledRoomTitleWrapper>
  );
}

export default RoomTitle;

const StyledRoomTitleWrapper = styled.div`
  width: 100%;
  padding: 1rem;
`;

const StyledRoomBadgeStarWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
`;

const StyledRoomStar = styled.div``;

const StyledStarDigit = styled.span`
  margin-left: 0.5rem;
  font-size: 0.8rem;
`;

const StyledRoomTitleName = styled.div``;
