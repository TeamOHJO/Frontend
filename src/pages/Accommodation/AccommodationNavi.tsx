import styled from '@emotion/styled';
import {
  ArrowLeftOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  UpOutlined,
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { theme } from '../../styles/theme';
import { getCookie } from '../../utils/utils';
import { basketCountState } from '../../states/atom';

function AccommodationNavi() {
  const [basketCount, setBasketCount] =
    useRecoilState<number>(basketCountState);
  const navigate = useNavigate();

  const ScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const accessToken = getCookie('token');

  const fetchData = async () => {
    const response = await fetch('https://yanoljaschool.site:8080/basket', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const data = await response.json();
    setBasketCount(data.data.length);
  };

  useEffect(() => {
    if (accessToken) fetchData();
  }, []);
  return (
    <StyledAccommodationNaviWrapper>
      <StyledAccommodationNaviLeft>
        <ArrowLeftOutlined
          style={{ fontSize: '24px', cursor: 'pointer' }}
          onClick={() => {
            navigate(-1);
          }}
        />
      </StyledAccommodationNaviLeft>
      <StyledAccommodationNaviRight>
        <HomeOutlined
          style={{ fontSize: '24px', cursor: 'pointer' }}
          onClick={() => {
            navigate('/');
          }}
        />
        {accessToken && (
          <>
            <ShoppingCartOutlined
              style={{
                fontSize: '24px',
                marginLeft: '1rem',
                cursor: 'pointer',
              }}
              onClick={() => {
                navigate('/basket');
              }}
            />
            {basketCount > 0 && (
              <StyledCartCount>{basketCount}</StyledCartCount>
            )}
          </>
        )}
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
