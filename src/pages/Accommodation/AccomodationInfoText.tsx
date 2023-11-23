import styled from '@emotion/styled';
import { Heading, Button } from '@chakra-ui/react';

interface InfoProps {
  title: string;
  content: string;
}

function AccommodationInfoText({ title, content }: InfoProps) {
  return (
    <StyledAccommodationInfoTextWrapper>
      <StyledAccommodationInfoTextTitle>
        <Heading as="h4" size="lg">
          {title}
        </Heading>
      </StyledAccommodationInfoTextTitle>
      <StyledAccommodationInfoTextContent>
        {content}
      </StyledAccommodationInfoTextContent>
      <StyledAccommodationInfoTextBtn>
        <Button
          variant="blue"
          size="lg"
          style={{ width: '150px', height: '30px' }}
        >
          전체보기
        </Button>
      </StyledAccommodationInfoTextBtn>
    </StyledAccommodationInfoTextWrapper>
  );
}

export default AccommodationInfoText;

const StyledAccommodationInfoTextWrapper = styled.div`
  width: 100%;
  padding: 1rem;
`;

const StyledAccommodationInfoTextTitle = styled.div`
  width: 100%;
`;

const StyledAccommodationInfoTextContent = styled.div`
  width: 100%;
  padding: 1rem;
  text-align: left;
  line-height: 1.2rem;

  white-space: normal;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const StyledAccommodationInfoTextBtn = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
