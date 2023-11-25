import styled from '@emotion/styled';
import {
  Card,
  CardBody,
  Image,
  Box,
  Badge,
  Heading,
  Text,
  Button,
} from '@chakra-ui/react';
import { StarFilled } from '@ant-design/icons';
import { theme } from '../../../styles/theme';
import { ReservationData } from '../../../@types/interface';
import { handleBadgeColor } from '../../../utils/handleBadgeColor';

interface MyPageReservationCardProps {
  item: ReservationData;
}

function MyPageReservationCard({ item }: MyPageReservationCardProps) {
  const badgeColor = handleBadgeColor(item.category);

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
              <Badge variant={badgeColor}>{item.category}</Badge>
            </Box>
            <Heading size="md">{item.accommodationName}</Heading>
            <Text size="sm">{item.name}</Text>
            <Text as="p" size="xs" color="blackAlpha.600">
              {item.startTime} - {item.endTime} ({item.nights}박)
            </Text>
          </StyledCardBodyLeft>
          <StyledCardBodyRight>
            <StyledStar>
              <StarFilled
                style={{ color: theme.colors.blue400, fontSize: '1rem' }}
              />
              <Text as="span" size="xs">
                {item.stars.toFixed(2)}
              </Text>
            </StyledStar>
            {item.deletedAt ? (
              <Button variant="gray" size="sm">
                예약 취소
              </Button>
            ) : (
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
