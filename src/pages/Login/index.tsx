import { Tabs, TabList, Tab, TabPanels, TabPanel, Center, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { useRecoilState } from 'recoil';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import JoinTabContent from './JoinTabContent';
import LoginTabContent from './LoginTabContent';
import ToastPopup from '../../components/Modal/ToastPopup';
import { toastPopupState } from '../../states/atom';
import { getCookie } from '../../utils/utils';

const Login = () => {
  const [showAlert, setShowAlert] = useRecoilState(toastPopupState);
  const navigate = useNavigate();

  useEffect(() => {
    const token = getCookie('token');
    const name = getCookie('userName');
    const email = getCookie('userEmail');

    if (token && name && email) {
      navigate('/');
    }
  }, []);

  return (
    <StyledLoginWrap>
      <Center height="90px">
        <Text as="p" size="sm">
          로그인 후 이용가능한 서비스 입니다.
        </Text>
      </Center>
      <Tabs variant="enclosed" width="100%" height="100%">
        <TabList borderBottomColor="gray.200">
          <Tab width="50%">로그인</Tab>
          <Tab width="50%">회원가입</Tab>
        </TabList>
        <TabPanels
          padding="50px 0"
          backgroundColor="white"
          border="1px solid"
          borderColor="gray.200"
          borderBottomLeftRadius={8}
          borderBottomRightRadius={8}
        >
          <TabPanel display="flex" justifyContent="center" alignItems="center">
            <LoginTabContent />
          </TabPanel>
          <TabPanel display="flex" justifyContent="center" alignItems="center">
            <JoinTabContent />
          </TabPanel>
        </TabPanels>
      </Tabs>
      <ToastPopup status={showAlert} setFunc={setShowAlert} />
    </StyledLoginWrap>
  );
};

const StyledLoginWrap = styled.div`
  width: 100%;
  min-height: calc(100vh - 74px);
  padding: 0 1rem;
`;

export default Login;
