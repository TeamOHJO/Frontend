import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { useState } from 'react';
import { HeartFilled, HeartOutlined } from '@ant-design/icons';
import { theme } from '../../styles/theme';
import { getCookie } from '../../utils/utils';
import HomeHeartToastPopup from './HomeHeartToastPopUp';

interface HeartProps {
  liked: boolean;
  size: string;
  id: string;
}

function HomeHeart({ liked, size, id }: HeartProps) {
  const [isHeart, setIsHeart] = useState<boolean>(liked);
  const [activeHeart, setActiveHeart] = useState(false);
  const accessToken = getCookie('token');
  const [showPopUp, setShowPopUp] = useState(false);

  function handleIsHeart() {
    if (accessToken) {
      fetchData();
    } else {
      setActiveHeart(!activeHeart);
    }
  }

  const [showAlert, setShowAlert] = useState({
    active: false,
    message: '',
  });

  const openFunction = () => {
    setShowPopUp(true);
    const toastData = {
      active: true,
      message: '로그인 후 진행하실 수 있습니다.',
    };
    setShowAlert(toastData);
  };

  const fetchData = async () => {
    const response = await fetch(`https://yanoljaschool.site:8080/accommodation/${id}/likes`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const res = await response.json();
    setIsHeart(res.data.liked);
  };

  const Bounce = keyframes`
  0%{
    transform:scale(1)
  }
  20%{
    transform:scale(0.9)
  }
  40%{
    transform:scale(1.1)
  }
  100%{
    transform:scale(1)
  }
`;

  const StyledHeartFilled = styled(HeartFilled)`
    font-size: ${size};
    color: ${theme.colors.red500};
    animation: 300ms ${Bounce} forwards;
  `;

  const StyledHeartOutlined = styled(HeartOutlined)`
    font-size: ${size};
    color: ${theme.colors.red500};
    animation: 300ms ${Bounce} forwards;
  `;

  return (
    <StyledHeart
      onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.stopPropagation();
      }}
    >
      {isHeart ? (
        <StyledHeartFilled onClick={() => handleIsHeart()} />
      ) : (
        <StyledHeartOutlined
          onClick={() => {
            handleIsHeart();
            if (!accessToken) {
              openFunction();
            }
          }}
        />
      )}
      {showPopUp ? (
        <HomeHeartToastPopup
          status={showAlert}
          setFunc={setShowAlert}
          setShowPopUp={setShowPopUp}
        />
      ) : null}
    </StyledHeart>
  );
}

export default HomeHeart;

const StyledHeart = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 2;
  cursor: pointer;
`;
