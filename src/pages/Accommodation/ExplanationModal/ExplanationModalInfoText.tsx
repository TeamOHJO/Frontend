import styled from '@emotion/styled';
import { Heading, Button, Text } from '@chakra-ui/react';

interface InfoProps {
  title: string;
  content: string;
}

function ExplanationModalInfoText({ title, content }: InfoProps) {
  return (
    <StyledAccommodationInfoTextWrapper>
      <StyledAccommodationInfoTextTitle>
        <Heading as="h4" size="lg">
          {title}
        </Heading>
      </StyledAccommodationInfoTextTitle>

      <Text
        mt=".5rem"
        pr="4"
        fontSize="sm"
        fontWeight="medium"
        style={{
          marginBottom: '1rem',
          padding: '0 1rem',
        }}
      >
        {content}
      </Text>
    </StyledAccommodationInfoTextWrapper>
  );
}

export default ExplanationModalInfoText;

const StyledAccommodationInfoTextWrapper = styled.div`
  width: 100%;
  padding: 1rem;
`;

const StyledAccommodationInfoTextTitle = styled.div`
  width: 100%;
`;
