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

function BasketDisabledCard() {
  return (
    <Card size="sm">
      <CardBody display="flex" flexDirection="row" gap={3}>
        <Image
          boxSize="110px"
          objectFit="cover"
          borderRadius={8}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD3JBW-cAhYqwYXsEK9AosV69_t1SNqh5RYA&usqp=CAU"
          alt="Accommodation Photo"
        />
        <Stack textAlign="left" width="100%" direction="column" gap={0.5}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box textAlign="left">
              <Badge variant="disabled">펜션/풀빌라</Badge>
            </Box>
            <CloseOutlined style={{ fontSize: '20px', cursor: 'pointer' }} />
          </Box>
          <Heading size="md" color="blackAlpha.600">
            일본 도쿄 Nakano City
          </Heading>
          <Text size="sm" color="blackAlpha.600">
            디럭스 패밀리룸
          </Text>
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
                style={{
                  fontSize: '1rem',
                  color: 'RGBA(0, 0, 0, 0.48)',
                }}
              />
              <Text as="span" size="xs" color="blackAlpha.600">
                4.90
              </Text>
            </Box>
          </Box>
          <Flex direction="column" alignItems="flex-end">
            <Text as="s" size="md" fontWeight="bold" color="blackAlpha.600">
              ￦435,400
            </Text>
            <Text as="p" fontWeight="bold" size="xs">
              예약 마감
            </Text>
          </Flex>
        </Stack>
      </CardBody>
    </Card>
  );
}

export default BasketDisabledCard;
