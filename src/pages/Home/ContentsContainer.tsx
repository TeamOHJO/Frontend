import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { Button } from '@chakra-ui/react';
import HomeCard from './HomeCard';
import { HomeCardProps } from '../../@types/interface';

const ContentsContainer = () => {
  const [list, setList] = useState([]);

  const fetchData = async () => {
    const response = await fetch(
      'http://localhost:5173/data/accommodationList.json',
      {
        method: 'GET',
      },
    );
    setList(await response.json());
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <StyledContainer>
      {list.map((e: HomeCardProps) => {
        return (
          <HomeCard
            key={String(e.price * e.score) + e.name}
            name={e.name}
            images={e.images}
            category={e.category}
            score={e.score}
            price={e.price}
            isLiked={e.isLiked}
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
