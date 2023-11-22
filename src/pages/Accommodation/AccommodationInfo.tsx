import styled from '@emotion/styled';
import { theme } from '../../styles/theme';
import AccommodationInfoText from './AccomodationInfoText';
import AccommodationInfoMap from './AccommodationInfoMap';
import AccommodationInfoTag from './AccommodationInfoTag';

interface InfoObject {
  title: string;
  content: string;
}

function AccommodationInfo() {
  const infoObject: InfoObject = {
    title: '숙소 설명',
    content:
      '안녕 이라는 말을해 짧은 시간을 뒤로 한채로 여전히 아프겠지만 하룻밤 자고 나면 사라지는 꿈처럼 너를, oh, 잊게될까 두려워져 무심히 널 떠올리게 되면 불안해지는 맘 어떻게 해야하니? 안녕 이라는 말을해 짧은 시간을 뒤로 한채로 여전히 아프겠지만 하룻밤 자고 나면 사라지는 꿈처럼 너를, oh, 잊게될까 두려워져 무심히 널 떠올리게 되면 불안해지는 맘 어떻게 해야하니? 안녕 이라는 말을해 짧은 시간을 뒤로 한채로 여전히 아프겠지만 하룻밤 자고 나면 사라지는 꿈처럼 너를, oh, 잊게될까 두려워져 무심히 널 떠올리게 되면 불안해지는 맘 어떻게 해야하니?',
  };
  return (
    <AccommodationInfoWrapper>
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
      <AccommodationInfoMap />
      <AccommodationInfoTag />
    </AccommodationInfoWrapper>
  );
}

export default AccommodationInfo;

const AccommodationInfoWrapper = styled.div`
  width: 100%;

  background-color: ${theme.colors.blue100};
`;
