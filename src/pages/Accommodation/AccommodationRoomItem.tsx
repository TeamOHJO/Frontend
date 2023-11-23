import styled from '@emotion/styled';
import { StarFilled } from '@ant-design/icons';
import { useState } from 'react';

import { Heading, Text, Button } from '@chakra-ui/react';
import { theme } from '../../styles/theme';
import SwiperComponent from '../../components/Swiper/SwiperComponent';

function AccommodationRoomItem() {
  const [cartHover, setCartHover] = useState(false);

  const handleCartMouseEnter = () => {
    setCartHover(true);
  };

  const handleCartMouseLeave = () => {
    setCartHover(false);
  };

  const images: string[] = [
    'https://i.ytimg.com/vi/Q7pR7uazGgU/maxresdefault.jpg',
    'https://i.ytimg.com/vi/Q7pR7uazGgU/maxresdefault.jpg',
    'https://i.ytimg.com/vi/Q7pR7uazGgU/maxresdefault.jpg',
    'https://i.ytimg.com/vi/Q7pR7uazGgU/maxresdefault.jpg',
  ];
  return (
    <StyledAccommodationRoomItemWrapper>
      <StyledAccommodationRoomImg>
        <SwiperComponent borderRadius="15px" images={images} />
      </StyledAccommodationRoomImg>
      <StyledAccommodationRoomTitle>
        <StyledAccommodationRoomTitleBox style={{ marginBottom: '0.5rem' }}>
          <Heading as="h4" size="sm">
            101호
          </Heading>
          <div>
            <StarFilled
              style={{ color: `${theme.colors.blue400}`, fontSize: '0.8rem' }}
            />
            <StyledStarDigit>4.90</StyledStarDigit>
          </div>
        </StyledAccommodationRoomTitleBox>
        <StyledAccommodationRoomTitleBox>
          <div>
            <Text as="p" size="sm" color="gray.84">
              최소 2명 / 최대 4명
            </Text>
            <Text as="p" size="sm">
              ￦83,400원/박
            </Text>
          </div>
          <StyledAccommodationRoomTitleBoxItem>
            {/* 툴팁 작업 필요 */}
            <StyledAccommodationRoomItemCart
              className="material-symbols-outlined"
              onMouseEnter={handleCartMouseEnter}
              onMouseLeave={handleCartMouseLeave}
            >
              add_shopping_cart
              {cartHover ? (
                <StyledTooltip style={{ fontFamily: 'Noto Sans KR' }}>
                  장바구니 담기
                </StyledTooltip>
              ) : (
                ''
              )}
            </StyledAccommodationRoomItemCart>
            <Button
              variant="blue"
              size="lg"
              style={{ width: '100px', height: '40px' }}
              isDisabled={false}
            >
              예약하기
            </Button>
          </StyledAccommodationRoomTitleBoxItem>
        </StyledAccommodationRoomTitleBox>
      </StyledAccommodationRoomTitle>
    </StyledAccommodationRoomItemWrapper>
  );
}

export default AccommodationRoomItem;

const StyledAccommodationRoomItemWrapper = styled.div`
  width: 100%;

  margin-bottom: 2rem;
`;

const StyledAccommodationRoomImg = styled.div`
  width: 100%;
  height: 350px;
  border-radius: 15px;
  box-shadow: ${theme.shadows.shadow1.shadow};
`;

const StyledAccommodationRoomTitle = styled.div`
  width: 100%;
  height: 100px;
  padding: 0.8rem;
`;

const StyledAccommodationRoomTitleBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledStarDigit = styled.span`
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  font-size: 0.8rem;
`;

const StyledAccommodationRoomTitleBoxItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledAccommodationRoomItemCart = styled.span`
  position: relative;
  font-size: 30px;
  color: ${theme.colors.gray300};
  margin-right: 1rem;
  cursor: pointer;
  &:hover {
    color: ${theme.colors.basic};
  }
`;

const StyledTooltip = styled.span`
  position: absolute;
  top: 40px;
  left: -42px;

  padding: 0.5rem 1rem;

  font-size: 14px;
  color: #fff;
  background-color: #000;

  text-align: center;

  border-radius: 5px;
  &:after {
    content: ' ';

    position: absolute;
    top: -20px;
    left: 50%;

    margin-left: -10px;

    border-width: 10px;
    border-style: solid;
    border-color: transparent transparent #000 transparent;

    font-family: 'Noto Sans KR', sans-serif;
  }
`;
