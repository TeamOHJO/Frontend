import styled from '@emotion/styled';
import { useState } from 'react';
import { Input, Button } from '@chakra-ui/react';
import { useRecoilValue } from 'recoil';
import { AxiosError } from 'axios';
import { userInformation } from '../../../states/atom';
import { changeInfo } from '../../../api';
import { ErrorData } from '../../../api/type';

interface InfoInputProps {
  name: string;
  list: string;
  item: any;
  onChangeInput: any;
}

function InfoInput({ name, list, item, onChangeInput }: InfoInputProps) {
  const [onClicked, setOnClicked] = useState(false);
  const userInfo = useRecoilValue(userInformation);
  const { userName, phoneNum } = userInfo;

  const submitChangeInfo = async () => {
    try {
      const res = await changeInfo(userName, phoneNum);
      const { message } = res;
      console.log(message);
      setOnClicked(false);
    } catch (error) {
      const axiosError = error as AxiosError;
      const data = axiosError.response?.data as ErrorData;
      if (data.code === 411) {
        alert(data.message);
      }
    }
  };

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
          size="100px"
          style={{ height: '40px' }}
          onClick={() => {
            setOnClicked(true);
          }}
        >
          수정
        </StyledEditBtn>
      ) : (
        <>
          <StyledSubmitBtn
            colorScheme="blue"
            size="100px"
            style={{ height: '40px', marginRight: '5px' }}
            onClick={() => {
              submitChangeInfo();
            }}
          >
            완료
          </StyledSubmitBtn>
          <StyledSubmitBtn
            size="100px"
            style={{ height: '40px' }}
            onClick={() => {
              setOnClicked(false);
            }}
          >
            취소
          </StyledSubmitBtn>
        </>
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

const StyledEditBtn = styled(Button)`
  flex: 0.5;
`;

const StyledSubmitBtn = styled(Button)`
  flex: 0.5;
`;
