import styled from '@emotion/styled';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import MyPageReservationUpcoming from './MyPageReservationUpcoming';
import MyPageReservationCompleted from './MyPageReservationCompleted';
import MyPageReservationCancelled from './MyPageReservationCancelled';
import { MyPageReservationData } from '../../../@types/interface';
import { theme } from '../../../styles/theme';

function MyPageReservationTabs({ reservationData }: { reservationData: MyPageReservationData[] }) {
  const TODAY = new Date();

  // 이용 예정
  const upcomingList = reservationData.filter(
    (item: MyPageReservationData) => item.deletedAt === null && TODAY < new Date(item.startDate),
  );

  // 이용 완료
  const completedList = reservationData.filter(
    (item: MyPageReservationData) => item.deletedAt === null && new Date(item.endDate) < TODAY,
  );

  // 예약 취소
  const cancelledList = reservationData.filter(
    (item: MyPageReservationData) => item.deletedAt !== null,
  );

  return (
    <Tabs isFitted variant="soft-rounded" colorScheme="blue" size="md" align="center">
      <StyledTabList>
        <Tab>이용 예정</Tab>
        <Tab>이용 완료</Tab>
        <Tab>취소됨</Tab>
      </StyledTabList>
      <TabPanels>
        <TabPanel>
          <MyPageReservationUpcoming upcomingList={upcomingList} />
        </TabPanel>
        <TabPanel>
          <MyPageReservationCompleted completedList={completedList} />
        </TabPanel>
        <TabPanel>
          <MyPageReservationCancelled cancelledList={cancelledList} />
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
