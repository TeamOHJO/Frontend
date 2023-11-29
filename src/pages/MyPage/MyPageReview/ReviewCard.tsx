import styled from '@emotion/styled';
import { StarFilled } from '@ant-design/icons';
import { Heading, Text, Button, useDisclosure } from '@chakra-ui/react';
import { theme } from '../../../styles/theme';
import DefaultModal from '../../../components/Modal/DefaultModal';

interface ReviewProps {
  review: {
    star: number;
    accommodationCategory: string;
    accommodationName: string;
    roomName: string;
    startDate: string;
    endDate: string;
    reviewContent: string;
  };
}

function ReviewItem({ review }: ReviewProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const modalData = {
    heading: '리뷰 삭제',
    text: '리뷰를 삭제하시겠습니까?',
  };
  const modalFunc = () => {
    console.log('모달 승인 시 실행될 함수 입니다.');
  };
  return (
    <StyledReviewItemWrapper>
      <StyledReviewItemTop>
        <StyledReviewItemTopLeft>
          <div>
            <StarFilled style={{ color: `${theme.colors.blue400}`, fontSize: '0.8rem' }} />
            <StyledStarDigit>{review.star.toFixed(1)}</StyledStarDigit>
          </div>
        </StyledReviewItemTopLeft>
        <Text as="p" size="sm" color="gray.84" style={{ marginRight: '70px' }}>
          {review.startDate}~{review.endDate}
        </Text>
        <StyledButton size="sm" variant="blue" onClick={onOpen}>
          삭제
        </StyledButton>
        <DefaultModal
          isOpen={isOpen}
          onClose={onClose}
          modalFunc={modalFunc}
          modalData={modalData}
        />
      </StyledReviewItemTop>
      <StyledReviewItemTitle>
        <Heading as="h4" size="sm">
          {review.accommodationName}
        </Heading>
        <Text as="p" size="sm" color="gray.84">
          {review.accommodationCategory}
        </Text>
      </StyledReviewItemTitle>
      <StyledReviewItemContent>
        <Text as="p" size="sm" color="basic">
          {review.reviewContent}
        </Text>
      </StyledReviewItemContent>
    </StyledReviewItemWrapper>
  );
}

export default ReviewItem;

const StyledReviewItemWrapper = styled.div`
  height: 200px;

  border-radius: 15px;
  box-shadow: ${theme.shadows.shadow2.shadow};

  margin: 1rem;
  padding: 1rem;

  background-color: ${theme.colors.white};
`;

const StyledReviewItemTop = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledReviewItemTopLeft = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledStarDigit = styled.span`
  margin-left: 0.5rem;
  margin-right: 1rem;
  font-size: 0.8rem;
`;

const StyledReviewItemTitle = styled.div`
  width: 100%;
  margin: 0.5rem 0;
`;

const StyledReviewItemContent = styled.div`
  width: 100%;
`;

const StyledButton = styled(Button)`
  position: absolute;
  width: 50px;
  font-size: 12px;
  height: 30px;
  top: -3px;
  right: 0.5rem;
`;
