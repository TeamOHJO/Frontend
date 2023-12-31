import React, { Suspense } from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { StarFilled } from '@ant-design/icons';
import { Text } from '@chakra-ui/react';
import { theme } from '../../styles/theme';
import { HomeCardProps } from '../../@types/interface';
import { changeCategoryReverseFormat, changeStarFormat, cutStringLength } from '../../utils/utils';
import HomeHeart from './HomeHeart';
import Skeleton from '../../components/Loading/Skeleton';

const Swiper = React.lazy(() => import('./HomeSwiper'));

const HomeCard = ({ id, name, images, category, score, price, isLiked }: HomeCardProps) => {
  const navigate = useNavigate();

  return (
    <StyledCard>
      <StyledImgWrapper>
        <HomeHeart liked={isLiked} size="20px" id={String(id)} />
        <Suspense fallback={<Skeleton />}>
          <Swiper images={images} borderRadius="8px" id={id} />
        </Suspense>
      </StyledImgWrapper>
      <StyledInfoContainer
        onClick={() => {
          navigate(`/accommodation/${id}`);
        }}
      >
        <StyledCardHeader>
          <Text as="p" size="md" style={{ fontWeight: '500' }}>
            {cutStringLength(name)}
          </Text>
          <StyledScoreWrapper>
            <StarFilled style={{ color: theme.colors.blue400, fontSize: '12px' }} />
            <StyledScoreDigit>{changeStarFormat(score)}</StyledScoreDigit>
          </StyledScoreWrapper>
        </StyledCardHeader>
        <StyledCategoryWrapper>{changeCategoryReverseFormat(category)}</StyledCategoryWrapper>
        <StyledPriceWrapper>{`₩ ${price.toLocaleString()}원/박`}</StyledPriceWrapper>
      </StyledInfoContainer>
    </StyledCard>
  );
};

export default HomeCard;

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  margin: 1rem;
  width: 45%;

  background-color: ${theme.colors.white};
  border-radius: 8px;

  &:hover {
    background-color: ${theme.colors.gray100};
  }
  @media screen and (max-width: 700px) {
    width: 90%;
  }
`;

const StyledImgWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  border-radius: 8px;
  box-shadow: ${theme.shadows.shadow2.shadow};
`;

const StyledInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  cursor: pointer;
`;

const StyledCardHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const StyledScoreWrapper = styled.div`
  min-width: 50px;
  font-size: 12px;
`;

const StyledScoreDigit = styled.span`
  padding-left: 5px;
`;

const StyledCategoryWrapper = styled.div`
  margin-top: 3px;
  color: ${theme.colors.gray500};
`;

const StyledPriceWrapper = styled.div`
  padding: 0.5rem 0;
`;
