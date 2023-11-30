import { Box, Divider, Text } from '@chakra-ui/react';
import { useSearchParams } from 'react-router-dom';
import { calculateDaysDifference, calculateDiscountedPrice } from '../../utils/utils';

const ReservationProdPrice = () => {
  const [searchParams] = useSearchParams();
  const startDate = String(searchParams.get('startDate'));
  const endDate = String(searchParams.get('endDate'));
  const price = Number(searchParams.get('price'));
  const discountPercentage = Number(searchParams.get('discountPercentage'));

  // 박수 계산
  const nights = calculateDaysDifference(startDate, endDate);
  const totalPrice = calculateDiscountedPrice(price, discountPercentage);
  const productPrice = price * nights;
  const discountedPrice = productPrice - totalPrice;

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
          {discountedPrice.toLocaleString()}
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
