import styled from '@emotion/styled';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import MyPageReservationUpcoming from './MyPageReservationUpcoming';
import MyPageReservationCompleted from './MyPageReservationCompleted';
import MyPageReservationCancelled from './MyPageReservationCancelled';
import { MyPageReservationData } from '../../../@types/interface';
import { theme } from '../../../styles/theme';
import MyPageReservationNoHistory from './MyPageReservationNoHistory.tsx';

interface MyPageReservationTabsProps {
  upcomingList: MyPageReservationData[];
  completedList: MyPageReservationData[];
  cancelledList: MyPageReservationData[];
}

function MyPageReservationTabs({
  upcomingList,
  completedList,
  cancelledList,
}: MyPageReservationTabsProps) {
  return (
    <Tabs isFitted variant="soft-rounded" colorScheme="blue" size="md" align="center">
      <StyledTabList>
        <Tab>이용 예정</Tab>
        <Tab>이용 완료</Tab>
        <Tab>취소됨</Tab>
      </StyledTabList>
      <TabPanels>
        <TabPanel>
          {upcomingList.length > 0 ? (
            <MyPageReservationUpcoming upcomingList={upcomingList} />
          ) : (
            <MyPageReservationNoHistory text="예약 내역이 없습니다." />
          )}
        </TabPanel>
        <TabPanel>
          {completedList.length > 0 ? (
            <MyPageReservationCompleted completedList={completedList} />
          ) : (
            <MyPageReservationNoHistory text="이용 완료 내역이 없습니다." />
          )}
        </TabPanel>
        <TabPanel>
          {cancelledList.length > 0 ? (
            <MyPageReservationCancelled cancelledList={cancelledList} />
          ) : (
            <MyPageReservationNoHistory text="예약 취소 내역이 없습니다." />
          )}
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default MyPageReservationTabs;

const StyledTabList = styled(TabList)`
  width: 80%;

  @media screen and (max-width: ${theme.device.mobile}) {
    width: 100%;
  }
`;
