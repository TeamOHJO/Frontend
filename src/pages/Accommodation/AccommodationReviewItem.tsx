import styled from '@emotion/styled';
import { StarFilled } from '@ant-design/icons';
import { Heading, Text } from '@chakra-ui/react';
import { theme } from '../../styles/theme';

function AccommodationReviewItem() {
  return (
    <StyledAccommodationReviewItemWrapper>
      <StyledAccommodationReviewItemTop>
        <StyledAccommodationReviewItemTopLeft>
          <div>
            <StarFilled
              style={{ color: `${theme.colors.blue400}`, fontSize: '0.8rem' }}
            />
            <StyledStarDigit>4.90</StyledStarDigit>
          </div>
          <Heading as="h4" size="sm">
            000님
          </Heading>
        </StyledAccommodationReviewItemTopLeft>
        <Text as="p" size="sm" color="gray.84">
          2023년 11월 22일 ~ 11월 23일
        </Text>
      </StyledAccommodationReviewItemTop>
      <StyledAccommodationReviewItemTitle>
        <Heading as="h4" size="sm">
          000님
        </Heading>
        <Text as="p" size="sm" color="gray.84">
          2023년 11월 22일 ~ 11월 23일
        </Text>
      </StyledAccommodationReviewItemTitle>
      <StyledAccommodationReviewItemContent>
        <Text as="p" size="sm" color="basic">
          위치도 나카노역이라 신주쿠가 강남이라면 숙소는 서초교대 정도 느낌이라
          접근성도 좋은데 주변이 진짜 완전 조용하고 아따맘마재질이라 좋음.
          숙소는 2인이상은 좀 힘들거같고 깨끗함...
        </Text>
      </StyledAccommodationReviewItemContent>
    </StyledAccommodationReviewItemWrapper>
  );
}

export default AccommodationReviewItem;

const StyledAccommodationReviewItemWrapper = styled.div`
  width: 50%;
  min-width: 350px;
  height: 200px;

  border-radius: 15px;
  box-shadow: ${theme.shadows.shadow2.shadow};

  margin: 1rem;
  padding: 1rem;

  background-color: ${theme.colors.white};
`;

const StyledAccommodationReviewItemTop = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledAccommodationReviewItemTopLeft = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledStarDigit = styled.span`
  margin-left: 0.5rem;
  margin-right: 1rem;
  font-size: 0.8rem;
`;

const StyledAccommodationReviewItemTitle = styled.div`
  width: 100%;
  margin: 0.5rem 0;
`;

const StyledAccommodationReviewItemContent = styled.div`
  width: 100%;
`;
