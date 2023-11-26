import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
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
            key={e.price * e.score}
            name={e.name}
            images={e.images}
            category={e.category}
            score={e.score}
            price={e.price}
          />
        );
      })}
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
