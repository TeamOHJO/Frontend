import styled from '@emotion/styled';
import { Text, Button, useDisclosure } from '@chakra-ui/react';
import { theme } from '../../styles/theme';
import DefaultModal from '../../components/Modal/DefaultModal';

interface RoomSelectedInfoProps {
  price: number;
  startDate: string | null;
  endDate: string | null;
  soldOut: boolean;
}

function RoomBottomNavi({
  price,
  startDate,
  endDate,
  soldOut,
}: RoomBottomNaviProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // 예약하기 버튼 모달
  const modalData = {
    heading: '예약하기',
    text: '해당 숙소를 예약하시겠습니까?',
  };

  const modalFunc = () => {
    // 결제 페이지로 이동
    console.log('모달 승인 시 실행될 함수 입니다.');
  };

  const countDay = () => {
    if (startDate && endDate) {
      const diffDate =
        new Date(endDate).getTime() - new Date(startDate).getTime();
      return Math.abs(diffDate / (1000 * 60 * 60 * 24)); // 밀리세컨 * 초 * 분 * 시 = 일
    }
    return 1;
  };

  return (
    <StyledRoomBottomNaviWrapper>
      <StyledRoomBottomNaviLeft>
        <Text as="p" size="sm" color="gray.84">
          ·총액 ￦
          {(Math.floor((price * countDay()) / 1000) * 1000).toLocaleString()}원
        </Text>
      </StyledRoomBottomNaviLeft>
      <StyledRoomBottomNaviRight>
        <DefaultModal
          isOpen={isOpen}
          onClose={onClose}
          modalFunc={modalFunc}
          modalData={modalData}
        />
        <Button
          variant={soldOut ? 'gray' : 'blue'}
          size="lg"
          style={{ width: '100px', height: '40px' }}
          // isReservation 필요
          isDisabled={soldOut}
          onClick={(event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
            event.stopPropagation();
            onOpen();
          }}
        >
          {soldOut ? '예약마감' : '예약하기'}
        </Button>
      </StyledRoomBottomNaviRight>
    </StyledRoomBottomNaviWrapper>
  );
}

export default RoomBottomNavi;

const StyledRoomBottomNaviWrapper = styled.div`
  position: fixed;
  bottom: 0;

  width: 100%;
  max-width: 768px;
  height: 60px;
  background-color: ${theme.colors.white};

  box-shadow: ${theme.shadows.shadowTop.shadow};

  display: flex;
  align-items: center;
  justify-content: space-between;

  z-index: 2;
`;

const StyledRoomBottomNaviLeft = styled.div`
  margin-left: 2rem;
`;

const StyledRoomBottomNaviRight = styled.div`
  margin-right: 2rem;
`;
