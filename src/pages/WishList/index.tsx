import React from 'react';
import { Box, Heading, Grid } from '@chakra-ui/react';
import WishListCard from './WishListCard';

function WishList() {
  return (
    <Box width="100%" height="90vh" textAlign="center">
      <Box marginY={4}>
        <Heading as="h2" size="lg">
          위시리스트
        </Heading>
      </Box>
      <Grid gridTemplateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap={4}>
        <WishListCard />
        <WishListCard />
        <WishListCard />
      </Grid>
    </Box>
  );
}

export default WishList;
