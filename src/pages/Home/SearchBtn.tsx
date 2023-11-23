import styled from '@emotion/styled';
import { SearchOutlined } from '@ant-design/icons';
import { theme } from '../../styles/theme';

function SearchBtn() {
  return (
    <StyledContainer>
      <StyledTextContainer>국내/국외, 날짜, 인원 수 추가</StyledTextContainer>
      <SearchOutlined style={{ color: theme.colors.gray400 }} />
    </StyledContainer>
  );
}

export default SearchBtn;

const StyledContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 70%;
  min-width: 300px;
  height: 50px;
  padding: 0rem 2rem 0rem 2rem;
  border: 2px solid ${theme.colors.gray100};
  border-radius: 24px;
  box-shadow: ${theme.shadows.shadow1.shadow};

  &:hover {
    background-color: ${theme.colors.gray50};
  }
`;

const StyledTextContainer = styled.div`
  color: ${theme.colors.gray400};
`;
