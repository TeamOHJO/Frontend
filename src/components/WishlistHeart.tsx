import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { useState } from 'react';
import { HeartFilled, HeartOutlined } from '@ant-design/icons';
import { theme } from '../styles/theme';
import { getCookie } from '../utils/utils';
import { clickLiked } from '../api';

interface HeartProps {
  liked: boolean;
  accommodationId: number;
}

function WishlistHeart({ liked, accommodationId }: HeartProps) {
  const [isHeart, setIsHeart] = useState<boolean>(liked);
  const [activeHeart, setActiveHeart] = useState(false);
  const accessToken = getCookie('token');

  function handleIsHeart() {
    if (accessToken) {
      fetchData();
    } else {
      setActiveHeart(!activeHeart);
    }
  }

  const fetchData = async () => {
    const response = await clickLiked(accommodationId);
    console.log(response.data);
    setIsHeart(response.data.liked);
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
    font-size: 20px;
    color: ${theme.colors.red500};
    animation: 300ms ${Bounce} forwards;
  `;

  const StyledHeartOutlined = styled(HeartOutlined)`
    font-size: 20px;
    color: ${theme.colors.red500};
    animation: 300ms ${Bounce} forwards;
  `;

  return (
    <StyledHeart>
      {isHeart ? (
        <StyledHeartFilled onClick={() => handleIsHeart()} />
      ) : (
        <StyledHeartOutlined onClick={() => handleIsHeart()} />
      )}
    </StyledHeart>
  );
}

export default WishlistHeart;

const StyledHeart = styled.div`
  width: 20px;
  z-index: 2;
  cursor: pointer;
`;
