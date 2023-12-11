import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { setCookies } from '../../../utils/utils';
import LoadingCircle from '../../../components/Loading';

const SocialLoginLoading = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleLogin = async () => {
      /* eslint-disable */
      const urlParams = new URLSearchParams(location.search);
      const token = urlParams.get('token');
      const userName = urlParams.get('name');
      const userEmail = urlParams.get('email');

      if (token && userEmail && userName) {
        await setCookies(userEmail, userName, token);
        navigate('/');
      } else {
        alert('로그인에 실패하셨습니다.');
        navigate('/login');
      }
    };

    handleLogin();
    /* eslint-enable */
  }, []);
  return <LoadingCircle />;
};

export default SocialLoginLoading;
