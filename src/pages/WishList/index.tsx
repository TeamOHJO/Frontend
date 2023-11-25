import styled from '@emotion/styled';
import { Box, Center, Heading, Grid } from '@chakra-ui/react';
import WishListCard from './WishListCard';

function WishList() {
  return (
    <StyledContainer>
      <StyledInnerContainer>
        <Box width="100%" textAlign="center">
          <Center height="90px">
            <Heading as="h1" size="lg">
              위시리스트
            </Heading>
          </Center>
          <Grid
            gridTemplateColumns="repeat(auto-fill, minmax(360px, 1fr))"
            gap={4}
            px="1rem"
          >
            <WishListCard />
            <WishListCard />
            <WishListCard />
          </Grid>
        </Box>
      </StyledInnerContainer>
    </StyledContainer>
  );
}

export default WishList;

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
`;

const StyledInnerContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: calc(100vh - 74px);
`;
