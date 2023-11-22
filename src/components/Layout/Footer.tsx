import styled from '@emotion/styled';
import { Text } from '@chakra-ui/react';

function Footer() {
  return (
    <FooterCont>
      <Text as="p" size="xs" color="gray.84">
        © 2023 Mini Project Team OH!, all rights reserved.
      </Text>
    </FooterCont>
  );
}

const FooterCont = styled.div`
  padding-bottom: 56px;
`;

export default Footer;
