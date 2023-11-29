import styled from '@emotion/styled';
import { Input } from '@chakra-ui/react';

interface PasswordInputProps {
  name: string;
  list: string;
  item: any;
  onChangeInput: any;
}

function PasswordInput({
  name,
  list,
  item,
  onChangeInput,
}: PasswordInputProps) {
  return (
    <StyledInfoWrapper>
      <StyledInfoLabel>{list}</StyledInfoLabel>
      <StyledInfoInput
        name={name}
        value={item}
        onChange={onChangeInput}
        type="password"
        placeholder="*********"
      />
    </StyledInfoWrapper>
  );
}

export default PasswordInput;

const StyledInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1.5rem 1rem 1.5rem 1rem;

  width: 80%;

  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

const StyledInfoLabel = styled.span`
  flex: 0.5;
  font-size: 12px;
  font-weight: 500;
  @media screen and (max-width: 500px) {
    flex: 1;
  }
`;

const StyledInfoInput = styled(Input)`
  margin-right: 10px;
  flex: 1.5;
`;
