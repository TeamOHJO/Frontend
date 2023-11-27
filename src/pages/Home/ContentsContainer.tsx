import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { useRecoilValue } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { Button } from '@chakra-ui/react';
import { searchFilteredState, searchAttempt } from '../../states/atom';
import { getAccommodationList } from '../../api';
import HomeCard from './HomeCard';

const ContentsContainer = () => {
  const [list, setList] = useState([]);
  const navigate = useNavigate();
  const searchFilter = useRecoilValue(searchFilteredState);
  const searchingAttempt = useRecoilValue(searchAttempt);
  /* eslint-disable */
  const { category, isDomestic, startDate, endDate, numberOfPeople } =
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

  return (
    <StyledContainer>
      {list.map((e: any) => {
        return (
          <HomeCard
            key={e.accommodationId}
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
        <Button colorScheme="blue">더보기</Button>
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
