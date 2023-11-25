import { Button } from '@chakra-ui/react';
import styled from '@emotion/styled';

interface RegionSetterProps {
  isDomestic: boolean;
  setIsDomestic: React.Dispatch<React.SetStateAction<boolean>>;
}

function RegionSetter({ isDomestic, setIsDomestic }: RegionSetterProps) {
  return (
    <StyledDomesticSection>
      <StyledButton
        variant={isDomestic ? 'navyClicked' : 'navy'}
        onClick={() => {
          setIsDomestic(true);
        }}
      >
        국내
      </StyledButton>
      <StyledButton
        variant={isDomestic ? 'navy' : 'navyClicked'}
        onClick={() => {
          setIsDomestic(false);
        }}
      >
        국외
      </StyledButton>
    </StyledDomesticSection>
  );
}

export default RegionSetter;

const StyledDomesticSection = styled.div`
  display: flex;
  width: 100%;
`;

const StyledButton = styled(Button)`
  margin-right: 0.8rem;
  width: 80px;
`;
