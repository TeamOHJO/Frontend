import styled from '@emotion/styled';
import { Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import ExplanationModalInfoText from './ExplanationModalInfoText';
import ExplanationModalInfoTag from './ExplanationModalInfoTag';

interface InfoObject {
  title: string;
  content: string;
}

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
  const infoObject: InfoObject = {
    title: '숙소 설명',
    content:
      '안녕 이라는 말을해 짧은 시간을 뒤로 한채로 여전히 아프겠지만 하룻밤 자고 나면 사라지는 꿈처럼 너를, oh, 잊게될까 두려워져 무 꿈처럼 너를, oh, 잊게될까 두려워져 무꿈처럼 너를, oh, 잊게될까 두려워져 무 안녕 이라는 말을해 짧은 시간을 뒤로 한채로 여전히 아프겠지만 하룻밤 자고 나면 사라지는 꿈처럼 너를, oh, 잊게될까 두려워져 무 꿈처럼 너를, oh, 잊게될까 두려워져 무꿈처럼 너를, oh, 잊게될까 두려워져 무',
  };

  const navigate = useNavigate();

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
