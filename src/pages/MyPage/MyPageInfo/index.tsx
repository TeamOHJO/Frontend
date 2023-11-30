import styled from '@emotion/styled';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { theme } from '../../../styles/theme';
import MyPageSubtitle from '../MyPageSubtitle';
import InfoInput from './InfoInput';
import PasswordSection from './PasswordSection';
import { getMyInfo } from '../../../api';
import { userInformation } from '../../../states/atom';
import { getCookie } from '../../../utils/utils';
import ResignSection from './ResignSection';

function MyPageInfo() {
  const [userInfo, setUserInfo] = useRecoilState(userInformation);
  const fetchData = async () => {
    try {
      const res = await getMyInfo();
      const { data } = res;
      setUserInfo({
        ...userInfo,
        email: data.email,
        userName: data.name,
        phoneNum: data.phonenumber,
      });
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const name = getCookie('userName');
    if (userInfo.email === '') {
      fetchData();
    }
    if (userInfo.userName !== name) {
      fetchData();
    }
  }, []);

  const { email, userName, phoneNum } = userInfo;

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  return (
    <StyledContainer>
      <MyPageSubtitle subtitle="내 정보 관리" />
      <StyledInnerContainer>
        <StyledInfoWrapper>
          <StyledInfoLabel>이메일</StyledInfoLabel>
          <StyledInfoDetail>{email}</StyledInfoDetail>
        </StyledInfoWrapper>
        <InfoInput name="userName" list="이름" item={userName} onChangeInput={onChangeInput} />
        <InfoInput name="phoneNum" list="전화번호" item={phoneNum} onChangeInput={onChangeInput} />
        <PasswordSection />
        <ResignSection />
      </StyledInnerContainer>
    </StyledContainer>
  );
}

export default MyPageInfo;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const StyledInnerContainer = styled(StyledContainer)`
  margin-top: 3rem;
  align-items: center;
`;

const StyledInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1.5rem 1rem 1.5rem 1rem;
  width: 80%;

  @media screen and (max-width: 500px) {
    width: 95%;
  }
`;

const StyledInfoLabel = styled.span`
  flex: 1;
  font-weight: 500;
  @media screen and (max-width: 500px) {
    flex: 1.5;
  }
`;

const StyledInfoDetail = styled.span`
  flex: 4;
  color: ${theme.colors.gray400};
`;
