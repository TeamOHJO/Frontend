import { useState, useEffect, useRef } from 'react';
import { Box, Button, Text } from '@chakra-ui/react';
import { Review } from '../../@types/interface';

// TODO 숙소명, 카테고리 종류, 리뷰 내역 GET!!
const ReviewCardBody = ({ reviewData }: { reviewData: Review }) => {
  if (!reviewData) {
    return null;
  }
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
        setIsButtonVisible(textElement.scrollHeight > textElement.offsetHeight);
      }
    };

    calculateButtonVisibility();

    window.addEventListener('resize', calculateButtonVisibility);

    return () => {
      window.removeEventListener('resize', calculateButtonVisibility);
    };
  }, []);

  return (
    <div key={reviewData.reviewId}>
      <Box display="flex" flexDir="column" ml="1rem" gap="2">
        <Text fontWeight="regular" fontSize="md">
          {reviewData.accommodationName}
        </Text>
        <Text color="gray.84">{reviewData.category}</Text>
        <Box position="relative">
          <Text
            ref={textRef}
            mt=".5rem"
            pr="4"
            noOfLines={isExpandedText ? undefined : 3}
            fontSize="sm"
            fontWeight="medium"
            onLoad={handleTextLoad}
            style={{
              maxHeight: isExpandedText ? 'none' : '85px',
              overflow: 'hidden',
            }}
          >
            {reviewData.reviewContent}
          </Text>
          {isButtonVisible && (
            <Box mt=".5rem" textAlign="center">
              <Button size="sm" color="gray.500" onClick={handleToggleExpand} variant="gray">
                {isExpandedText ? '리뷰 감추기' : '리뷰 상세 내용 더보기'}
              </Button>
            </Box>
          )}
        </Box>
      </Box>
    </div>
  );
};

export default ReviewCardBody;
