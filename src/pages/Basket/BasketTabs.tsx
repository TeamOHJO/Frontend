import React from 'react';
import styled from '@emotion/styled';
import {
  Tabs, TabList, TabPanels, Tab, TabPanel,
} from '@chakra-ui/react';
import BasketFooter from './BasketFooter';
import BasketDisabledFooter from './BasketDisabledFooter';
import BasketCard from './BasketCard';
import BasketDisabledCard from './BasketDisabledCard';

const BasketTabs = () => {
  return (
    <Tabs variant="solid-rounded" colorScheme="blue" size="md">
      <TabList>
        <Tab>예약 가능 숙소</Tab>
        <Tab>예약 불가능 숙소</Tab>
      </TabList>

      <TabPanels paddingTop={5}>
        <TabPanel p={0}>
          <StyledBasketCardWrapper>
            <BasketCard />
            <BasketCard />
            <BasketCard />
          </StyledBasketCardWrapper>
          <BasketFooter />
        </TabPanel>
        <TabPanel p={0}>
          <StyledBasketCardWrapper>
            <BasketDisabledCard />
            <BasketDisabledCard />
            <BasketDisabledCard />
          </StyledBasketCardWrapper>
          <BasketDisabledFooter />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default BasketTabs;

const StyledBasketCardWrapper = styled.div`
  width: 100%;
  position: relative;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 15px;
`;
