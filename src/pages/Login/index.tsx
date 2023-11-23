import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Wrap,
} from '@chakra-ui/react';
import JoinTabContent from './JoinTabContent';
import LoginTabContent from './LoginTabContent';

const Login = () => (
  <Wrap width="100%">
    <Tabs variant="enclosed" width="100%">
      <TabList borderBottomColor="gray.200">
        <Tab width="50%">로그인</Tab>
        <Tab width="50%">회원가입</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <LoginTabContent />
        </TabPanel>
        <TabPanel>
          <JoinTabContent />
        </TabPanel>
      </TabPanels>
    </Tabs>
  </Wrap>
);

export default Login;
