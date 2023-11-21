import styled from '@emotion/styled';
import { theme } from '../../../styles/theme';

interface InfoProps {
  title: string;
  content: string;
}

function AccommodationInfoText({ title, content }: InfoProps) {
  return (
    <AccommodationInfoTextWrapper>
      <AccommodationInfoTextTitle>{title}</AccommodationInfoTextTitle>
      <AccommodationInfoTextContent>{content}</AccommodationInfoTextContent>
      전체보기
    </AccommodationInfoTextWrapper>
  );
}

export default AccommodationInfoText;

const AccommodationInfoTextWrapper = styled.div`
  width: 100%;
  padding: 2rem;
  margin: 1rem 0;
  background-color: ${theme.colors.blue100};
`;

const AccommodationInfoTextTitle = styled.h3`
  width: 100%;
  margin-bottom: 1rem;
  text-align: left;
`;

const AccommodationInfoTextContent = styled.p`
  width: 100%;
  margin-left: 0.5rem;
  text-align: left;
  line-height: 1.2rem;
`;
