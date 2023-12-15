import styled from '@emotion/styled';
import { Heading, Text, Skeleton } from '@chakra-ui/react';
import { EnvironmentOutlined } from '@ant-design/icons';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { useState, useEffect } from 'react';

interface Coordinate {
  lat: number;
  lng: number;
}

interface AccommodationInfoMapProps {
  isLoaded: boolean;
  location: string;
}

function AccommodationInfoMap({ isLoaded, location }: AccommodationInfoMapProps) {
  const [coordinate, setCoordinate] = useState<Coordinate>({
    lat: 33.5563,
    lng: 126.79581,
  });

  useEffect(() => {
    const geocoder = new kakao.maps.services.Geocoder();

    const callback = (result: any, status: any) => {
      if (status === kakao.maps.services.Status.OK) {
        const newSearch = result[0];
        setCoordinate({ lat: newSearch.y, lng: newSearch.x });
      }
    };

    geocoder.addressSearch(location, callback);
  }, []);

  return (
    <StyledAccommodationInfoMapWrapper>
      <StyledAccommodationInfoMapTitle>
        <Skeleton isLoaded={isLoaded} width="100px" height="25px">
          <Heading as="h4" size="lg" style={{ marginRight: '0.5rem' }}>
            위치
          </Heading>
        </Skeleton>
        <Skeleton isLoaded={isLoaded} width="250px" height="25px">
          <Text as="p" size="sm" color="gray.84">
            <EnvironmentOutlined style={{ color: '#848484' }} />
            {location}
          </Text>
        </Skeleton>
      </StyledAccommodationInfoMapTitle>
      <Skeleton isLoaded={isLoaded}>
        <StyledMap center={coordinate}>
          <MapMarker position={coordinate} />
        </StyledMap>
      </Skeleton>
    </StyledAccommodationInfoMapWrapper>
  );
}

export default AccommodationInfoMap;

const StyledAccommodationInfoMapWrapper = styled.div`
  width: 100%;
  position: relative;
`;

const StyledAccommodationInfoMapTitle = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const StyledMap = styled(Map)`
  width: 90%;
  height: 250px;
  margin: 0 auto;
`;
