import styled from '@emotion/styled';
import {
  ArrowLeftOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  UpOutlined,
} from '@ant-design/icons';
import { theme } from '../../styles/theme';

function RoomNavi() {
  const ScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <StyledRoomNaviWrapper>
      <StyledRoomNaviLeft>
        <ArrowLeftOutlined style={{ fontSize: '24px', cursor: 'pointer' }} />
      </StyledRoomNaviLeft>
      <StyledRoomNaviRight>
        <HomeOutlined
          style={{ fontSize: '24px', marginRight: '1rem', cursor: 'pointer' }}
        />
        <ShoppingCartOutlined style={{ fontSize: '24px', cursor: 'pointer' }} />
      </StyledRoomNaviRight>{' '}
      <StyledTopBtn onClick={ScrollToTop}>
        <UpOutlined />
      </StyledTopBtn>
      <StyledCartCount>1</StyledCartCount>
    </StyledRoomNaviWrapper>
  );
}

export default RoomNavi;

const StyledRoomNaviWrapper = styled.div`
  position: fixed;
  top: 0;

  width: 100%;
  max-width: 768px;
  height: 60px;
  background-color: ${theme.colors.white};

  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 2;
`;

const StyledRoomNaviLeft = styled.div`
  margin-left: 1rem;
`;

const StyledRoomNaviRight = styled.div`
  margin-right: 1rem;
`;

const StyledTopBtn = styled.button`
  position: absolute;
  right: 10px;
  top: 85vh;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${theme.colors.white};
  box-shadow: ${theme.shadows.shadow3.shadow};
  z-index: 10;
`;

const StyledCartCount = styled.div`
  width: 20px;
  height: 20px;

  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 5px;
  right: 5px;

  background-color: red;
  color: white;
`;
