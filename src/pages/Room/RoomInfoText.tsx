import styled from '@emotion/styled';
import { Heading, Button } from '@chakra-ui/react';
import { useState } from 'react';

interface InfoProps {
  title: string;
  content: string;
}

function RoomInfoText({ title, content }: InfoProps) {
  const [isMore, setIsMore] = useState<boolean>(false);

  function handleIsMoreBtn(): void {
    setIsMore(true);
  }

  return (
    <StyledRoomInfoTextWrapper>
      <StyledRoomInfoTextTitle>
        <Heading as="h4" size="lg">
          {title}
        </Heading>
      </StyledRoomInfoTextTitle>
      {isMore ? (
        <StyledRoomInfoTextContentIsMore>
          {content}
        </StyledRoomInfoTextContentIsMore>
      ) : (
        <>
          <StyledRoomInfoTextContent>{content}</StyledRoomInfoTextContent>
          <StyledRoomInfoTextBtn>
            <Button
              onClick={() => handleIsMoreBtn()}
              variant="blue"
              size="lg"
              style={{ width: '150px', height: '30px' }}
            >
              전체보기
            </Button>
          </StyledRoomInfoTextBtn>
        </>
      )}
    </StyledRoomInfoTextWrapper>
  );
}

export default RoomInfoText;

const StyledRoomInfoTextWrapper = styled.div`
  width: 100%;
  padding: 1rem;
`;

const StyledRoomInfoTextTitle = styled.div`
  width: 100%;
`;

const StyledRoomInfoTextContent = styled.div`
  width: 100%;
  height: 90px;
  padding: 1rem;
  text-align: left;
  line-height: 1.2rem;

  display: -webkit-box;
  word-wrap: break-word;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const StyledRoomInfoTextContentIsMore = styled.div`
  width: 100%;

  padding: 1rem;
  padding-bottom: 1.5rem;
  text-align: left;
`;

const StyledRoomInfoTextBtn = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
