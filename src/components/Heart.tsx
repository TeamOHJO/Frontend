import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { useState } from 'react';
import { HeartFilled, HeartOutlined } from '@ant-design/icons';
import { theme } from '../styles/theme';

interface HeartProps {
  liked: boolean;
  size: string;
}

function Heart({ liked, size }: HeartProps) {
  const [isHeart, setIsHeart] = useState<boolean>(liked);

  function handleIsHeart() {
    setIsHeart(!isHeart);
  }

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
        <StyledHeartOutlined onClick={() => handleIsHeart()} />
      )}
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
