import styled from '@emotion/styled';
import { Button, useDisclosure, Skeleton } from '@chakra-ui/react';
import AccommodationInfoText from './AccommodationInfoText';
import AccommodationInfoMap from './AccommodationInfoMap';
import AccommodationInfoTag from './AccommodationInfoTag';
import ExplanationModal from '../ExplanationModal';

interface AccommodationInfoProps {
  isLoaded: boolean;
  explanation: string | undefined;
  cancelInfo: string | undefined;
  useGuide: string | undefined;
  reservationNotice: string | undefined;
  serviceInfo: string[] | undefined;
  location: string | undefined;
}

function AccommodationInfo({
  isLoaded,
  explanation = '',
  cancelInfo = '',
  useGuide = '',
  reservationNotice = '',
  serviceInfo = ['', '', '', '', '', '', '', '', '', ''],
  location = '',
}: AccommodationInfoProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <StyledAccommodationInfoWrapper>
      <AccommodationInfoText title="숙소 설명" isLoaded={isLoaded} content={explanation} />
      <AccommodationInfoText title="취소 안내" isLoaded={isLoaded} content={cancelInfo} />
      <AccommodationInfoText title="사용 안내" isLoaded={isLoaded} content={useGuide} />
      <AccommodationInfoText title="예약 안내" isLoaded={isLoaded} content={reservationNotice} />
      <StyledAccommodationInfoMoreBtnWrapper>
        <Skeleton isLoaded={isLoaded}>
          <Button
            variant="blue"
            size="lg"
            style={{ width: '260px', height: '40px' }}
            onClick={onOpen}
          >
            설명 한 눈에 보기
          </Button>
        </Skeleton>
      </StyledAccommodationInfoMoreBtnWrapper>
      <AccommodationInfoMap isLoaded={isLoaded} location={location} />
      <AccommodationInfoTag isLoaded={isLoaded} serviceInfo={serviceInfo} />
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
