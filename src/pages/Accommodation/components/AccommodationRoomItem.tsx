import React from 'react';
import styled from '@emotion/styled';
import { theme } from '../../../styles/theme';

function AccommodationRoomItem() {
  return (
    <AccommodationRoomItemWrapper>
      AccommodationItem
    </AccommodationRoomItemWrapper>
  );
}

export default AccommodationRoomItem;

const AccommodationRoomItemWrapper = styled.div`
  width: 100%;
  height: 380px;
  margin-bottom: 2rem;
  background-color: ${theme.colors.gray100};
`;
