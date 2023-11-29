import { Box, CardHeader, Text } from '@chakra-ui/react';
import { StarFilled } from '@ant-design/icons';
import { theme } from '../../styles/theme';
import { Review } from '../../@types/interface';

// TODO 별점과 날짜 받아와서 GET !!!
const ReviewCardHeader = ({ reviewData }: { reviewData: Review }) => {
  if (!reviewData) {
    return null;
  }
  return (
    <div key={reviewData.reviewId}>
      <CardHeader display="flex" justifyContent="space-between">
        <Box display="flex">
          <StarFilled style={{ color: theme.colors.blue400, fontSize: '1rem' }} />
          <Text color="black" ml=".8rem">
            {reviewData.star}
          </Text>
        </Box>
        <Box>
          <Text color="gray.84">{reviewData.updatedAt.split('T')[0]}~</Text>
        </Box>
      </CardHeader>
    </div>
  );
};

export default ReviewCardHeader;
