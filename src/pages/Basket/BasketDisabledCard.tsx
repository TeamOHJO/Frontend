import React from 'react';
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
import { theme } from '../../styles/theme';

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
            <CloseOutlined style={{ fontSize: '20px' }} />
          </Box>
          <Heading size="md">일본 도쿄 Nakano City</Heading>
          <Text size="sm">디럭스 패밀리룸</Text>
          <Text as="p" size="xs" color="gray.84">
            12월 26일 - 12월 29일 (3박)
          </Text>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box display="flex" alignItems="center" gap={1}>
              <StarFilled
                style={{ fontSize: '20px', color: `${theme.colors.blue600}` }}
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
            <Text as="p" size="xs" color="gray.84">
              3박 요금 (세금 포함)
            </Text>
          </Flex>
        </Stack>
      </CardBody>
    </Card>
  );
}

export default BasketDisabledCard;
