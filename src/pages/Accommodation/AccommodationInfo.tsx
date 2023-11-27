import styled from '@emotion/styled';
import { Button, useDisclosure } from '@chakra-ui/react';
import AccommodationInfoText from './AccommodationInfoText';
import AccommodationInfoMap from './AccommodationInfoMap';
import AccommodationInfoTag from './AccommodationInfoTag';
import ExplanationModal from './ExplanationModal';

interface AccommodationInfoProps {
  explanation: string;
  cancelInfo: string;
  useGuide: string;
  reservationNotice: string;
  serviceInfo: string[];
  location: string;
}

function AccommodationInfo({
  explanation,
  cancelInfo,
  useGuide,
  reservationNotice,
  serviceInfo,
  location,
}: AccommodationInfoProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <StyledAccommodationInfoWrapper>
      <AccommodationInfoText title="숙소 설명" content={explanation} />
      <AccommodationInfoText title="취소 안내" content={cancelInfo} />
      <AccommodationInfoText title="사용 안내" content={useGuide} />
      <AccommodationInfoText title="예약 안내" content={reservationNotice} />
      <StyledAccommodationInfoMoreBtnWrapper>
        <Button
          variant="blue"
          size="lg"
          style={{ width: '260px', height: '40px' }}
          onClick={onOpen}
        >
          설명 한 눈에 보기
        </Button>
      </StyledAccommodationInfoMoreBtnWrapper>
      <AccommodationInfoMap location={location} />
      <AccommodationInfoTag serviceInfo={serviceInfo} />
      <ExplanationModal
        isOpen={isOpen}
        onClose={onClose}
        explanation={explanation}
        cancelInfo={cancelInfo}
        useGuide={useGuide}
        reservationNotice={reservationNotice}
        serviceInfo={serviceInfo}
      />
    </StyledAccommodationInfoWrapper>
  );
}

export default AccommodationInfo;

const StyledAccommodationInfoWrapper = styled.div`
  width: 100%;
  padding: 1rem;
`;

const StyledAccommodationInfoMoreBtnWrapper = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
