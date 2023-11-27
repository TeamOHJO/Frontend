import styled from '@emotion/styled';
import { useState } from 'react';
import { HeartTwoTone, HeartFilled } from '@ant-design/icons';
import { theme } from '../styles/theme';

interface HeartProps {
  isLiked: boolean;
}

function Heart({ isLiked }: HeartProps) {
  const [isHeart, setIsHeart] = useState<boolean>(isLiked);

  function handleIsHeart() {
    setIsHeart(!isHeart);
  }

  return (
    <StyledHeart>
      {isHeart ? (
        <HeartFilled
          onClick={() => handleIsHeart()}
          style={{ fontSize: '30px', color: theme.colors.red500 }}
        />
      ) : (
        <HeartTwoTone
          onClick={() => handleIsHeart()}
          twoToneColor={theme.colors.red500}
          style={{ fontSize: '30px' }}
        />
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