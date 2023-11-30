import { Box, Text } from '@chakra-ui/react';

function WishListNoLiked() {
  return (
    <Box py="5rem" textAlign="center">
      <Text as="p" size="md" color="blackAlpha.600">
        위시리스트에 담긴 상품이 없습니다.
      </Text>
    </Box>
  );
}

export default WishListNoLiked;
