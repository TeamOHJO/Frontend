import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { useRecoilState } from 'recoil';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '@chakra-ui/react';
import { v4 as uuid } from 'uuid';
import { searchFilteredState, searchAttempt, accommodationList } from '../../states/atom';
import { getAccommodationList } from '../../api';
import HomeCard from './HomeCard';
import { changeCategoryFormat } from '../../utils/utils';

const ContentsContainer = () => {
  const [list, setList] = useRecoilState(accommodationList);
  const { id } = useParams();
  const navigate = useNavigate();
  const [searchFilter, setSearchFilter] = useRecoilState(searchFilteredState);
  const [searchingAttempt, setSearchingAttempt] = useRecoilState(searchAttempt);
  const [page, setPage] = useState(0);
  const [showGetMoreBtn, setShowGetMoreBtn] = useState(true);

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
      setList(data);
      if (!data.length) {
        setShowGetMoreBtn(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setPage(0);
    const newCat = changeCategoryFormat(id);
    const newSearchFilter = { ...searchFilter, category: newCat };
    setSearchFilter(newSearchFilter);
    setSearchingAttempt(searchingAttempt + 1);
  }, [navigate]);

  useEffect(() => {
    if (page === 0) {
      fetchData();
      setShowGetMoreBtn(true);
    }
  }, [searchingAttempt, page]);

  const getMoreData = async () => {
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
        setList((prevList: any[]) => [...prevList, ...data]);
      } else {
        setShowGetMoreBtn(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const onClickMoreBtn = () => {
    const newFilter = { ...searchFilter };
    setSearchFilter(newFilter);
    setPage(page + 1);
  };

  useEffect(() => {
    if (page !== 0) {
      getMoreData();
    }
  }, [page]);

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
              onClickMoreBtn();
            }}
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
  margin: 5rem;
`;
