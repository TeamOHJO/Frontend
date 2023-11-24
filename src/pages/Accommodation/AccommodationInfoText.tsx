import styled from '@emotion/styled';
import { Heading, Button, Text } from '@chakra-ui/react';
import { useState, useEffect, useRef } from 'react';

interface InfoProps {
  title: string;
  content: string;
}

function AccommodationInfoText({ title, content }: InfoProps) {
  const [isExpandedText, setIsExpandedText] = useState<boolean>(false);
  const [isButtonVisible, setIsButtonVisible] = useState<boolean>(true);
  const textRef = useRef(null);

  const handleTextLoad = () => {
    if (textRef.current) {
      const textElement = textRef.current as HTMLElement;
      setIsButtonVisible(textElement.scrollHeight > textElement.offsetHeight);
    }
  };

  const handleToggleExpand = () => {
    setIsExpandedText(!isExpandedText);
  };

  useEffect(() => {
    const calculateButtonVisibility = () => {
      if (textRef.current) {
        const textElement = textRef.current as HTMLElement;
        // scrollHeight가 offsetHeight보다 클 경우, 표시되지 않은 컨텐츠 존재--> 버튼 표시
        setIsButtonVisible(textElement.scrollHeight > textElement.offsetHeight);
      }
    };

    // 초기 가시성 --> 텍스트 요소의 높이에 따라 조절 예정
    calculateButtonVisibility();

    // resize 될 때마다 버튼 텍스트 계산 후 조정.
    window.addEventListener('resize', calculateButtonVisibility);

    return () => {
      window.removeEventListener('resize', calculateButtonVisibility);
    };
  }, []);

  return (
    <StyledAccommodationInfoTextWrapper>
      <StyledAccommodationInfoTextTitle>
        <Heading as="h4" size="lg">
          {title}
        </Heading>
      </StyledAccommodationInfoTextTitle>

      <Text
        ref={textRef}
        mt=".5rem"
        pr="4"
        noOfLines={isExpandedText ? undefined : 4}
        fontSize="sm"
        fontWeight="medium"
        onLoad={handleTextLoad}
        style={{
          maxHeight: isExpandedText ? 'none' : '85px',
          overflow: 'hidden',
          marginBottom: '1rem',
        }}
      >
        {content}
      </Text>
      {isButtonVisible && (
        <StyledAccommodationInfoTextBtn>
          <Button
            onClick={handleToggleExpand}
            size="sm"
            color="gray.500"
            variant="gray"
            style={{ width: '150px', height: '30px' }}
          >
            {isExpandedText ? '감추기' : '전체보기'}
          </Button>
        </StyledAccommodationInfoTextBtn>
      )}
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

const StyledAccommodationInfoTextBtn = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
