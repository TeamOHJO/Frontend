import { Box, Text } from '@chakra-ui/react';

function BasketNoProducts({ text }: { text: string }) {
  return (
    <Box py="5rem" textAlign="center">
      <Text as="p" size="md" color="blackAlpha.600">
        {text}
      </Text>
    </Box>
  );
}

export default BasketNoProducts;
