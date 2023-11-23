import styled from '@emotion/styled';
import {
  ArrowLeftOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons';
import { theme } from '../../styles/theme';

function RoomNavi() {
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
      </StyledRoomNaviRight>
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
