import { ReactElement, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { getCookie, removeCookies } from '../utils/utils';
import LoadingCircle from '../components/Loading';

interface UserRouterProps {
  children: ReactElement;
}

function UserRouter({ children }: UserRouterProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedin, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = getCookie('token');
    const name = getCookie('userName');
    const email = getCookie('userEmail');

    if (!token || !name || !email) {
      removeCookies();
      setIsLoading(false);
    } else {
      setIsLoggedIn(true);
      setIsLoading(false);
    }
  }, []);

  if (isLoading) return <LoadingCircle />;
  if (!isLoading && isLoggedin) return children;
  if (!isLoading && !isLoggedin) return <Navigate to="/login" />;
}

export default UserRouter;
