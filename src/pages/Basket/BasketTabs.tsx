import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import styled from '@emotion/styled';
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Button,
} from '@chakra-ui/react';
import BasketFooter from './BasketFooter';
import BasketDisabledFooter from './BasketDisabledFooter';
import BasketCard from './BasketCard';
import { BasketData } from '../../@types/interface';
import BasketDisabledCard from './BasketDisabledCard';
import {
  basketAvailableListState,
  basketCheckedItemsState,
  basketDataState,
  basketUnavailableListState,
  getCheckedIds,
  getUnavailableIds,
} from '../../states/atom';
import { DeleteBasketItem } from '../../api';

function BasketTabs() {
  const [basketData, setBasketData] = useRecoilState(basketDataState);
  const availableList = useRecoilValue(basketAvailableListState);
  const unavailableList = useRecoilValue(basketUnavailableListState);
  const setCheckedItems = useSetRecoilState(basketCheckedItemsState);
  const checkedIds = useRecoilValue(getCheckedIds);
  const unavailableIds = useRecoilValue(getUnavailableIds);

  const deleteAllUnavailable = () => {
    // unavailableIds.forEach((id: number) => DeleteBasketItem(id));
    setBasketData(
      basketData.filter(
        (product: BasketData) => !unavailableIds.includes(product.basketId),
      ),
    );
  };

  const deleteCheckedItems = () => {
    // checkedIds.forEach((checkedId: number) => DeleteBasketItem(checkedId));
    setBasketData(
      basketData.filter(
        (product: BasketData) => !checkedIds.includes(product.basketId),
      ),
    );
    setCheckedItems([]);
  };

  // console.log(basketData);
  // console.log(unavailableList);
  // console.log(availableList);

  return (
    <Tabs variant="solid-rounded" colorScheme="blue" size="md">
      <TabList>
        <Tab>예약 가능 숙소</Tab>
        <Tab>예약 불가능 숙소</Tab>
      </TabList>

      <TabPanels paddingTop={3}>
        <TabPanel p={0}>
          <Box textAlign="right" pb={5}>
            <Button variant="blue" size="mini" onClick={deleteCheckedItems}>
              선택 삭제
            </Button>
          </Box>
          <StyledBasketCardWrapper>
            {availableList.map((item: BasketData) => {
              return <BasketCard key={item.basketId} item={item} />;
            })}
          </StyledBasketCardWrapper>
          <BasketFooter />
        </TabPanel>
        <TabPanel p={0}>
          <Box textAlign="right" pb={5}>
            <Button variant="blue" size="mini" onClick={deleteAllUnavailable}>
              모두 삭제
            </Button>
          </Box>
          <StyledBasketCardWrapper>
            {unavailableList.map((item: BasketData) => {
              return <BasketDisabledCard key={item.basketId} item={item} />;
            })}
          </StyledBasketCardWrapper>
          <BasketDisabledFooter />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default BasketTabs;

const StyledBasketCardWrapper = styled.div`
  width: 100%;
  position: relative;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  gap: 15px;
`;
