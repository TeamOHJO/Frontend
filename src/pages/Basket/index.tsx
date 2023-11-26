import { useEffect } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import styled from '@emotion/styled';
import { Heading } from '@chakra-ui/react';
import BasketTabs from './BasketTabs';
import BasketHeader from './BasketHeader';
import {
  basketAvailableListState,
  basketCheckedItemsState,
  basketDataState,
  basketUnavailableListState,
} from '../../states/atom';
import { BasketData } from '../../@types/interface';
import { getBasket } from '../../api';

function Basket() {
  const [basketData, setBasketData] = useRecoilState(basketDataState);
  const setBasketCheckedItems = useSetRecoilState(basketCheckedItemsState);
  const setAvailableList = useSetRecoilState(basketAvailableListState);
  const setUnavailableList = useSetRecoilState(basketUnavailableListState);

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch(
  //       'http://localhost:5173/data/BasketData.json',
  //       {
  //         method: 'GET',
  //       },
  //     );
  //     const data = await response.json();
  //     setBasketData(data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  //   setBasketCheckedItems([]);
  // }, []);

  // useEffect(() => {
  //   setAvailableList(
  //     basketData.filter((item: BasketData) => item.canReserve === true),
  //   );
  //   setUnavailableList(
  //     basketData.filter((item: BasketData) => item.canReserve === false),
  //   );
  // }, [basketData, setBasketData]);

  return (
    <StyledContainer>
      <StyledBasketWrapper>
        <BasketHeader />
        {basketData.length > 0 ? (
          <StyledBasketContent>
            <BasketTabs />
          </StyledBasketContent>
        ) : (
          <Heading as="h1">장바구니에 담긴 상품이 없습니다.</Heading>
        )}
      </StyledBasketWrapper>
    </StyledContainer>
  );
}

export default Basket;

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
`;

const StyledBasketWrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 250px);
  margin-top: 60px; //상하단 nav바 높이 제외 목적
  margin-bottom: 80px;
`;

const StyledBasketContent = styled.div`
  padding: 1rem;
`;
