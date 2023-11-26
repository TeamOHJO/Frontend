import styled from '@emotion/styled';
import { Button, useDisclosure } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import AccommodationInfoText from './AccommodationInfoText';
import AccommodationInfoMap from './AccommodationInfoMap';
import AccommodationInfoTag from './AccommodationInfoTag';
import ExplanationModal from './ExplanationModal';

interface InfoObject {
  title: string;
  content: string;
}

function AccommodationInfo() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const infoObject: InfoObject = {
    title: '숙소 설명',
    content:
      '안녕 이라는 말을해 짧은 시간을 뒤로 한채로 여전히 아프겠지만 하룻밤 자고 나면 사라지는 꿈처럼 너를, oh, 잊게될까 두려워져 무 꿈처럼 너를, oh, 잊게될까 두려워져 무꿈처럼 너를, oh, 잊게될까 두려워져 무 안녕 이라는 말을해 짧은 시간을 뒤로 한채로 여전히 아프겠지만 하룻밤 자고 나면 사라지는 꿈처럼 너를, oh, 잊게될까 두려워져 무 꿈처럼 너를, oh, 잊게될까 두려워져 무꿈처럼 너를, oh, 잊게될까 두려워져 무',
  };

  const navigate = useNavigate();

  return (
    <StyledAccommodationInfoWrapper>
      <AccommodationInfoText
        title={infoObject.title}
        content={infoObject.content}
      />
      <AccommodationInfoText
        title={infoObject.title}
        content={infoObject.content}
      />
      <AccommodationInfoText
        title={infoObject.title}
        content={infoObject.content}
      />
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
      <AccommodationInfoMap />
      <AccommodationInfoTag />
      <ExplanationModal isOpen={isOpen} onClose={onClose} />
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
