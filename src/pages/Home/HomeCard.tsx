import styled from '@emotion/styled';
import { StarFilled } from '@ant-design/icons';
import { Text } from '@chakra-ui/react';
import { theme } from '../../styles/theme';
import { HomeCardProps } from '../../@types/interface';

const HomeCard = ({ name, category, score, price }: HomeCardProps) => {
  return (
    <StyledCard>
      <StyledImgWrapper />
      <StyledInfoContainer>
        <StyledCardHeader>
          <Text as="p" size="lg">
            {name}
          </Text>
          <StyledScoreWrapper>
            <StarFilled
              style={{ color: theme.colors.blue400, fontSize: '1rem' }}
            />
            <StyledScoreDigit>{score}</StyledScoreDigit>
          </StyledScoreWrapper>
        </StyledCardHeader>
        <StyledCategoryWrapper>{category}</StyledCategoryWrapper>
        <StyledPriceWrapper>{`₩ ${price}원/박`}</StyledPriceWrapper>
      </StyledInfoContainer>
    </StyledCard>
  );
};

export default HomeCard;

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  width: 45%;

  background-color: ${theme.colors.white};
  border-radius: 8px;

  @media screen and (max-width: 700px) {
    width: 90%;
  }
`;

const StyledImgWrapper = styled.div`
  width: 100%;
  height: 300px;
  border-radius: 8px;
  box-shadow: ${theme.shadows.shadow3.shadow};
`; // 추후 슬라이드 컴포넌트로 대체

const StyledInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem 0rem 1rem;
`;

const StyledCardHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const StyledScoreWrapper = styled.div`
  min-width: 50px;
`;

const StyledScoreDigit = styled.span`
  padding-left: 5px;
`;

const StyledCategoryWrapper = styled.div`
  color: ${theme.colors.gray400};
`;

const StyledPriceWrapper = styled.div`
  padding-top: 1rem;
`;
