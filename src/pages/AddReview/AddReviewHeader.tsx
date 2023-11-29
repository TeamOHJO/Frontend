import styled from '@emotion/styled';
import { Text } from '@chakra-ui/react';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { theme } from '../../styles/theme';

function AddReviewHeader() {
  return (
    <StyledBasketHeaderWrapper>
      <IconWrapper>
        <ArrowLeftOutlined
          onClick={() => {
            window.history.back();
          }}
          style={{ fontSize: '24px', cursor: 'pointer' }}
        />
      </IconWrapper>
      <Text as="p" size="sm" textAlign="center">
        리뷰 작성
      </Text>
    </StyledBasketHeaderWrapper>
  );
}

export default AddReviewHeader;

const StyledBasketHeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  z-index: 10;

  width: 100%;
  max-width: 768px;
  height: 60px;
  padding: 0;

  background-color: ${theme.colors.white};

  display: flex;
  align-items: center;
  justify-content: center;
`;

const IconWrapper = styled.div`
  position: absolute;
  left: 2%;

  @media screen and (max-width: 768px) {
    left: 3%;
  }
`;
