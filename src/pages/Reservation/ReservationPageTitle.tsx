import styled from '@emotion/styled';
import { theme } from '../../styles/theme';

const ReservationPageTitle = () => {
  return <StyledReviewTitle>결제창</StyledReviewTitle>;
};

export default ReservationPageTitle;

const StyledReviewTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  max-width: 768px;
  height: 9rem;

  color: ${theme.colors.basic};
  font-family: ${theme.fonts.subtitle4};

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
