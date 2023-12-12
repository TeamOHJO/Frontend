import styled from '@emotion/styled';
import { AxiosError } from 'axios';
import { useState, useEffect } from 'react';
import { Button } from '@chakra-ui/react';
import { ErrorData } from '../../../api/type';
import MyPageSubtitle from '../MyPageSubtitle';
import PasswordInput from './PassWordInput';
import { changePw } from '../../../api/mypage';

const PasswordSection = () => {
  const [errorMsg, setErrorMsg] = useState('');

  const [pw, setPw] = useState({
    oldPw: '',
    newPw: '',
    checkPw: '',
  });

  const { oldPw, newPw, checkPw } = pw;

  useEffect(() => {
    passwordChecker();
  }, [newPw, checkPw]);

  const passwordChecker = () => {
    if (newPw === checkPw) {
      setErrorMsg('');
    } else if (newPw !== checkPw) {
      setErrorMsg('비밀번호가 일치하지 않습니다');
    }
  };

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPw({
      ...pw,
      [name]: value,
    });
  };

  const submitChangePw = async () => {
    if (oldPw.length === 0 || newPw.length === 0) {
      alert('모든 정보를 입력해주셔야합니다.');
    } else if (errorMsg !== '') {
      alert('잘못된 형식을 기입하셨습니다.');
    } else if (newPw.length < 5) {
      alert('비밀번호는 최소 5자 이상이어야 합니다');
    } else if (errorMsg === '' && oldPw !== '' && newPw.length > 5) {
      await HandleChangePw();
    }
  };

  const HandleChangePw = async () => {
    try {
      const res = await changePw(oldPw, newPw);
      const { code } = res;
      if (code === 200) {
        alert('비밀번호가 성공적으로 변경되었습니다!');
      }
    } catch (error) {
      const axiosError = error as AxiosError;
      const data = axiosError.response?.data as ErrorData;
      if (data.code === 400) {
        alert(data.message);
      }
    }
  };

  return (
    <StyledContainer>
      <MyPageSubtitle subtitle="비밀번호 변경" />
      <StyledInnerContainer>
        <PasswordInput
          name="oldPw"
          list="현재 비밀번호"
          item={oldPw}
          onChangeInput={onChangeInput}
        />
        <PasswordInput
          name="newPw"
          list="새로운 비밀번호"
          item={newPw}
          onChangeInput={onChangeInput}
        />
        <PasswordInput
          name="checkPw"
          list="비밀번호 확인"
          item={checkPw}
          onChangeInput={onChangeInput}
        />
        {errorMsg.length ? <StyledErrorMsg>{errorMsg}</StyledErrorMsg> : null}
        <StyledBtn variant="blue" size="md" onClick={submitChangePw}>
          비밀번호 변경
        </StyledBtn>
      </StyledInnerContainer>
    </StyledContainer>
  );
};

export default PasswordSection;

const StyledContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin: 2rem 0rem 1rem 0rem;
`;

const StyledInnerContainer = styled(StyledContainer)`
  align-items: center;
`;

const StyledBtn = styled(Button)`
  margin-top: 3rem;
`;

const StyledErrorMsg = styled.span`
  display: flex;
  align-items: flex-start;
  color: red;
`;
