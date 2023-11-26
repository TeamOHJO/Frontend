import styled from '@emotion/styled';
import { useState } from 'react';
import { Input, Button } from '@chakra-ui/react';

interface InfoInputProps {
  name: string;
  list: string;
  item: any;
  onChangeInput: any;
}

function InfoInput({ name, list, item, onChangeInput }: InfoInputProps) {
  const [onClicked, setOnClicked] = useState(false);

  return (
    <StyledInfoWrapper>
      <StyledInfoLabel>{list}</StyledInfoLabel>
      <StyledInfoInput
        name={name}
        disabled={!onClicked}
        value={item}
        onChange={onChangeInput}
      />
      {!onClicked ? (
        <StyledEditBtn
          variant="blue"
          size="md"
          onClick={() => {
            setOnClicked(true);
          }}
        >
          수정하기
        </StyledEditBtn>
      ) : (
        <StyledSubmitBtn
          colorScheme="blue"
          onClick={() => {
            setOnClicked(false);
          }}
        >
          수정완료
        </StyledSubmitBtn>
      )}
    </StyledInfoWrapper>
  );
}

export default InfoInput;

const StyledInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1.5rem 1rem 1.5rem 1rem;

  width: 80%;

  @media screen and (max-width: 500px) {
    width: 95%;
  }
`;

const StyledInfoLabel = styled.span`
  flex: 0.5;
  font-weight: 500;
  @media screen and (max-width: 500px) {
    flex: 1;
  }
`;

const StyledInfoInput = styled(Input)`
  flex: 1.5;
`;

const StyledEditBtn = styled(Button)`
  flex: 0.5;
`;

const StyledSubmitBtn = styled(Button)`
  flex: 0.5;
`;
