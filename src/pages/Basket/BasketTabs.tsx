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

function BasketTabs() {
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
            <BasketCard />
            <BasketCard />
            <BasketCard />
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
            <BasketDisabledCard />
            <BasketDisabledCard />
            <BasketDisabledCard />
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
