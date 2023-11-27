import { Button } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { useRecoilState } from 'recoil';
import { searchFilteredState } from '../../../states/atom';

interface RegionSetterProps {
  isDomestic: boolean;
  setIsDomestic: React.Dispatch<React.SetStateAction<boolean>>;
}

function RegionSetter({ isDomestic, setIsDomestic }: RegionSetterProps) {
  const [searchFilter, setSearchFilter] = useRecoilState(searchFilteredState);

  const setDomestic = (value: boolean) => {
    const newFilter = { ...searchFilter, isDomestic: value };
    setIsDomestic(value);
    setSearchFilter(newFilter);
  };

  return (
    <StyledDomesticSection>
      <StyledButton
        variant={isDomestic ? 'navyClicked' : 'navy'}
        onClick={() => {
          setDomestic(true);
        }}
      >
        국내
      </StyledButton>
      <StyledButton
        variant={isDomestic ? 'navy' : 'navyClicked'}
        onClick={() => {
          setDomestic(false);
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
