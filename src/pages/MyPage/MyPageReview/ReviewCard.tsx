import styled from '@emotion/styled';
import { StarFilled } from '@ant-design/icons';
import { Heading, Text, Button, useDisclosure } from '@chakra-ui/react';
import { theme } from '../../../styles/theme';
import DefaultModal from '../../../components/Modal/DefaultModal';
import { getCookie } from '../../../utils/utils';

interface ReviewProps {
  review: {
    star: number;
    accommodationCategory: string;
    accommodationName: string;
    roomName: string;
    startDate: string;
    endDate: string;
    reviewContent: string;
    reviewId: number;
  };
  fetchData: () => Promise<void>;
  openFunction: () => void;
}

function ReviewItem({ review, fetchData, openFunction }: ReviewProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const accessToken = getCookie('token');

  const deleteReview = async () => {
    try {
      await fetch(`https://yanoljaschool.site:8080/review/${review.reviewId}`, {
        method: 'DELETE',
        headers: {
          'content-type': import.meta.env.VITE_CONTENT_TYPE,
          Authorization: `Bearer ${accessToken}`,
        },
      });
      await fetchData();
    } catch (error) {
      console.log(error);
    }
  };
  const modalData = {
    heading: '리뷰 삭제',
    text: '리뷰를 삭제하시겠습니까?',
  };
  const modalFunc = () => {
    deleteReview();
    openFunction();
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
