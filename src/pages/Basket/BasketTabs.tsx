import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
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
import BasketDisabledCard from './BasketDisabledCard';
import { BasketData } from '../../@types/interface';
import {
  basketAvailableListState,
  basketDataState,
  basketUnavailableListState,
} from '../../states/atom';

function BasketTabs() {
  const [basketData, setBasketData] = useRecoilState(basketDataState);
  const [availableList, setAvailableList] = useRecoilState(
    basketAvailableListState,
  );
  const [unavailableList, setUnavailableList] = useRecoilState(
    basketUnavailableListState,
  );

  const fetchData = async () => {
    try {
      const response = await fetch(
        'http://localhost:5173/data/BasketData.json',
        {
          method: 'GET',
        },
      );
      const data = await response.json();
      setBasketData(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setAvailableList(
      basketData.filter((item: BasketData) => item.canReserve === true),
    );
    setUnavailableList(
      basketData.filter((item: BasketData) => item.canReserve === false),
    );
  }, [basketData, setBasketData]);

  return (
    <Tabs variant="solid-rounded" colorScheme="blue" size="md">
      <TabList>
        <Tab>예약 가능 숙소</Tab>
        <Tab>예약 불가능 숙소</Tab>
      </TabList>

      <TabPanels paddingTop={3}>
        <TabPanel p={0}>
          <Box textAlign="right" pb={5}>
            <Button variant="blue" size="mini">
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
            <Button variant="blue" size="mini">
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
