import { useRecoilState } from 'recoil';
import {
  Card,
  Image,
  Heading,
  Text,
  Box,
  CardBody,
  Stack,
  Checkbox,
  Flex,
  Badge,
} from '@chakra-ui/react';
import { StarFilled } from '@ant-design/icons';
import { theme } from '../../styles/theme';
import { BasketData } from '../../@types/interface';
import { handleBadgeColor } from '../../utils/handleBadgeColor';
import { basketCheckedItemsState } from '../../states/atom';

function BasketCard({ item }: { item: BasketData }) {
  const [checkedItems, setCheckedItems] = useRecoilState(
    basketCheckedItemsState,
  );
  const totalPrice = item.price * item.nights;
  const badgeColor = handleBadgeColor(item.category);

  const handleChange = (value: BasketData) => {
    const isChecked = checkedItems.includes(value);
    if (isChecked) {
      setCheckedItems(
        checkedItems.filter(
          (checkedItem: BasketData) => checkedItem.basketId !== value.basketId,
        ),
      );
    } else {
      setCheckedItems([...checkedItems, value]);
    }
  };

  return (
    <Card size="sm">
      <CardBody display="flex" flexDirection="row" gap={3}>
        <Image
          boxSize="110px"
          objectFit="cover"
          borderRadius={8}
          dropShadow={theme.shadows.shadowTop}
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
              <Badge variant={badgeColor}>{item.category}</Badge>
            </Box>
            <Checkbox
              checked={checkedItems.includes(item)}
              onChange={() => handleChange(item)}
              size="md"
              colorScheme="blue"
              borderColor="gray.300"
            />
          </Box>
          <Heading size="md">{item.accommodationName}</Heading>
          <Text size="sm">{item.name}</Text>
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
                style={{ color: theme.colors.blue400, fontSize: '1rem' }}
              />
              <Text as="span" size="xs">
                {item.stars.toFixed(2)}
              </Text>
            </Box>
          </Box>
          <Flex direction="column" alignItems="flex-end">
            <Text as="p" size="md" fontWeight="bold">
              ￦{totalPrice.toLocaleString()}
            </Text>
            <Text as="p" size="xs" color="blackAlpha.600">
              {item.nights}박 요금 (세금 포함)
            </Text>
          </Flex>
        </Stack>
      </CardBody>
    </Card>
  );
}

export default BasketCard;
