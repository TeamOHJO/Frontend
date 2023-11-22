import styled from '@emotion/styled';
import {
  ArrowLeftOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons';
import { theme } from '../../../styles/theme';

function RoomNavi() {
  return (
    <RoomNaviWrapper>
      <RoomNaviLeft>
        <ArrowLeftOutlined style={{ fontSize: '24px', cursor: 'pointer' }} />
      </RoomNaviLeft>
      <RoomNaviRight>
        <HomeOutlined
          style={{ fontSize: '24px', marginRight: '1rem', cursor: 'pointer' }}
        />
        <ShoppingCartOutlined style={{ fontSize: '24px', cursor: 'pointer' }} />
      </RoomNaviRight>
    </RoomNaviWrapper>
  );
}

export default RoomNavi;

const RoomNaviWrapper = styled.div`
  position: sticky;

  width: 100%;
  height: 60px;
  background-color: ${theme.colors.white};

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const RoomNaviLeft = styled.div`
  margin-left: 1rem;
`;

const RoomNaviRight = styled.div`
  margin-right: 1rem;
`;
