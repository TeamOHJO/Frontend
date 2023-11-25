import { useState } from 'react';
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
import Calendar from './Calendar';
import VisitorSetter from './VisitorSetter';
import RegionSetter from './RegionSetter';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function SearchModal({ isOpen, onClose }: ModalProps) {
  const [isDomestic, setIsDomestic] = useState(true);
  const [startDate, setStartDate] = useState(new Date());
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const [endDate, setEndDate] = useState(tomorrow);
  const [visitors, setVisitors] = useState(2);

  const onChangeDate = (dates: any) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const onChangeVisitor = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVisitors(Number(e.target.value));
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>내가 원하는 숙소 찾기</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <RegionSetter isDomestic={isDomestic} setIsDomestic={setIsDomestic} />
          <Calendar
            startDate={startDate}
            endDate={endDate}
            onChangeDate={onChangeDate}
          />
          <VisitorSetter
            visitors={visitors}
            setVisitors={setVisitors}
            onChangeVisitor={onChangeVisitor}
          />
        </ModalBody>
        <StyledFooter>
          <StyledButton colorScheme="gray" mr={3} onClick={onClose}>
            취소
          </StyledButton>
          <StyledButton colorScheme="blue">검색</StyledButton>
        </StyledFooter>
      </ModalContent>
    </Modal>
  );
}

export default SearchModal;

const StyledFooter = styled(ModalFooter)`
  display: flex;
  justify-content: center;
`;

const StyledButton = styled(Button)`
  width: 120px;
`;
