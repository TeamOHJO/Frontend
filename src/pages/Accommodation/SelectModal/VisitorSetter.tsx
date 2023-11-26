import styled from '@emotion/styled';
import { PlusCircleOutlined, MinusCircleOutlined } from '@ant-design/icons';
import { Text, Input } from '@chakra-ui/react';

interface VisitorProps {
  visitors: number;
  setVisitors: React.Dispatch<React.SetStateAction<number>>;
  onChangeVisitor: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function VisitorSetter({
  visitors,
  setVisitors,
  onChangeVisitor,
}: VisitorProps) {
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
          value={visitors}
          onChange={onChangeVisitor}
          marginRight="15px"
          textAlign="center"
        />
        <MinusCircleOutlined
          style={{ marginRight: '10px' }}
          onClick={() => {
            if (visitors > 1) {
              setVisitors(visitors - 1);
            }
          }}
        />
        <PlusCircleOutlined
          onClick={() => {
            if (visitors < 12) {
              setVisitors(visitors + 1);
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
