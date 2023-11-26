import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Button, useDisclosure } from '@chakra-ui/react';
import { RightOutlined } from '@ant-design/icons';
import { theme } from '../../../styles/theme';
import MyPageSubtitle from '../MyPageSubtitle';
import DefaultModal from '../../../components/Modal/DefaultModal';
import InfoInput from './InfoInput';

function MyPageInfo() {
  const [userInfo, setUserInfo] = useState({
    email: 'rlaxmrgml@naver.com',
    userName: '김특희',
    phoneNum: '010-1234-5678',
  });

  const { email, userName, phoneNum } = userInfo;
  const navigate = useNavigate();
  const { onOpen, isOpen, onClose } = useDisclosure();

  const modalData = {
    heading: '회원 탈퇴',
    text: '회원을 탈퇴하시겠습니까?',
  };

  const modalFunc = () => {
    console.log('회원탈퇴 api 전송');
    alert('탈퇴되셨습니다');
    navigate('/');
  };

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
        <InfoInput
          name="userName"
          list="이름"
          item={userName}
          onChangeInput={onChangeInput}
        />
        <InfoInput
          name="phoneNum"
          list="전화번호"
          item={phoneNum}
          onChangeInput={onChangeInput}
        />

        <StyledResignBtn
          variant="blue"
          size="md"
          rightIcon={<RightOutlined />}
          onClick={onOpen}
        >
          회원탈퇴
        </StyledResignBtn>
        <DefaultModal
          isOpen={isOpen}
          onClose={onClose}
          modalFunc={modalFunc}
          modalData={modalData}
        />
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

const StyledResignBtn = styled(Button)`
  display: flex;
  align-items: center;
  margin-top: 7rem;
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
