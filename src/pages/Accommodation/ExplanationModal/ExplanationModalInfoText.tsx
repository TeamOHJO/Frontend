import styled from '@emotion/styled';
import { Heading, Text } from '@chakra-ui/react';

interface InfoProps {
  title: string;
  content: string;
}

function ExplanationModalInfoText({ title, content }: InfoProps) {
  return (
    <StyledExplanationModalInfoTextWrapper>
      <StyledExplanationModalInfoTextTitle>
        <Heading as="h4" size="lg">
          {title}
        </Heading>
      </StyledExplanationModalInfoTextTitle>

      <Text
        mt=".5rem"
        pr="4"
        fontSize="sm"
        fontWeight="medium"
        style={{
          marginBottom: '1rem',
          padding: '0 1rem',
          whiteSpace: 'pre-line',
        }}
      >
        {content}
      </Text>
    </StyledExplanationModalInfoTextWrapper>
  );
}

export default ExplanationModalInfoText;

const StyledExplanationModalInfoTextWrapper = styled.div`
  width: 100%;
  padding: 1rem;
`;

const StyledExplanationModalInfoTextTitle = styled.div`
  width: 100%;
`;
