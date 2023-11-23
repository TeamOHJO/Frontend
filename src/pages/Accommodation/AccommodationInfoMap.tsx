import styled from '@emotion/styled';
import { Heading, Text } from '@chakra-ui/react';
import { EnvironmentOutlined } from '@ant-design/icons';

function AccommodationInfoMap() {
  return (
    <StyledAccommodationInfoMapWrapper>
      <StyledAccommodationInfoMapTitle>
        <Heading as="h4" size="lg" style={{ marginRight: '0.5rem' }}>
          위치
        </Heading>
        <EnvironmentOutlined style={{ color: '#848484' }} />
        <Text as="p" size="sm" color="gray.84">
          강원도 강릉시 옥계면 헌화로 455-34
        </Text>
      </StyledAccommodationInfoMapTitle>
    </StyledAccommodationInfoMapWrapper>
  );
}

export default AccommodationInfoMap;

const StyledAccommodationInfoMapWrapper = styled.div`
  width: 100%;
  height: 200px;
`;

const StyledAccommodationInfoMapTitle = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
