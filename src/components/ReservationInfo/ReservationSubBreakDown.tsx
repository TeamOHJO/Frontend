import { Box, Image, Text } from '@chakra-ui/react';
import { theme } from '../../styles/theme';
import LocationIcon from '../../assets/location-outline.svg';

const ReservationSubBreakDown = () => {
  return (
    <Box
      display="flex"
      flexDir="row"
      pl="8"
      pr="8"
      justifyContent="space-between"
    >
      <Box display="flex" flexDir="column" gap="2">
        <Text fontFamily={theme.fonts.body4} color={theme.colors.gray400}>
          체크인: 15:00 이후, 체크아웃: 10:00 이전
        </Text>
        <Box display="flex" flexDir="row">
          <Image src={LocationIcon} alt="Loaction Icon" boxSize={5} />
          <Text fontFamily={theme.fonts.body4} color={theme.colors.basic}>
            강원도 강릉시 옥계면 헌화로 455-34
          </Text>
        </Box>
      </Box>
      <Box display="flex" flexDir="column">
        <Text fontWeight="bold" fontSize="lg">
          ￦435,400원{' '}
        </Text>
        <Text fontWeight="re" fontSize="md" color={theme.colors.gray400}>
          3박 요금(세금 포함)
        </Text>
      </Box>
    </Box>
  );
};

export default ReservationSubBreakDown;
