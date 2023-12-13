import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { useRecoilState } from 'recoil';
import { useParams } from 'react-router-dom';
import { Button } from '@chakra-ui/react';
import { v4 as uuid } from 'uuid';
import {
  searchFilteredState,
  searchAttempt,
  accommodationList,
  searchPages,
} from '../../states/atom';
import { getAccommodationList } from '../../api/home';
import HomeCard from './HomeCard';
import useThrottle from '../../hooks/useThrottle';

const ContentsContainer = () => {
  const [list, setList] = useRecoilState(accommodationList);
  const { id } = useParams();
  const [searchFilter, setSearchFilter] = useRecoilState(searchFilteredState);
  const [searchingAttempt, setSearchingAttempt] = useRecoilState(searchAttempt);
  const [page, setPage] = useRecoilState(searchPages);
  const [showGetMoreBtn, setShowGetMoreBtn] = useState(true);
  const handleThrottle = useThrottle();

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
        setShowGetMoreBtn(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

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
        setShowGetMoreBtn(true);
      }
      fetchData();
    }
  }, [searchingAttempt, page]);

  const onClickMoreBtn = () => {
    setPage(page + 1);
  };

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
      <StyledButtonWrapper>
        {showGetMoreBtn ? (
          <Button
            variant="blue"
            onClick={() => {
              handleThrottle(onClickMoreBtn);
            }}
            style={{ zIndex: '10' }}
          >
            더보기
          </Button>
        ) : (
          <>찾으시는 숙소가 더이상 없습니다.</>
        )}
      </StyledButtonWrapper>
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

const StyledButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  margin: 5rem;
`;
