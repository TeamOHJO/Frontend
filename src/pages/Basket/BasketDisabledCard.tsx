import { useRecoilState } from 'recoil';
import {
  Card,
  Image,
  Heading,
  Text,
  Box,
  CardBody,
  Stack,
  Flex,
  Badge,
} from '@chakra-ui/react';
import { StarFilled, CloseOutlined } from '@ant-design/icons';
import { BasketData } from '../../@types/interface';
import { basketDataState } from '../../states/atom';

function BasketDisabledCard({ item }: { item: BasketData }) {
  const [basketData, setBasketData] = useRecoilState(basketDataState);

  const totalPrice = item.price * item.nights;

  const deleteSingleItem = async (id: number) => {
    // await DeleteBasketItem(id);
    setBasketData(
      basketData.filter((product: BasketData) => product.basketId !== id),
    );
  };

  return (
    <Card size="sm">
      <CardBody display="flex" flexDirection="row" gap={3}>
        <Image
          boxSize="110px"
          objectFit="cover"
          borderRadius={8}
          src={item.image}
          alt="Accommodation Photo"
        />
        <Stack textAlign="left" width="100%" direction="column" gap={0.5}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box textAlign="left">
              <Badge variant="disabled">{item.category}</Badge>
            </Box>
            <CloseOutlined
              onClick={() => deleteSingleItem(item.basketId)}
              style={{ fontSize: '20px', cursor: 'pointer' }}
            />
          </Box>
          <Heading size="md" color="blackAlpha.600">
            {item.accommodationName}
          </Heading>
          <Text size="sm" color="blackAlpha.600">
            {item.name}
          </Text>
          <Text as="p" size="xs" color="blackAlpha.600">
            {item.startDate} - {item.endDate} ({item.nights}박)
          </Text>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box display="flex" alignItems="center" gap={1}>
              <StarFilled
                style={{
                  fontSize: '1rem',
                  color: 'RGBA(0, 0, 0, 0.48)',
                }}
              />
              <Text as="span" size="xs" color="blackAlpha.600">
                {item.stars.toFixed(2)}
              </Text>
            </Box>
          </Box>
          <Flex direction="column" alignItems="flex-end">
            <Text as="s" size="md" fontWeight="bold" color="blackAlpha.600">
              ￦{totalPrice.toLocaleString()}
            </Text>
            <Text as="p" fontWeight="bold" size="xs" color="red.500">
              예약 마감
            </Text>
          </Flex>
        </Stack>
      </CardBody>
    </Card>
  );
}

export default BasketDisabledCard;
