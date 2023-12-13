import styled from '@emotion/styled';
import { StarFilled } from '@ant-design/icons';
import { Heading, Skeleton, SkeletonText, Text } from '@chakra-ui/react';
import { theme } from '../../styles/theme';
import { changeStarFormat } from '../../utils/utils';

interface RoomTitleProps {
  isLoaded: boolean;
  name: string | undefined;
  explanation: string | undefined;
  minCapacity: number | undefined;
  maxCapacity: number | undefined;
  star: number | undefined;
}

function RoomTitle({
  isLoaded,
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
          <SkeletonText isLoaded={isLoaded} noOfLines={3} spacing="3" skeletonHeight="5">
            <Heading as="h2" size="lg">
              {name}
            </Heading>
            <Text as="p" size="sm" color="gray.84">
              최소 인원 : {minCapacity}명 / 최대 인원 : {maxCapacity}명
            </Text>
            <Text as="p" size="sm" color="gray.84">
              {explanation}
            </Text>
          </SkeletonText>
        </StyledRoomTitleName>
        <Skeleton isLoaded={isLoaded} width="50px" height="20px">
          <StyledRoomStar>
            <StarFilled style={{ color: `${theme.colors.blue400}`, fontSize: '0.8rem' }} />
            <StyledStarDigit>{star && changeStarFormat(star)}</StyledStarDigit>
          </StyledRoomStar>
        </Skeleton>
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
