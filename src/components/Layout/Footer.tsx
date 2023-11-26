import styled from '@emotion/styled';
import { Text } from '@chakra-ui/react';

function Footer() {
  return (
    <StyledFooter>
      <Text as="p" size="xs" color="gray.84">
        © 2023 Mini Project Team OH!, all rights reserved.
      </Text>
    </StyledFooter>
  );
}

const StyledFooter = styled.div`
  padding-bottom: 56px;
`;

export default Footer;
