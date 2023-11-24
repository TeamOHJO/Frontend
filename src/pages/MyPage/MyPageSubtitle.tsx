import { Text } from '@chakra-ui/react';

interface MyPageSubtitleProps {
  subtitle: string;
}

const MyPageSubtitle = ({ subtitle }: MyPageSubtitleProps) => {
  return (
    <Text fontSize="1rem" mt="2rem" ml="2rem" fontWeight="bold">
      {subtitle}
    </Text>
  );
};

export default MyPageSubtitle;
