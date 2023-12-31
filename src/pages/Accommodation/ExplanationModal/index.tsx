import { FunctionComponent } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import styled from '@emotion/styled';
import { ExplanationModalProps } from '../../../@types/interface';
import ExplanationModalInfo from './ExplanationModalInfo';

const ExplanationModal: FunctionComponent<ExplanationModalProps> = ({
  isOpen,
  onClose,
  explanation,
  cancelInfo,
  useGuide,
  reservationNotice,
  serviceInfo,
}) => (
  <Modal isOpen={isOpen} onClose={onClose} isCentered motionPreset="slideInBottom" size="6xl">
    <ModalOverlay background="none" />
    <ModalContent width="80%" border="1px solid" borderColor="#B8B8B8">
      <ModalHeader fontSize="lg">설명 한 눈에 보기</ModalHeader>
      <ModalCloseButton />
      <StyledModalBody>
        <ExplanationModalInfo
          explanation={explanation}
          cancelInfo={cancelInfo}
          useGuide={useGuide}
          reservationNotice={reservationNotice}
          serviceInfo={serviceInfo}
        />
      </StyledModalBody>
      <ModalFooter gap="10px" />
    </ModalContent>
  </Modal>
);
export default ExplanationModal;

const StyledModalBody = styled(ModalBody)`
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
`;
