import { useEffect } from 'react';
import styled from '@emotion/styled';
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { Button } from '@chakra-ui/react';
import {
  searchFilteredState,
  searchAttempt,
  accommodationList,
  setPage,
} from '../../states/atom';
import { getAccommodationList } from '../../api';
import HomeCard from './HomeCard';

const ContentsContainer = () => {
  const [list, setList] = useRecoilState(accommodationList);
  const navigate = useNavigate();
  const [searchFilter, setSearchFilter] = useRecoilState(searchFilteredState);
  const [searchingAttempt] = useRecoilState(searchAttempt);
  const [paging, setPaging] = useRecoilState(setPage);
  /* eslint-disable */
  const { category, isDomestic, startDate, endDate, numberOfPeople, page } =
    searchFilter;
  /* eslint-enable */

  const fetchData = async () => {
    try {
      const res = await getAccommodationList({
        category,
        isDomestic,
        startDate,
        endDate,
        numberOfPeople,
        page,
      });

      const { data } = res;
      setList(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [navigate, searchingAttempt]);

  const getMoreData = async () => {
    try {
      const res = await getAccommodationList({
        category,
        isDomestic,
        startDate,
        endDate,
        numberOfPeople,
        page,
      });

      const { data } = res;
      setList((prevList: any[]) => [...prevList, ...data]);
    } catch (error) {
      console.error(error);
    }
  };

  const onClickMoreBtn = () => {
    const newFilter = { ...searchFilter, page: page + 1 };
    setSearchFilter(newFilter);
    setPaging(page + 1);
  };

  useEffect(() => {
    if (paging !== 0) {
      getMoreData();
    }
  }, [paging]);

  return (
    <StyledContainer>
      {list.map((e: any) => {
        return (
          <HomeCard
            key={e.accommodationId}
            id={e.accommodationId}
            name={e.accommodationName}
            images={e.accommodationImageList}
            category={e.category}
            score={e.averageReviewScore}
            price={122200}
            isLiked={e.liked}
          />
        );
      })}
      <StyledButtonWrapper>
        <Button
          colorScheme="blue"
          onClick={() => {
            onClickMoreBtn();
          }}
        >
          더보기
        </Button>
      </StyledButtonWrapper>
    </StyledContainer>
  );
};

export default ContentsContainer;

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 8rem;
  width: 100%;
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;
