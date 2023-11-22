import React from 'react';
import {
  Card,
  Image,
  Heading,
  Text,
  Badge,
  Box,
  CardBody,
  Stack,
} from '@chakra-ui/react';
import { EnvironmentOutlined, HeartFilled } from '@ant-design/icons';

function WishListCard() {
  return (
    <Card size="sm">
      <CardBody display="flex" flexDirection="row" gap={3}>
        <Image
          boxSize="110px"
          objectFit="cover"
          borderRadius={8}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD3JBW-cAhYqwYXsEK9AosV69_t1SNqh5RYA&usqp=CAU"
          alt="Accomodation Photo"
        />
        <Stack width="100%">
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Heading size="sm">일본 도쿄 Nakano City</Heading>
            <HeartFilled style={{ fontSize: '20px', color: 'blue.600' }} />
          </Box>
          <Box textAlign="left">
            <Badge variant="blue">펜션/풀빌라</Badge>
          </Box>
          <Box display="flex" alignItems="center" gap={1}>
            <EnvironmentOutlined />
            <Text as="span" size="xs" color="gray.84">
              강원도 강릉시 옥계면 헌화로 455-34
            </Text>
          </Box>
          <Text as="span" size="sm" color="gray.84" textAlign="right">
            ·최소 금액 ￦99,000원
          </Text>
        </Stack>
      </CardBody>
    </Card>
  );
}

export default WishListCard;
