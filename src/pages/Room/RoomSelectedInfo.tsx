import styled from '@emotion/styled';
import { Heading, Text } from '@chakra-ui/react';
import { theme } from '../../styles/theme';

function RoomSelectedInfo() {
  return (
    <StyledRoomSelectedInfoWrapper>
      <StyledRoomSelectedInfoBox>
        <StyledRoomSelectedInfoItem>
          <Heading as="h3" size="lg">
            숙박 기간
          </Heading>
          <Text as="p" size="md" color="gray.84">
            2023년 11월 22일 ~ 11월 23일
          </Text>
        </StyledRoomSelectedInfoItem>
        <StyledRoomSelectedInfoItem>
          <Heading as="h3" size="lg">
            체크인/체크아웃 시간
          </Heading>
          <Text as="p" size="md" color="gray.84">
            PM 15:00 이후/ AM 10:00 이전
          </Text>
        </StyledRoomSelectedInfoItem>
        <StyledRoomSelectedInfoItem>
          <Heading as="h3" size="lg">
            가격
          </Heading>
          <Text as="p" size="md" color="gray.84">
            ￦83,400원/박
          </Text>
        </StyledRoomSelectedInfoItem>
        <StyledRoomSelectedCart className="material-symbols-outlined">
          add_shopping_cart
        </StyledRoomSelectedCart>
      </StyledRoomSelectedInfoBox>
    </StyledRoomSelectedInfoWrapper>
  );
}

export default RoomSelectedInfo;

const StyledRoomSelectedInfoWrapper = styled.div`
  width: 100%;
  padding: 1rem;
`;

const StyledRoomSelectedInfoBox = styled.div`
  width: 100%;
  padding: 1rem;
  border-radius: 15px;
  box-shadow: ${theme.shadows.shadow1.shadow};
  position: relative;
`;

const StyledRoomSelectedInfoItem = styled.div`
  margin-bottom: 1rem;
`;

const StyledRoomSelectedCart = styled.span`
  font-size: 30px;
  color: ${theme.colors.gray300};
  margin-right: 1rem;
  position: absolute;
  bottom: 2rem;
  right: 2rem;

  cursor: pointer;
  &:hover {
    color: ${theme.colors.basic};
  }
`;
