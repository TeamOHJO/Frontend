import {
  Card,
  Image,
  Heading,
  Text,
  Badge,
  Box,
  CardBody,
  Stack,
} from '@chakra-ui/react';
import { EnvironmentOutlined } from '@ant-design/icons';
import { WishlistData } from '../../@types/interface';
import Heart from '../../components/Heart';
import { handleBadgeColor } from '../../utils/handleBadgeColor';

function WishListCard({ item }: { item: WishlistData }) {
  const badgeColor = handleBadgeColor(item.category);
  return (
    <Card size="sm">
      <CardBody display="flex" flexDirection="row" gap={3}>
        <Image
          boxSize="110px"
          objectFit="cover"
          borderRadius={8}
          src={item.image}
          alt="Accomodation Photo"
        />
        <Stack width="100%">
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Heading size="sm">{item.accommodationName}</Heading>
            <Heart isLiked={item.isLiked} />
          </Box>
          <Box textAlign="left">
            <Badge variant={badgeColor}>{item.category}</Badge>
          </Box>
          <Box display="flex" alignItems="center" gap={1}>
            <EnvironmentOutlined
              style={{
                color: '#848484',
              }}
            />
            <Text as="span" size="xs" color="gray.84">
              {item.location}
            </Text>
          </Box>
          <Text as="span" size="sm" color="gray.84" textAlign="right">
            ·최소 금액 ￦{item.lowestPrice.toLocaleString()}
          </Text>
        </Stack>
      </CardBody>
    </Card>
  );
}

export default WishListCard;
