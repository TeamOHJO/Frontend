import styled from '@emotion/styled';
import HomeCard from './HomeCard';
import { HomeCardProps } from '../../@types/interface';

const dummy = [
  {
    name: '신라호텔',
    images: [
      'https://i.ytimg.com/vi/Q7pR7uazGgU/maxresdefault.jpg',
      'https://i.ytimg.com/vi/Q7pR7uazGgU/maxresdefault.jpg',
      'https://i.ytimg.com/vi/Q7pR7uazGgU/maxresdefault.jpg',
      'https://i.ytimg.com/vi/Q7pR7uazGgU/maxresdefault.jpg',
    ],
    category: '호텔/리조트',
    score: 4.9,
    price: 123400,
  },
  {
    name: '백제호텔',
    images: [
      'https://i.ytimg.com/vi/Q7pR7uazGgU/maxresdefault.jpg',
      'https://i.ytimg.com/vi/Q7pR7uazGgU/maxresdefault.jpg',
      'https://i.ytimg.com/vi/Q7pR7uazGgU/maxresdefault.jpg',
      'https://i.ytimg.com/vi/Q7pR7uazGgU/maxresdefault.jpg',
    ],
    category: '호텔/리조트',
    score: 4.8,
    price: 122000,
  },
  {
    name: '미국호텔',
    images: [
      'https://i.ytimg.com/vi/Q7pR7uazGgU/maxresdefault.jpg',
      'https://i.ytimg.com/vi/Q7pR7uazGgU/maxresdefault.jpg',
      'https://i.ytimg.com/vi/Q7pR7uazGgU/maxresdefault.jpg',
      'https://i.ytimg.com/vi/Q7pR7uazGgU/maxresdefault.jpg',
    ],
    category: '호텔/리조트',
    score: 4.5,
    price: 132000,
  },
  {
    name: '일본호텔',
    images: [
      'https://i.ytimg.com/vi/Q7pR7uazGgU/maxresdefault.jpg',
      'https://i.ytimg.com/vi/Q7pR7uazGgU/maxresdefault.jpg',
      'https://i.ytimg.com/vi/Q7pR7uazGgU/maxresdefault.jpg',
      'https://i.ytimg.com/vi/Q7pR7uazGgU/maxresdefault.jpg',
    ],
    category: '호텔/리조트',
    score: 3.0,
    price: 52000,
  },
  {
    name: '중국호텔',
    images: [
      'https://i.ytimg.com/vi/Q7pR7uazGgU/maxresdefault.jpg',
      'https://i.ytimg.com/vi/Q7pR7uazGgU/maxresdefault.jpg',
      'https://i.ytimg.com/vi/Q7pR7uazGgU/maxresdefault.jpg',
      'https://i.ytimg.com/vi/Q7pR7uazGgU/maxresdefault.jpg',
    ],
    category: '호텔/리조트',
    score: 4.2,
    price: 122000,
  },
  {
    name: '뉴욕호텔',
    images: [
      'https://i.ytimg.com/vi/Q7pR7uazGgU/maxresdefault.jpg',
      'https://i.ytimg.com/vi/Q7pR7uazGgU/maxresdefault.jpg',
      'https://i.ytimg.com/vi/Q7pR7uazGgU/maxresdefault.jpg',
      'https://i.ytimg.com/vi/Q7pR7uazGgU/maxresdefault.jpg',
    ],
    category: '호텔/리조트',
    score: 4.1,
    price: 124300,
  },
  {
    name: '파리호텔',
    images: [
      'https://i.ytimg.com/vi/Q7pR7uazGgU/maxresdefault.jpg',
      'https://i.ytimg.com/vi/Q7pR7uazGgU/maxresdefault.jpg',
      'https://i.ytimg.com/vi/Q7pR7uazGgU/maxresdefault.jpg',
      'https://i.ytimg.com/vi/Q7pR7uazGgU/maxresdefault.jpg',
    ],
    category: '호텔/리조트',
    score: 4.5,
    price: 124200,
  },
  {
    name: '로마호텔',
    images: [
      'https://i.ytimg.com/vi/Q7pR7uazGgU/maxresdefault.jpg',
      'https://i.ytimg.com/vi/Q7pR7uazGgU/maxresdefault.jpg',
      'https://i.ytimg.com/vi/Q7pR7uazGgU/maxresdefault.jpg',
      'https://i.ytimg.com/vi/Q7pR7uazGgU/maxresdefault.jpg',
    ],
    category: '호텔/리조트',
    score: 4.9,
    price: 124300,
  },
];

const ContentsContainer = () => {
  return (
    <StyledContainer>
      {dummy.map((e: HomeCardProps) => {
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
