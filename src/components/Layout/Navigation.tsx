import { useState, useEffect } from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import styled from '@emotion/styled';
import { ShoppingCartOutlined, HomeOutlined, HeartOutlined, UserOutlined } from '@ant-design/icons';
import { theme } from '../../styles/theme';
import TopBtn from '../TopBtn';
import { getCookie, removeCookies } from '../../utils/utils';
import { postLogout } from '../../api';

function Navigation() {
  const [isUser, setIsUser] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const { pathname } = location;
  const mainPagePath = ['호텔·리조트', '한옥', '펜션·풀빌라', '모텔', '게스트하우스'];
  const { id } = useParams();

  const logoutFunc = async () => {
    await postLogout();
    removeCookies();
    navigate('/login');
  };

  useEffect(() => {
    const token = getCookie('token');
    const name = getCookie('userName');
    const email = getCookie('userEmail');

    if (!token || !name || !email) {
      setIsUser(false);
      removeCookies();
    } else {
      setIsUser(true);
    }
  }, [location]);

  return (
    <StyledContainer>
      {isUser ? (
        <StyledUserState>
          <StyledItem
            onClick={() => {
              navigate('/basket');
            }}
          >
            <ShoppingCartOutlined
              style={{
                fontSize: '20px',
                color: `${pathname.includes('/basket') ? 'black' : theme.colors.gray400}`,
              }}
            />
            장바구니
          </StyledItem>
          <StyledItem
            onClick={() => {
              navigate('/wishlist');
            }}
          >
            <HeartOutlined
              style={{
                fontSize: '20px',
                color: `${pathname.includes('/wishlist') ? 'black' : theme.colors.gray400}`,
              }}
            />
            위시 리스트
          </StyledItem>
          <StyledItem>
            <HomeOutlined
              style={{
                fontSize: '20px',
                color: `${
                  mainPagePath.includes(id as string) || pathname === '/'
                    ? 'black'
                    : theme.colors.gray400
                }`,
              }}
              onClick={() => {
                navigate('/');
              }}
            />
            홈
          </StyledItem>
          <StyledItem
            onClick={() => {
              navigate('/mypage');
            }}
          >
            <UserOutlined
              style={{
                fontSize: '20px',
                color: `${pathname.includes('/mypage') ? 'black' : theme.colors.gray400}`,
                // color: `${pathname.slice(0, 7) === '/mypage' ? 'black' : theme.colors.gray400}`,
              }}
            />
            마이페이지
          </StyledItem>
          <StyledItem onClick={logoutFunc}>
            <span className="material-symbols-outlined">logout</span>
            로그아웃
          </StyledItem>
        </StyledUserState>
      ) : (
        <StyledNonUserState>
          <StyledItem />
          <HomeStyledItem
            onClick={() => {
              navigate('/');
            }}
          >
            <HomeOutlined
              style={{
                fontSize: '20px',
                color: `${
                  mainPagePath.includes(id as string) || pathname === '/'
                    ? 'black'
                    : theme.colors.gray400
                }`,
              }}
            />
            홈
          </HomeStyledItem>
          <StyledItem
            onClick={() => {
              navigate('/login');
            }}
          >
            <span className="material-symbols-outlined">login</span>
            로그인
          </StyledItem>
        </StyledNonUserState>
      )}
      <TopBtn />
    </StyledContainer>
  );
}

export default Navigation;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: fixed;
  bottom: 0;
  padding: 1rem 3rem 1rem 3rem;
  width: 768px;
  min-width: 375px;
  height: 58px;
  background-color: ${theme.colors.white};
  z-index: 100;
  box-shadow: ${theme.shadows.shadowTop.shadow};

  @media screen and (max-width: 768px) {
    width: 100%;
    min-width: 375px;
    padding: 1rem;
  }
`;

const StyledNonUserState = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const StyledUserState = styled(StyledNonUserState)``;

const StyledItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.gray500};
  font-size: 12px;
  cursor: pointer;
`;

const HomeStyledItem = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);

  border: 1px solid red;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.gray500};
  font-size: 12px;
  cursor: pointer;
`;
