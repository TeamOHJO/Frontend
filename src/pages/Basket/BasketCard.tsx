import { useRecoilState } from 'recoil';
import styled from '@emotion/styled';
import {
  Card,
  Image,
  Text,
  Box,
  CardBody,
  Flex,
  Badge,
  CardFooter,
  Button,
} from '@chakra-ui/react';
import { CloseOutlined, StarFilled } from '@ant-design/icons';
import { theme } from '../../styles/theme';
import { BasketData } from '../../@types/interface';
import { handleBadgeColor } from '../../utils/handleBadgeColor';
import { DeleteBasketItem } from '../../api';
import { basketDataState } from '../../states/atom';
import {
  changeCategoryReverseFormat,
  changePriceDiscountFormat,
  changeStarFormat,
} from '../../utils/utils';

interface ToastData {
  active: boolean;
  message: string;
}

interface BasketCardProps {
  item: BasketData;
  setShowAlert: (value: ToastData) => void;
}

function BasketCard({ item, setShowAlert }: BasketCardProps) {
  const [basketData, setBasketData] = useRecoilState(basketDataState);

  const toastFunc = (text: string) => {
    const toastData = {
      active: true,
      message: text,
    };
    setShowAlert(toastData);
  };

  const countDay = (startDate: string, endDate: string) => {
    const diffDate = new Date(endDate).getTime() - new Date(startDate).getTime();
    return Math.abs(diffDate / (1000 * 60 * 60 * 24)); // 밀리세컨 * 초 * 분 * 시 = 일
  };

  const nights = countDay(item.startDate, item.endDate);
  const totalPrice = item.price * nights;

  const badgeText = changeCategoryReverseFormat(item.category);
  const badgeColor = handleBadgeColor(badgeText);

  const discountPrice = changePriceDiscountFormat(item.price, item.discountPercentage, nights);

  const deleteSingleItem = async (id: number) => {
    await DeleteBasketItem(id);
    setBasketData(basketData.filter((product: BasketData) => product.basketId !== id));
    toastFunc('숙소를 삭제하였습니다.');
  };

  return (
    <Card size="sm">
      <CardBody display="flex" flexDirection="row" gap={3}>
        <Image
          boxSize="110px"
          objectFit="cover"
          borderRadius={8}
          src={item.image}
          alt="Accommodation Photo"
        />
        <StyledBox>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Box textAlign="left">
              <Badge variant={badgeColor}>{badgeText}</Badge>
            </Box>
            <CloseOutlined
              onClick={() => deleteSingleItem(item.basketId)}
              style={{ fontSize: '20px', cursor: 'pointer' }}
            />
          </Box>
          <StyledTitle>{item.accommodationName}</StyledTitle>
          <StyledText size="sm">{item.roomName}</StyledText>
          <Text as="p" size="xs" color="blackAlpha.600">
            {item.startDate} ~ {item.endDate} ({nights}박)
          </Text>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Box display="flex" alignItems="center" gap={1}>
              <StarFilled style={{ color: theme.colors.blue400, fontSize: '1rem' }} />
              <Text as="span" size="xs">
                {changeStarFormat(item.star)}
              </Text>
            </Box>
          </Box>
        </StyledBox>
      </CardBody>
      <CardFooter
        pt={0}
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        // gap={3}
      >
        <Button variant="blue" size="sm" width="150px">
          예약하기
        </Button>
        <Flex direction="column" alignItems="flex-end">
          {item.discountPercentage === 0 ? (
            <>
              <Text as="p" size="md" fontWeight="bold">
                ￦{totalPrice.toLocaleString()}
              </Text>
              <Text as="p" size="xs" color="blackAlpha.600">
                {nights}박 요금 (세금 포함)
              </Text>
            </>
          ) : (
            <>
              <Text as="p" size="md" fontWeight="bold">
                <Badge variant="red">{item.discountPercentage}% 할인</Badge> ￦{discountPrice}
              </Text>
              <Text as="s" size="xs" color="blackAlpha.600">
                ￦ {totalPrice.toLocaleString()}
              </Text>
            </>
          )}
        </Flex>
      </CardFooter>
    </Card>
  );
}

export default BasketCard;

const StyledBox = styled.div`
  width: calc(100% - 123px);
  display: flex;
  flex-direction: column;
  gap: 1px;
`;

const StyledTitle = styled.h1`
  width: 95%;
  font-size: 1rem;
  font-weight: bold;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
`;

const StyledText = styled(Text)`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
`;
