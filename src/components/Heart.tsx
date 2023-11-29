import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { useState } from 'react';
import { HeartFilled, HeartOutlined } from '@ant-design/icons';
import { useParams } from 'react-router-dom';
import { theme } from '../styles/theme';
import { getCookie } from '../utils/utils';
import HeartToastPopup from './HeartToastPopup';

interface HeartProps {
  liked: boolean;
  size: string;
}

function Heart({ liked, size }: HeartProps) {
  const [isHeart, setIsHeart] = useState<boolean>(liked);
  const [activeHeart, setActiveHeart] = useState(false);
  const params = useParams();
  const accessToken = getCookie('token');

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
    const toastData = {
      active: true,
      message: '로그인 후 진행하실 수 있습니다.',
    };
    setShowAlert(toastData);
  };

  const fetchData = async () => {
    const response = await fetch(
      `https://yanoljaschool.site:8080/accommodation/${params.id}/likes`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );
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
    <StyledHeart>
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
      <HeartToastPopup status={showAlert} setFunc={setShowAlert} />
    </StyledHeart>
  );
}

export default Heart;

const StyledHeart = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 2;
  cursor: pointer;
`;
