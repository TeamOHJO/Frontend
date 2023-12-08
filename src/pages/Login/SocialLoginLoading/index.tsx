import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SocialLoginLoading = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const parsedHash = new URLSearchParams(window.location.hash.substring(1));
    const OathToken = parsedHash.get('access_token');

    if (OathToken) {
      // 이후 Oath토큰 인증을 위해 백엔드로 OathToken 전송로직 호출 (미구현)
      // 함수 호출 성공 후, 서버에서 새로발급받은 토큰 쿠키에 저장
      navigate('/');
      alert('로그인성공');
    } else {
      // 토큰을 코드를 못받았을 시
      navigate('/');
      alert('소셜로그인 실패');
    }
  }, []);
  return <>소셜로그인로딩</>;
};

export default SocialLoginLoading;
