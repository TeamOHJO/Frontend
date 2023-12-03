import styled from '@emotion/styled';
import { useRef } from 'react';
import { useRecoilState } from 'recoil';
import { useParams, useNavigate } from 'react-router-dom';
import { RightCircleOutlined, LeftCircleOutlined } from '@ant-design/icons';
import { Button } from '@chakra-ui/react';
import { theme } from '../../styles/theme';
import { searchFilteredState } from '../../states/atom';
import { changeCategoryFormat } from '../../utils/utils';

const Category = ['한옥', '펜션·풀빌라', '모텔', '게스트하우스'];

function MenuBar() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [searchFilter, setSearchFilter] = useRecoilState(searchFilteredState);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleLeftBtnClick = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft = 0;
    }
  };
  const handleRightBtnClick = () => {
    if (containerRef.current) {
      const maxScroll = containerRef.current.scrollWidth - containerRef.current.clientWidth;
      containerRef.current.scrollLeft = maxScroll;
    }
  };

  const selectCategory = (item: string) => {
    navigate(`/${item}`);
    const newCat = changeCategoryFormat(item) as string;

    const newSearchFilter = { ...searchFilter, category: newCat };
    setSearchFilter(newSearchFilter);
  };

  return (
    <StyledContainer ref={containerRef}>
      <Button
        className="호텔·리조트"
        onClick={() => {
          selectCategory('호텔·리조트');
        }}
        padding={3}
        margin={2}
        width="100px"
        size="s"
        shadow={theme.shadows.shadow1.shadow}
        variant={id === undefined || id === '호텔·리조트' ? 'blue' : 'gray'}
      >
        호텔·리조트
      </Button>
      {Category.map((item: string | any) => (
        <Button
          className={item}
          onClick={() => {
            selectCategory(item);
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
      <StyledLeftBtn onClick={handleLeftBtnClick}>
        <LeftCircleOutlined />
      </StyledLeftBtn>
      <StyledRightBtn onClick={handleRightBtnClick}>
        <RightCircleOutlined />
      </StyledRightBtn>
    </StyledContainer>
  );
}

export default MenuBar;

const StyledContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 2rem 3rem 2rem 3rem;
  width: 100%;
  height: 40px;

  @media screen and (max-width: ${theme.device.tablet}) {
    justify-content: flex-start;
    overflow-x: scroll;
    overflow-y: hidden;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const StyledLeftBtn = styled.div`
  display: none;
  position: fixed;
  padding: 10px 15px 15px 10px;
  left: 0;
  background-color: ${theme.colors.white};
  z-index: 10;
  font-size: 30px;
  color: ${theme.colors.gray500};
  background: linear-gradient(to right, white 85%, transparent);

  @media screen and (max-width: 550px) {
    display: flex;
  }
`;

const StyledRightBtn = styled.button`
  display: none;
  position: fixed;
  padding: 10px 10px 15px 15px;
  right: 0;
  background-color: ${theme.colors.white};
  z-index: 10;
  font-size: 30px;
  color: ${theme.colors.gray500};
  background: linear-gradient(to left, white 85%, transparent);

  @media screen and (max-width: 550px) {
    display: flex;
  }
`;
