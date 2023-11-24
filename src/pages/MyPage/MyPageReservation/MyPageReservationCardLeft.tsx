import { Heading, Text, Box, Badge } from '@chakra-ui/react';

function MyPageReservationCardLeft() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      alignItems="flex-start"
      gap={1}
    >
      <Box textAlign="left">
        <Badge variant="blue">펜션/풀빌라</Badge>
      </Box>
      <Heading size="md">일본 도쿄 Nakano City</Heading>
      <Text size="sm">디럭스 패밀리룸</Text>
      <Text as="p" size="xs" color="blackAlpha.600">
        12월 26일 - 12월 29일 (3박)
      </Text>
    </Box>
  );
}

export default MyPageReservationCardLeft;
