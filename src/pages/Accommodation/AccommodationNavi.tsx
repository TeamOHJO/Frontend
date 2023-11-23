import styled from '@emotion/styled';
import {
  ArrowLeftOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  UpOutlined,
} from '@ant-design/icons';
import { theme } from '../../styles/theme';

function AccommodationNavi() {
  const ScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <StyledAccommodationNaviWrapper>
      <StyledAccommodationNaviLeft>
        <ArrowLeftOutlined style={{ fontSize: '24px', cursor: 'pointer' }} />
      </StyledAccommodationNaviLeft>
      <StyledAccommodationNaviRight>
        <HomeOutlined
          style={{ fontSize: '24px', marginRight: '1rem', cursor: 'pointer' }}
        />
        <ShoppingCartOutlined style={{ fontSize: '24px', cursor: 'pointer' }} />
      </StyledAccommodationNaviRight>
      <StyledTopBtn onClick={ScrollToTop}>
        <UpOutlined />
      </StyledTopBtn>
    </StyledAccommodationNaviWrapper>
  );
}

export default AccommodationNavi;

const StyledAccommodationNaviWrapper = styled.div`
  position: fixed;
  top: 0;

  width: 100%;
  max-width: 768px;
  height: 60px;
  background-color: ${theme.colors.white};

  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 3;
`;

const StyledAccommodationNaviLeft = styled.div`
  margin-left: 1rem;
`;

const StyledAccommodationNaviRight = styled.div`
  margin-right: 1rem;
`;

const StyledTopBtn = styled.button`
  position: absolute;
  right: 10px;
  top: 90vh;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${theme.colors.white};
  box-shadow: ${theme.shadows.shadow3.shadow};
  z-index: 10;
`;
