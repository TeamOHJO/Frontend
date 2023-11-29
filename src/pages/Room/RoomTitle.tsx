import styled from '@emotion/styled';
import { StarFilled } from '@ant-design/icons';
import { Heading, Text } from '@chakra-ui/react';
import { theme } from '../../styles/theme';
import { changeStarFormat } from '../../utils/utils';

interface RoomTitleProps {
  name: string;
  explanation: string;
  minCapacity: number;
  maxCapacity: number;
  star: number;
}

function RoomTitle({
  name,
  explanation,
  minCapacity,
  maxCapacity,
  star,
}: RoomTitleProps) {
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
            {explanation}
          </Text>
        </StyledRoomTitleName>
        <StyledRoomStar>
          <StarFilled
            style={{ color: `${theme.colors.blue400}`, fontSize: '0.8rem' }}
          />
          <StyledStarDigit>{changeStarFormat(star)}</StyledStarDigit>
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
