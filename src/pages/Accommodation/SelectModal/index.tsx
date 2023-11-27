import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from '@chakra-ui/react';
import styled from '@emotion/styled';
import 'react-datepicker/dist/react-datepicker.css';
import { useRecoilState } from 'recoil';
import Calendar from './Calendar';
import VisitorSetter from './VisitorSetter';
import {
  accommodationSelectStartDateState,
  accommodationSelectEndDateState,
  accommodationSelectVisitorsState,
} from '../../../states/atom';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function SelectModal({ isOpen, onClose }: ModalProps) {
  const [accommodationSelectStartDate, setAccommodationSelectStartDate] =
    useRecoilState<Date | null>(accommodationSelectStartDateState);

  const [accommodationSelectEndDate, setAccommodationSelectEndDate] =
    useRecoilState<Date | null>(accommodationSelectEndDateState);

  const [accommodationSelectVisitors, setAccommodationSelectVisitors] =
    useRecoilState<number>(accommodationSelectVisitorsState);

  const onChangeDate = (dates: any) => {
    const [start, end] = dates;

    setAccommodationSelectStartDate(start);
    setAccommodationSelectEndDate(end);
  };

  const onChangeVisitor = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAccommodationSelectVisitors(Number(e.target.value));
  };

  // 날짜 하루만 선택 시 예외처리
  const checkNull = () => {
    if (
      accommodationSelectEndDate == null ||
      accommodationSelectStartDate?.getTime() ===
        accommodationSelectEndDate?.getTime()
    ) {
      if (accommodationSelectStartDate) {
        const tomorrow = new Date(accommodationSelectStartDate);
        tomorrow.setDate(tomorrow.getDate() + 1);
        setAccommodationSelectEndDate(tomorrow);
      }
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {
        onClose();
        checkNull();
      }}
      isCentered
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>객실 선택</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Calendar
            startDate={accommodationSelectStartDate}
            endDate={accommodationSelectEndDate}
            onChangeDate={onChangeDate}
          />
          <VisitorSetter
            visitors={accommodationSelectVisitors}
            setVisitors={setAccommodationSelectVisitors}
            onChangeVisitor={onChangeVisitor}
          />
        </ModalBody>
        <StyledFooter>
          <StyledButton colorScheme="gray" mr={3} onClick={onClose}>
            취소
          </StyledButton>
          <StyledButton
            colorScheme="blue"
            onClick={() => {
              checkNull();
              onClose();
            }}
          >
            확인
          </StyledButton>
        </StyledFooter>
      </ModalContent>
    </Modal>
  );
}

export default SelectModal;

const StyledFooter = styled(ModalFooter)`
  display: flex;
  justify-content: center;
`;

const StyledButton = styled(Button)`
  width: 120px;
`;
