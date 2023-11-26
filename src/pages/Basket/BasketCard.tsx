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

function BasketCard({
  item,
  setAvailableList,
}: {
  item: BasketData;
  setAvailableList: (list: BasketData[]) => void;
}) {
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
              <Badge variant="blue">펜션/풀빌라</Badge>
            </Box>
            <Checkbox size="md" colorScheme="blue" borderColor="gray.300" />
          </Box>
          <Heading size="md">일본 도쿄 Nakano City</Heading>
          <Text size="sm">디럭스 패밀리룸</Text>
          <Text as="p" size="xs" color="blackAlpha.600">
            12월 26일 - 12월 29일 (3박)
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
                4.90
              </Text>
            </Box>
          </Box>
          <Flex direction="column" alignItems="flex-end">
            <Text as="p" size="md" fontWeight="bold">
              ￦435,400
            </Text>
            <Text as="p" size="xs" color="blackAlpha.600">
              3박 요금 (세금 포함)
            </Text>
          </Flex>
        </Stack>
      </CardBody>
    </Card>
  );
}

export default BasketCard;
