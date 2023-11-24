import { Text } from '@chakra-ui/react';

interface MyPageSubtitleProps {
  subtitle: string;
}

const MyPageSubtitle = ({ subtitle }: MyPageSubtitleProps) => {
  return (
    <Text fontSize="1rem" mt="1rem" fontWeight="bold">
      {subtitle}
    </Text>
  );
};

export default MyPageSubtitle;
