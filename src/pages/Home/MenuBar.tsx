import styled from '@emotion/styled';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@chakra-ui/react';
import { theme } from '../../styles/theme';

const Category = ['호텔·리조트', '한옥', '펜션·풀빌라', '모텔', '게스트하우스'];

function MenuBar() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <StyledContainer>
      {Category.map((item: string | any) => (
        <Button
          className={item}
          onClick={() => {
            navigate(`/${item}`);
          }}
          key={item}
          padding={3}
          margin={2}
          width="100px"
          size="s"
          shadow={theme.shadows.shadow1.shadow}
          variant={id === item ? 'blue' : 'gray'}
        >
          {item}
        </Button>
      ))}
    </StyledContainer>
  );
}

export default MenuBar;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  width: 100%;
  height: 40px;

  @media screen and (max-width: ${theme.device.tablet}) {
    justify-content: flex-start;
    overflow: auto;
  }
`;
