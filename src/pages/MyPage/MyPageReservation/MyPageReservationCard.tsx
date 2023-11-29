import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { Card, CardBody, Image, Box, Badge, Heading, Text, Button } from '@chakra-ui/react';
import { StarFilled } from '@ant-design/icons';
import { theme } from '../../../styles/theme';
import { MyPageReservationData } from '../../../@types/interface';
import { handleBadgeColor } from '../../../utils/handleBadgeColor';
import { CancelReservation } from '../../../api';
import { changeCategoryReverseFormat, changeStarFormat } from '../../../utils/utils';

interface MyPageReservationCardProps {
  item: MyPageReservationData;
}

function MyPageReservationCard({ item }: MyPageReservationCardProps) {
  const navigate = useNavigate();
  const TODAY = new Date();
  const badgeText = changeCategoryReverseFormat(item.category);
  const badgeColor = handleBadgeColor(badgeText);

  const countDay = (startDate: string, endDate: string) => {
    const diffDate = new Date(endDate).getTime() - new Date(startDate).getTime();
    return Math.abs(diffDate / (1000 * 60 * 60 * 24)); // 밀리세컨 * 초 * 분 * 시 = 일
  };

  const nights = countDay(item.startDate, item.endDate);

  // 예약 취소 버튼 클릭시 실행 함수
  const onClickCancelButton = async (id: number) => {
    try {
      await CancelReservation(id);
      console.log(id, '취소 완료');
    } catch (err) {
      console.log(err);
      console.log(id, '취소 실패');
    }
  };

  const onClickWriteReview = (id: number) => {
    navigate(`/mypage/review/write/${id}`);
  };

  return (
    <Card size="sm">
      <CardBody>
        <Image
          width="100%"
          height="290px"
          objectFit="cover"
          src={item.image}
          alt="Accommodation Photo"
          borderRadius="lg"
        />
        <StyledCardContent>
          <StyledCardBodyLeft>
            <Box textAlign="left">
              <Badge variant={badgeColor}>{badgeText}</Badge>
            </Box>
            <Heading size="md">{item.accommodationName}</Heading>
            <Text size="sm">{item.roomName}</Text>
            <Text as="p" size="xs" color="blackAlpha.600">
              {item.startDate} - {item.endDate} ({nights}박)
            </Text>
          </StyledCardBodyLeft>
          <StyledCardBodyRight>
            <StyledStar>
              <StarFilled style={{ color: theme.colors.blue400, fontSize: '1rem' }} />
              <Text as="span" size="xs">
                {changeStarFormat(item.star)}
              </Text>
            </StyledStar>
            {item.deletedAt === null && TODAY < new Date(item.startDate) && (
              <Button
                variant="gray"
                size="sm"
                onClick={() => onClickCancelButton(item.reservationId)}
              >
                예약 취소
              </Button>
            )}
            {item.deletedAt === null && new Date(item.endDate) < TODAY && (
              <Button
                variant="gray"
                size="sm"
                onClick={() => onClickWriteReview(item.reservationId)}
              >
                리뷰 작성
              </Button>
            )}
            {item.deletedAt && (
              <Text size="sm" fontWeight="bold" color="red.500">
                취소됨
              </Text>
            )}
          </StyledCardBodyRight>
        </StyledCardContent>
      </CardBody>
    </Card>
  );
}

export default MyPageReservationCard;

const StyledCardBodyLeft = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 3px;
`;
const StyledCardBodyRight = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
`;

const StyledStar = styled(Box)`
  display: flex;
  align-items: center;
  gap: 3px;
`;

const StyledCardContent = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 1rem;
`;
