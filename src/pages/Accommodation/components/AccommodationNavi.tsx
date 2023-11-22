import styled from '@emotion/styled';
import {
  ArrowLeftOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons';
import { theme } from '../../../styles/theme';

function AccommodationNavi() {
  return (
    <AccommodationNaviWrapper>
      <AccommodationNaviLeft>
        <ArrowLeftOutlined style={{ fontSize: '24px', cursor: 'pointer' }} />
      </AccommodationNaviLeft>
      <AccommodationNaviRight>
        <HomeOutlined
          style={{ fontSize: '24px', marginRight: '1rem', cursor: 'pointer' }}
        />
        <ShoppingCartOutlined style={{ fontSize: '24px', cursor: 'pointer' }} />
      </AccommodationNaviRight>
    </AccommodationNaviWrapper>
  );
}

export default AccommodationNavi;

const AccommodationNaviWrapper = styled.div`
  position: fixed;
  top: 0;

  width: 100%;
  max-width: 768px;
  height: 60px;
  background-color: ${theme.colors.white};

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AccommodationNaviLeft = styled.div`
  margin-left: 1rem;
`;

const AccommodationNaviRight = styled.div`
  margin-right: 1rem;
`;
