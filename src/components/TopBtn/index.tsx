import styled from '@emotion/styled';
import { UpOutlined } from '@ant-design/icons';
import { theme } from '../../styles/theme';

const ScrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

function TopBtn() {
  return (
    <StyledBtn onClick={ScrollToTop}>
      <UpOutlined />
    </StyledBtn>
  );
}

export default TopBtn;

const StyledBtn = styled.button`
  position: absolute;
  right: 10px;
  bottom: 80px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${theme.colors.white};
  box-shadow: ${theme.shadows.shadow3.shadow};
  z-index: 10;
`;
