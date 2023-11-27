import { Box, Divider, Text } from '@chakra-ui/react';

const ReservationProdPrice = () => {
  const calculateTotalPrice = (
    productPrice: number,
    discountAmount: number,
  ) => {
    return productPrice - discountAmount;
  };

  const productPrice = 234000;
  const discountAmount = 10000;

  const totalPrice = calculateTotalPrice(productPrice, discountAmount);

  return (
    <Box ml="2rem" display="flex" flexDir="column" width="80%" m="0 auto">
      <Box display="flex" justifyContent="space-between" mt="1rem">
        <Text fontSize="1rem" fontWeight="bold" color="gray.500">
          상품 금액
        </Text>
        <Text fontSize="1rem" fontWeight="bold">
          {productPrice.toLocaleString()}
          <span style={{ marginLeft: '3px' }}>원</span>
        </Text>
      </Box>
      <Box display="flex" justifyContent="space-between" mt="1rem">
        <Text fontSize="1rem" fontWeight="bold" color="gray.500">
          할인 금액
        </Text>
        <Text fontSize="1rem" fontWeight="bold">
          {discountAmount.toLocaleString()}
          <span style={{ marginLeft: '3px' }}>원</span>
        </Text>
      </Box>
      <Divider borderColor="gray.300" mt="2rem" />
      <Box display="flex" justifyContent="space-between" mt="1rem">
        <Text fontSize="1rem" fontWeight="bold" color="gray.500">
          총 금액
        </Text>
        <Text fontSize="1rem" fontWeight="bold">
          {totalPrice.toLocaleString()}
          <span style={{ marginLeft: '3px' }}>원</span>
        </Text>
      </Box>
    </Box>
  );
};

export default ReservationProdPrice;
