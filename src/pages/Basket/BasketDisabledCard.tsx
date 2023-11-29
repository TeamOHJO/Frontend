import { useRecoilState } from 'recoil';
import styled from '@emotion/styled';
import { Card, Image, Text, Box, CardBody, Badge, CardFooter } from '@chakra-ui/react';
import { StarFilled, CloseOutlined } from '@ant-design/icons';
import { BasketData } from '../../@types/interface';
import { basketDataState } from '../../states/atom';
import { DeleteBasketItem } from '../../api';
import { changeCategoryReverseFormat, changeStarFormat } from '../../utils/utils';

interface ToastData {
  active: boolean;
  message: string;
}

interface BasketCardProps {
  item: BasketData;
  setShowAlert: (value: ToastData) => void;
}
function BasketDisabledCard({ item, setShowAlert }: BasketCardProps) {
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
              <Badge variant="disabled">{badgeText}</Badge>
            </Box>
            <CloseOutlined
              onClick={() => deleteSingleItem(item.basketId)}
              style={{ fontSize: '20px', cursor: 'pointer' }}
            />
          </Box>
          <StyledTitle>{item.accommodationName}</StyledTitle>
          <StyledText size="sm" color="blackAlpha.600">
            {item.roomName}
          </StyledText>
          <Text as="p" size="xs" color="blackAlpha.600">
            {item.startDate} ~ {item.endDate} ({nights}박)
          </Text>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Box display="flex" alignItems="center" gap={1}>
              <StarFilled
                style={{
                  fontSize: '1rem',
                  color: 'RGBA(0, 0, 0, 0.48)',
                }}
              />
              <Text as="span" size="xs" color="blackAlpha.600">
                {changeStarFormat(item.star)}
              </Text>
            </Box>
          </Box>
        </StyledBox>
      </CardBody>
      <CardFooter pt={0} display="flex" flexDirection="column" alignItems="flex-end">
        <Text as="s" size="md" fontWeight="bold" color="blackAlpha.600">
          ￦{totalPrice.toLocaleString()}
        </Text>
        <Text as="p" fontWeight="bold" size="xs" color="red.500">
          예약 마감
        </Text>
      </CardFooter>
    </Card>
  );
}

export default BasketDisabledCard;

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
  color: rgba(0, 0, 0, 0.48);

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
