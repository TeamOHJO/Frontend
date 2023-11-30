import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import styled from '@emotion/styled';
import { v4 as uuid } from 'uuid';
import { Box, Center, Heading, Grid } from '@chakra-ui/react';
import WishListCard from './WishListCard';
import { wishlistDataState } from '../../states/atom';
import { WishlistData } from '../../@types/interface';
import { getWishlist } from '../../api';
import WishListNoLiked from './WishListNoLiked';

function WishList() {
  const [wishlistData, setWishlistData] = useRecoilState(wishlistDataState);

  const fetchWishlistData = async () => {
    try {
      const response = await getWishlist();
      setWishlistData(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchWishlistData();
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
          {wishlistData.length > 0 ? (
            <Grid gridTemplateColumns="repeat(auto-fill, minmax(300px, 1fr))" gap={4} px="1rem">
              {wishlistData.map((item: WishlistData) => (
                <WishListCard key={uuid()} item={item} />
              ))}
            </Grid>
          ) : (
            <WishListNoLiked />
          )}
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
