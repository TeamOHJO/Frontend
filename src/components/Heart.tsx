import styled from '@emotion/styled';
import { useState } from 'react';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';
import { theme } from '../styles/theme';

function Heart() {
  const [isHeart, setIsHeart] = useState<boolean>(false);

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
        <HeartOutlined
          onClick={() => handleIsHeart()}
          style={{ fontSize: '30px', color: theme.colors.red500 }}
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
