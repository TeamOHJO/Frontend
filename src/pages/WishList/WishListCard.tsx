import styled from '@emotion/styled';
import { Card, Image, Text, Badge, Box, CardBody } from '@chakra-ui/react';
import { EnvironmentOutlined } from '@ant-design/icons';
import { WishlistData } from '../../@types/interface';
import { handleBadgeColor } from '../../utils/handleBadgeColor';
import WishlistHeart from '../../components/WishlistHeart';

function WishListCard({ item }: { item: WishlistData }) {
  const badgeColor = handleBadgeColor(item.category);
  return (
    <Card size="sm" maxWidth="360px">
      <CardBody display="flex" flexDirection="row" gap={3}>
        <Image
          boxSize="110px"
          objectFit="cover"
          borderRadius={8}
          src={item.image}
          alt="Accomodation Photo"
        />
        <StyledBox>
          <Box
            width="100%"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            gap="5px"
          >
            <StyledTitle>{item.name}</StyledTitle>
            <WishlistHeart liked={item.liked} accommodationId={item.accommodationId} />
          </Box>
          <Box textAlign="left">
            <Badge variant={badgeColor}>{item.category}</Badge>
          </Box>
          <Box display="flex" alignItems="center" gap={1} mt="5px">
            <EnvironmentOutlined
              style={{
                color: '#848484',
              }}
            />
            <StyledText as="span" size="xs" color="gray.84">
              {item.location}
            </StyledText>
          </Box>
          <Text as="span" size="sm" color="gray.84" textAlign="right">
            최소 금액 ￦{item.price.toLocaleString()}
          </Text>
        </StyledBox>
      </CardBody>
    </Card>
  );
}

export default WishListCard;

const StyledBox = styled.div`
  width: calc(100% - 120px);
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const StyledTitle = styled.h1`
  font-size: 14px;
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
