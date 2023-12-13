import styled from '@emotion/styled';
import { Heading, Text, Skeleton } from '@chakra-ui/react';
import { CheckOutlined } from '@ant-design/icons';
import { v4 as uuid } from 'uuid';

interface AccommodationInfoTagProps {
  isLoaded: boolean;
  serviceInfo: string[];
}

function AccommodationInfoTag({ isLoaded, serviceInfo }: AccommodationInfoTagProps) {
  return (
    <StyledAccommodationInfoTagWrapper>
      <StyledAccommodationInfoTagTitle>
        <Skeleton isLoaded={isLoaded} width="150px" height="25px">
          <Heading as="h4" size="lg">
            시설 및 서비스
          </Heading>
        </Skeleton>
      </StyledAccommodationInfoTagTitle>
      <StlyedAccommodationInfoTagBox>
        {serviceInfo &&
          serviceInfo.map((data: string) => (
            <Skeleton isLoaded={isLoaded} mb="10px">
              <StyledAccommodationinfoTagItem key={uuid()}>
                <CheckOutlined style={{ fontSize: '12px', marginRight: '0.5rem' }} />
                <Text as="p" size="xs" color="basic">
                  {data}
                </Text>
              </StyledAccommodationinfoTagItem>
            </Skeleton>
          ))}
      </StlyedAccommodationInfoTagBox>
    </StyledAccommodationInfoTagWrapper>
  );
}

export default AccommodationInfoTag;

const StyledAccommodationInfoTagWrapper = styled.div`
  width: 100%;
  padding: 1rem;
`;

const StyledAccommodationInfoTagTitle = styled.div`
  width: 100%;
  padding: 1rem 0;
`;

const StlyedAccommodationInfoTagBox = styled.div`
  width: 100%;
  padding: 0 1rem;
  /* 그리드 */
  display: grid;
  grid-template-columns: repeat(auto-fill, 120px);
  justify-content: space-between;

  flex-wrap: wrap;
`;

const StyledAccommodationinfoTagItem = styled.div`
  width: 120px;
  padding: 0.5rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
