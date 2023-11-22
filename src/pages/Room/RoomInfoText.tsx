import styled from '@emotion/styled';
import { theme } from '../../styles/theme';

interface InfoProps {
  title: string;
  content: string;
}

function RoomInfoText({ title, content }: InfoProps) {
  return (
    <RoomInfoTextWrapper>
      <RoomInfoTextTitle>{title}</RoomInfoTextTitle>
      <RoomInfoTextContent>{content}</RoomInfoTextContent>
      전체보기
    </RoomInfoTextWrapper>
  );
}

export default RoomInfoText;

const RoomInfoTextWrapper = styled.div`
  width: 100%;
  padding: 2rem;
  margin: 1rem 0;
  background-color: ${theme.colors.blue100};
`;

const RoomInfoTextTitle = styled.h3`
  width: 100%;
  margin-bottom: 1rem;
  text-align: left;
`;

const RoomInfoTextContent = styled.p`
  width: 100%;
  margin-left: 0.5rem;
  text-align: left;
  line-height: 1.2rem;
`;
