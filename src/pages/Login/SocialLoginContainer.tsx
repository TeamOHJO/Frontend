import styled from '@emotion/styled';
import { Button } from '@chakra-ui/react';
import NaverIcon from '../../assets/icons/btn_naver.svg';
import GoogleIcon from '../../assets/icons/btn_google.svg';

const SocialLoginContainer = () => {
  const handleSocialLogin = (service: string) => {
    window.location.href = `https://yanoljaschool.site:8080/oauth2/authorization/${service}`;
  };

  return (
    <StyledContainer>
      <StyledButton
        backgroundColor="#03C759"
        variant="none"
        onClick={() => {
          handleSocialLogin('naver');
        }}
      >
        <img src={NaverIcon} alt="naver" />
        네이버로 시작하기
      </StyledButton>
      <StyledButton
        style={{ color: 'black' }}
        onClick={() => {
          handleSocialLogin('google');
        }}
      >
        <img src={GoogleIcon} alt="google" style={{ paddingRight: '10px' }} />
        구글로 시작하기
      </StyledButton>
    </StyledContainer>
  );
};

export default SocialLoginContainer;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 5px;
`;

const StyledButton = styled(Button)`
  margin: 5px;
  color: white;

  &:hover {
    opacity: 0.9;
  }
`;
