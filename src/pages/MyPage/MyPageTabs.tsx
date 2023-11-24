import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import MyPageReservation from './MyPageReservation';
import MyPageReview from './MyPageReview';
import MyPageInfo from './MyPageInfo';

function MyPageTabs() {
  return (
    <Tabs isFitted size="md" variant="enclosed">
      <TabList mb="1em">
        <Tab>예약 내역</Tab>
        <Tab>내 리뷰</Tab>
        <Tab>내 정보 관리</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <MyPageReservation />
        </TabPanel>
        <TabPanel>
          <MyPageReview />
        </TabPanel>
        <TabPanel>
          <MyPageInfo />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default MyPageTabs;
