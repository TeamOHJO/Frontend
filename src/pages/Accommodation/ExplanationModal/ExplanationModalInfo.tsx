import styled from '@emotion/styled';
import ExplanationModalInfoText from './ExplanationModalInfoText';
import ExplanationModalInfoTag from './ExplanationModalInfoTag';

interface ExplanationModalInfoProps {
  explanation: string;
  cancelInfo: string;
  useGuide: string;
  reservationNotice: string;
  serviceInfo: string[];
}

function ExplanationModalInfo({
  explanation,
  cancelInfo,
  useGuide,
  reservationNotice,
  serviceInfo,
}: ExplanationModalInfoProps) {
  return (
    <StyledExplanationModalInfoWrapper>
      <ExplanationModalInfoText title="숙소 설명" content={explanation} />
      <ExplanationModalInfoText title="취소 안내" content={cancelInfo} />
      <ExplanationModalInfoText title="사용 안내" content={useGuide} />
      <ExplanationModalInfoText title="예약 안내" content={reservationNotice} />

      <ExplanationModalInfoTag serviceInfo={serviceInfo} />
    </StyledExplanationModalInfoWrapper>
  );
}

export default ExplanationModalInfo;

const StyledExplanationModalInfoWrapper = styled.div`
  width: 100%;
  padding: 1rem;
  margin-bottom: 1rem;
`;
