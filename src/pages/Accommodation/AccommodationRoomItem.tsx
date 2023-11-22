import styled from '@emotion/styled';
import { useState } from 'react';
import { StarFilled, ShoppingCartOutlined } from '@ant-design/icons';
import { Heading, Text, Button } from '@chakra-ui/react';
import { theme } from '../../styles/theme';

function AccommodationRoomItem() {
  const [cartHover, setCartHover] = useState(false);

  const handleCartMouseEnter = () => {
    setCartHover(true);
  };

  const handleCartMouseLeave = () => {
    setCartHover(false);
  };

  return (
    <StyledAccommodationRoomItemWrapper>
      <StyledAccommodationRoomImg />
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
            <ShoppingCartOutlined
              style={{
                fontSize: '30px',
                color: cartHover
                  ? `${theme.colors.basic}`
                  : `${theme.colors.gray300}`,
                marginRight: '1rem',
                cursor: 'pointer',
              }}
              onMouseEnter={handleCartMouseEnter}
              onMouseLeave={handleCartMouseLeave}
            />
            <Button
              variant="blue"
              size="lg"
              style={{ width: '100px', height: '40px' }}
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
  height: 300px;
  border-radius: 15px;
  background-color: ${theme.colors.gray100};
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
