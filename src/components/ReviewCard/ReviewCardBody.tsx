import { useState, useEffect, useRef } from 'react';
import { Box, Button, Text } from '@chakra-ui/react';

// TODO 숙소명, 카테고리 종류, 리뷰 내역 GET!!
const ReviewCardBody = () => {
  const [isExpandedText, setIsExpandedText] = useState<boolean>(false);
  const [isButtonVisible, setIsButtonVisible] = useState<boolean>(false);
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
    <Box display="flex" flexDir="column" ml="1rem" gap="2">
      <Text fontWeight="regular" fontSize="md">
        일본 도쿄 Nakano City
      </Text>
      <Text color="gray.84">카테고리</Text>
      <Box position="relative">
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
          }}
        >
          위치도 나카노역이라 신주쿠가 강남이라면 숙소는 서초교대 정도 느낌이라
          접근성도 좋은데 주변이 진짜 완전 조용하고 아따맘마재질이라 좋음.
          숙소는 2인이상은 좀 힘들거같고 깨끗함. 마지막에 다른 게스트때문에
          문제가 생길뻔했지만 11-12시임에도 바로바로 답장해주고 문제해결해주심.
          이정도 가격에 이 숙소면 매우 좋음
        </Text>
        {isButtonVisible && (
          <Box mt=".5rem" textAlign="center">
            <Button
              size="sm"
              color="gray.500"
              onClick={handleToggleExpand}
              variant="gray"
            >
              {isExpandedText ? '리뷰 감추기' : '리뷰 상세 내용 더보기'}
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default ReviewCardBody;
