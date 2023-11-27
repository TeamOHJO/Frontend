import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import styled from '@emotion/styled';
import { Box, Center, Heading, Grid } from '@chakra-ui/react';
import WishListCard from './WishListCard';
import { wishlistDataState } from '../../states/atom';
import { WishlistData } from '../../@types/interface';

function WishList() {
  const [wishlistData, setWishlistData] = useRecoilState(wishlistDataState);
  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5173/data/wishlist.json', {
        method: 'GET',
      });
      const data = await response.json();
      setWishlistData(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
            {wishlistData.map((item: WishlistData) => (
              <WishListCard key={item.accommodationId} item={item} />
            ))}
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
