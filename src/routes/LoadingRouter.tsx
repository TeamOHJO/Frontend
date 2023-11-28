import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoadingCircle from '../components/Loading';

const LoadingRouter = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const goTohome = setTimeout(() => {
      navigate('/');
    }, 1000);

    return () => clearTimeout(goTohome);
  }, []);

  return <LoadingCircle />;
};

export default LoadingRouter;
