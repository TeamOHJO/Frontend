import { Box, Text } from '@chakra-ui/react';
import { ShoppingCartOutlined } from '@ant-design/icons';

function BasketNoProducts({ text }: { text: string }) {
  return (
    <Box
      py="5rem"
      display="flex"
      flexDirection="row"
      alignItems="center"
      justifyContent="center"
      gap="1rem"
    >
      {/* <ShoppingCartOutlined
        style={{
          fontSize: '1rem',
          color: 'RGBA(0, 0, 0, 0.48)',
        }}
      /> */}
      <Text as="p" size="md" color="blackAlpha.600">
        {text}
      </Text>
    </Box>
  );
}

export default BasketNoProducts;
