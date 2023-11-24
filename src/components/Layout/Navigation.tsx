import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import {
  ShoppingCartOutlined,
  HomeOutlined,
  HeartOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { theme } from '../../styles/theme';
import TopBtn from '../TopBtn';

function Navigation() {
  const isUser = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();
  const pagesArr = ['basket', 'wishlist', 'mypage'];

  return (
    <StyledContainer>
      {isUser ? (
        <StyledUserState>
          <StyledItem>
            <ShoppingCartOutlined
              style={{
                fontSize: '20px',
                color: `${id === 'basket' ? 'black' : theme.colors.gray400}`,
              }}
              onClick={() => {
                navigate('/basket');
              }}
            />
            장바구니
          </StyledItem>
          <StyledItem>
            <HomeOutlined
              style={{
                fontSize: '20px',
                color: `${
                  pagesArr.find((item: string) => item === id)
                    ? theme.colors.gray400
                    : 'black'
                }`,
              }}
              onClick={() => {
                navigate('/');
              }}
            />
            홈
          </StyledItem>
          <StyledItem>
            <HeartOutlined
              style={{
                fontSize: '20px',
                color: `${id === 'wishlist' ? 'black' : theme.colors.gray400}`,
              }}
              onClick={() => {
                navigate('/wishlist');
              }}
            />
            위시 리스트
          </StyledItem>
          <StyledItem>
            <UserOutlined
              style={{
                fontSize: '20px',
                color: `${id === 'mypage' ? 'black' : theme.colors.gray400}`,
              }}
              onClick={() => {
                navigate('/mypage');
              }}
            />
            마이페이지
          </StyledItem>
        </StyledUserState>
      ) : (
        <StyledNonUserState>
          <StyledItem />
          <StyledItem>
            <HomeOutlined
              style={{
                fontSize: '20px',
                color: `${
                  pagesArr.find((item: string) => item === id)
                    ? theme.colors.gray400
                    : 'black'
                }`,
              }}
              onClick={() => {
                navigate('/');
              }}
            />
            홈
          </StyledItem>
          <StyledItem>
            <span
              className="material-symbols-outlined"
              onClick={() => {
                navigate('/login');
              }}
            >
              login
            </span>
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

const StyledUserState = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  height: 100%;
`;

const StyledItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.gray500};
  font-size: 12px;
  cursor: pointer;
`;
