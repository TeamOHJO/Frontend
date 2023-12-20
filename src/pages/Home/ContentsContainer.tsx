import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { useRecoilState } from 'recoil';
import { useParams } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import {
  searchFilteredState,
  searchAttempt,
  accommodationList,
  searchPages,
} from '../../states/atom';
import { getAccommodationList } from '../../api/home';
import HomeCard from './HomeCard';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';

const ContentsContainer = () => {
  const [list, setList] = useRecoilState(accommodationList);
  const { id } = useParams();
  const [searchFilter, setSearchFilter] = useRecoilState(searchFilteredState);
  const [searchingAttempt, setSearchingAttempt] = useRecoilState(searchAttempt);
  const [page, setPage] = useRecoilState(searchPages);
  const [canLoadMore, setCanLoadMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const { category, isDomestic, startDate, endDate, numberOfPeople } = searchFilter;

  const fetchData = async () => {
    try {
      const res = await getAccommodationList(page, {
        category,
        isDomestic,
        startDate,
        endDate,
        numberOfPeople,
      });

      const { data } = res;
      if (data.length) {
        if (page === 0) {
          setList(data);
        } else {
          setList((prevList: any[]) => [...prevList, ...data]);
        }
      } else {
        if (page === 0) {
          setList(data);
        }
        setCanLoadMore(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getMoreList = () => {
    setLoading(true);
    setPage(prevPage => prevPage + 1);
    setLoading(false);
  };

  // 무한스크롤 훅 사용
  const loadingTrigger = useInfiniteScroll(getMoreList, loading, canLoadMore);

  useEffect(() => {
    setPage(0);
    const newCat = id || 'HOTEL';
    const newSearchFilter = { ...searchFilter, category: newCat };
    setSearchFilter(newSearchFilter);
    setSearchingAttempt(searchingAttempt + 1);
  }, [id]);

  useEffect(() => {
    if (searchingAttempt >= 1) {
      if (page === 0) {
        setCanLoadMore(true);
      }
      fetchData();
    }
  }, [searchingAttempt, page]);

  return (
    <StyledContainer>
      {list.map((e: any) => {
        return (
          <HomeCard
            key={uuid()}
            id={e.accommodationId}
            name={e.accommodationName}
            images={e.accommodationImageList}
            category={e.category}
            score={e.averageReviewScore}
            price={e.minPrice}
            isLiked={e.liked}
          />
        );
      })}
      {list.length ? null : <StyledWrapper />}
      <StyledLoadTriggerSection ref={loadingTrigger}>
        {canLoadMore ? null : <>찾으시는 숙소가 더이상 없습니다.</>}
      </StyledLoadTriggerSection>
    </StyledContainer>
  );
};

export default ContentsContainer;

const StyledContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 8rem;
  width: 100%;
  padding-left: 10px;
`;

const StyledWrapper = styled.div`
  width: 100%;
  height: 1500px;
`;

const StyledLoadTriggerSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  margin: 8rem;
`;
