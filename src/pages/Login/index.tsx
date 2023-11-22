import {
  Tabs, TabList, Tab, TabPanels, TabPanel,
} from '@chakra-ui/react';

const Login = () => (
  <Tabs variant="enclosed">
    <TabList>
      <Tab>One</Tab>
      <Tab>Two</Tab>
    </TabList>
    <TabPanels>
      <TabPanel>
        <p>one!</p>
      </TabPanel>
      <TabPanel>
        <p>two!</p>
      </TabPanel>
    </TabPanels>
  </Tabs>
);

export default Login;
