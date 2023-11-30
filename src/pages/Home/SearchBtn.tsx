import styled from '@emotion/styled';
import { SearchOutlined } from '@ant-design/icons';
import { useDisclosure } from '@chakra-ui/react';
import SearchModal from './SearchModal';
import { theme } from '../../styles/theme';

function SearchBtn() {
  const { onOpen, isOpen, onClose } = useDisclosure();

  return (
    <StyledContainer onClick={onOpen}>
      <StyledTextContainer>국내/국외, 날짜, 인원 수 추가</StyledTextContainer>
      <SearchOutlined style={{ color: theme.colors.gray400 }} />
      <SearchModal isOpen={isOpen} onClose={onClose} />
    </StyledContainer>
  );
}

export default SearchBtn;

const StyledContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  min-width: 250px;
  height: 50px;
  padding: 0rem 2rem 0rem 2rem;
  margin: 0 1rem;
  border: 2px solid ${theme.colors.gray200};
  border-radius: 24px;
  box-shadow: ${theme.shadows.shadow1.shadow};

  &:hover {
    background-color: ${theme.colors.gray50};
  }
`;

const StyledTextContainer = styled.div`
  color: ${theme.colors.gray500};
`;
