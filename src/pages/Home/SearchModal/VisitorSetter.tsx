import styled from '@emotion/styled';
import { PlusCircleOutlined, MinusCircleOutlined } from '@ant-design/icons';
import { Text, Input } from '@chakra-ui/react';
import { useRecoilState } from 'recoil';
import { searchFilteredState } from '../../../states/atom';

function VisitorSetter() {
  const [searchFilter, setSearchFilter] = useRecoilState(searchFilteredState);

  const { numberOfPeople } = searchFilter;
  return (
    <StyledContainer>
      <StyledLabel as="p" size="lg">
        여행자 수
      </StyledLabel>
      <StyledSetterWrapper>
        <Input
          type="number"
          min={1}
          max="20"
          htmlSize={4}
          width="auto"
          disabled
          value={numberOfPeople}
          marginRight="15px"
          textAlign="center"
        />
        <MinusCircleOutlined
          style={{ marginRight: '10px' }}
          onClick={() => {
            if (numberOfPeople > 2) {
              const newFilter = { ...searchFilter, numberOfPeople: numberOfPeople - 1 };
              setSearchFilter(newFilter);
            }
          }}
        />
        <PlusCircleOutlined
          onClick={() => {
            if (numberOfPeople < 12) {
              const newFilter = { ...searchFilter, numberOfPeople: numberOfPeople + 1 };
              setSearchFilter(newFilter);
            }
          }}
        />
      </StyledSetterWrapper>
    </StyledContainer>
  );
}

export default VisitorSetter;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;

const StyledLabel = styled(Text)``;

const StyledSetterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 1rem 0rem 1rem 0rem;
  font-size: 30px;
`;
