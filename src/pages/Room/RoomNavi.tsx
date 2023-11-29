import styled from '@emotion/styled';
import {
  ArrowLeftOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { theme } from '../../styles/theme';
import { getCookie } from '../../utils/utils';
import { basketCountState } from '../../states/atom';

function RoomNavi() {
  const [basketCount, setBasketCount] =
    useRecoilState<number>(basketCountState);
  const navigate = useNavigate();

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
    <StyledRoomNaviWrapper>
      <StyledRoomNaviLeft>
        <ArrowLeftOutlined
          style={{ fontSize: '24px', cursor: 'pointer' }}
          onClick={() => {
            navigate(-1);
          }}
        />
      </StyledRoomNaviLeft>
      <StyledRoomNaviRight>
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
  z-index: 3;
`;

const StyledRoomNaviLeft = styled.div`
  margin-left: 1rem;
`;

const StyledRoomNaviRight = styled.div`
  margin-right: 1rem;
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
