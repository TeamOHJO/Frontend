import styled from '@emotion/styled';
import { StarFilled } from '@ant-design/icons';
import { Heading, Text } from '@chakra-ui/react';
import { theme } from '../../styles/theme';

interface RoomTitleProps {
  name: string;
  minCapacity: number;
  maxCapacity: number;
  stars: number;
}

function RoomTitle({ name, minCapacity, maxCapacity, stars }: RoomTitleProps) {
  return (
    <StyledRoomTitleWrapper>
      <StyledRoomBadgeStarWrapper>
        <StyledRoomTitleName>
          <Heading as="h2" size="lg">
            {name}
          </Heading>
          <Text as="p" size="sm" color="gray.84">
            최소 인원 : {minCapacity}명 / 최대 인원 : {maxCapacity}명
          </Text>
          <Text as="p" size="sm" color="gray.84">
            객실 정보 2
          </Text>
        </StyledRoomTitleName>
        <StyledRoomStar>
          <StarFilled
            style={{ color: `${theme.colors.blue400}`, fontSize: '0.8rem' }}
          />
          <StyledStarDigit>{stars}</StyledStarDigit>
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
