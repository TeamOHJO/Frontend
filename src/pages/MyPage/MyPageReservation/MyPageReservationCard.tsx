import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { Card, CardBody, Image, Box, Badge, Text, Button } from '@chakra-ui/react';
import { StarFilled } from '@ant-design/icons';
import { theme } from '../../../styles/theme';
import { MyPageReservationData } from '../../../@types/interface';
import { handleBadgeColor } from '../../../utils/handleBadgeColor';
import { CancelReservation } from '../../../api';
import { changeCategoryReverseFormat, changeStarFormat, countDay } from '../../../utils/utils';

interface MyPageReservationCardProps {
  item: MyPageReservationData;
}

function MyPageReservationCard({ item }: MyPageReservationCardProps) {
  const navigate = useNavigate();
  const TODAY = new Date();
  const nights = countDay(item.startDate, item.endDate);
  const badgeText = changeCategoryReverseFormat(item.category);
  const badgeColor = handleBadgeColor(badgeText);

  // 예약 취소 함수
  const onClickCancelButton = async (id: number) => {
    try {
      await CancelReservation(id);
      console.log(id, '취소 완료');
      // toast popup
    } catch (err) {
      console.log(err);
      console.log(id, '취소 실패');
      // toast popup
    }
  };

  // 리뷰 작성 페이지로 이동
  const onClickWriteReview = (id: number) => {
    navigate(`/mypage/review/write/${id}`);
  };

  // 객실 상세 페이지로 이동
  const moveToDetails = () => {
    navigate(`/room/${item.roomId}`);
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
          onClick={moveToDetails}
          style={{ cursor: 'pointer' }}
        />
        <StyledCardContent>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Box textAlign="left">
              <Badge variant={badgeColor}>{badgeText}</Badge>
            </Box>
            <StyledStar>
              <StarFilled style={{ color: theme.colors.blue400, fontSize: '1rem' }} />
              <Text as="span" size="xs">
                {changeStarFormat(item.star)}
              </Text>
            </StyledStar>
          </Box>
          <StyledTitle onClick={moveToDetails}>{item.accommodationName}</StyledTitle>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <StyledCardBodyLeft>
              <StyledText size="sm">{item.roomName}</StyledText>
              <Text as="p" size="xs" color="blackAlpha.600">
                {item.startDate} - {item.endDate} ({nights}박)
              </Text>
            </StyledCardBodyLeft>
            {!item.deletedAt && TODAY < new Date(item.startDate) && (
              <Button
                variant="gray"
                size="sm"
                onClick={() => onClickCancelButton(item.reservationId)}
              >
                예약 취소
              </Button>
            )}
            {!item.deletedAt && new Date(item.endDate) < TODAY && (
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
          </Box>
        </StyledCardContent>
      </CardBody>
    </Card>
  );
}

export default MyPageReservationCard;

const StyledCardBodyLeft = styled(Box)`
  max-width: calc(100% - 72px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2px;
`;

const StyledStar = styled(Box)`
  display: flex;
  align-items: center;
  gap: 3px;
`;

const StyledCardContent = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 1rem;
  gap: 3px;
`;

const StyledTitle = styled.h1`
  width: 100%;
  font-size: 1rem;
  font-weight: bold;
  text-align: left;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;

  :hover {
    cursor: pointer;
  }
`;

const StyledText = styled(Text)`
  width: 100%;
  text-align: left;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
`;
