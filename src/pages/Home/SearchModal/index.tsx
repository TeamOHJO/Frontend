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
import { useRecoilState } from 'recoil';
import { searchFilteredState, searchAttempt } from '../../../states/atom';
import { getTomorrow, changeDateFormat } from '../../../utils/utils';
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
  const [endDate, setEndDate] = useState(getTomorrow());
  const [visitors, setVisitors] = useState(2);
  const [searchFilter, setSearchFilter] = useRecoilState(searchFilteredState);
  const [searchingAttempt, setSearchingAttempt] = useRecoilState(searchAttempt);

  const onChangeDate = (dates: any) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    const startTime = changeDateFormat(start);
    const endTime = changeDateFormat(end);
    const newFilter = {
      ...searchFilter,
      startDate: startTime,
      endDate: endTime,
      page: 0,
    };
    setSearchFilter(newFilter);
  };

  const onChangeVisitor = (e: React.ChangeEvent<HTMLInputElement>) => {
    const result = Number(e.target.value);
    setVisitors(result);
    const newFilter = { ...searchFilter, numberOfPeople: result, page: 0 };
    setSearchFilter(newFilter);
  };

  const search = () => {
    setSearchingAttempt(searchingAttempt + 1);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>내가 원하는 숙소 찾기</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <RegionSetter isDomestic={isDomestic} setIsDomestic={setIsDomestic} />
          <Calendar startDate={startDate} endDate={endDate} onChangeDate={onChangeDate} />
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
          <StyledButton colorScheme="blue" onClick={search}>
            검색
          </StyledButton>
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
