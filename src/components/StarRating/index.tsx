import styled from '@emotion/styled';
import { StarFilled } from '@ant-design/icons';
import { Text } from '@chakra-ui/react';
import { theme } from '../../styles/theme';

interface RatingSectionProps {
  rating: number;
  setRating: (value: number) => void;
}

function StarRating({ rating, setRating }: RatingSectionProps) {
  const Array = [1, 2, 3, 4, 5];
  const ratingText = handleRatingText(rating);

  function handleRatingText(value: number) {
    switch (value) {
      case 1:
        return '별로에요';
      case 2:
        return '그냥 그래요';
      case 3:
        return '보통이에요';
      case 4:
        return '맘에 들어요';
      default:
        return '아주 좋아요';
    }
  }

  return (
    <RatingContainer>
      {Array.map((arrayIndex: number) => (
        <RatingStar
          size={35}
          key={arrayIndex}
          value={rating}
          className={arrayIndex <= rating ? 'active' : 'inactive'}
          onClick={() => {
            setRating(arrayIndex);
          }}
        />
      ))}
      <StyledText as="p">{ratingText}</StyledText>
    </RatingContainer>
  );
}

export default StarRating;

const RatingContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 13px 0px;
  .inactive {
    color: ${theme.colors.gray300};
  }
  .active {
    color: ${theme.colors.blue400};
  }
`;

const RatingStar = styled(StarFilled)`
  font-size: 2rem;
  cursor: pointer;
`;

const StyledText = styled(Text)`
  font-size: 1.2rem;
  margin-left: 10px;
`;
