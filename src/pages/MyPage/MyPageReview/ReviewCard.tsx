import styled from '@emotion/styled';
import { StarFilled } from '@ant-design/icons';
import { Heading, Text, Checkbox } from '@chakra-ui/react';
import { useRecoilState } from 'recoil';
import { useState } from 'react';
import { theme } from '../../../styles/theme';
import { myReviewCheckedItemsState } from '../../../states/atom';

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
  const [checkedItems, setCheckedItems] = useRecoilState(myReviewCheckedItemsState);
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleCheckedItems = () => {
    if (isChecked) {
      console.log('check');
      setIsChecked(!isChecked);
    } else {
      console.log('notCheck');
      setIsChecked(!isChecked);
    }
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
        <Text as="p" size="sm" color="gray.84" style={{ marginRight: '2rem' }}>
          {review.startDate}~{review.endDate}
        </Text>
        <StyledCheckbox
          checked={isChecked}
          onChange={() => {
            handleCheckedItems();
          }}
          size="md"
          colorScheme="blue"
          borderColor="gray.300"
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

const StyledCheckbox = styled(Checkbox)`
  position: absolute;
  top: 3px;
  right: 0.5rem;
`;
