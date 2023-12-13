import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { Button, useDisclosure } from '@chakra-ui/react';
import { RightOutlined } from '@ant-design/icons';
import DefaultModal from '../../../components/Modal/DefaultModal';
import MyPageSubtitle from '../MyPageSubtitle';
import { resignUser } from '../../../api/mypage';
import { removeCookies } from '../../../utils/utils';

const ResignSection = () => {
  const { onOpen, isOpen, onClose } = useDisclosure();

  const fetchResign = async () => {
    try {
      const res = await resignUser();
      const { code } = res;
      if (code === 200) {
        alert('회원 탈퇴 처리가 완료되었습니다.');
      }
      removeCookies();
      navigate('/');
    } catch (err) {
      console.error(err);
    }
  };

  const modalData = {
    heading: '회원 탈퇴',
    text: '회원을 탈퇴하시겠습니까?',
  };

  const navigate = useNavigate();

  return (
    <StyledContainer>
      <MyPageSubtitle subtitle="회원 탈퇴" />
      <StyledInnerContainer>
        <StyledResignBtn variant="blue" size="md" rightIcon={<RightOutlined />} onClick={onOpen}>
          회원탈퇴
        </StyledResignBtn>
        <DefaultModal
          isOpen={isOpen}
          onClose={onClose}
          modalFunc={fetchResign}
          modalData={modalData}
        />
      </StyledInnerContainer>
    </StyledContainer>
  );
};

export default ResignSection;

const StyledContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin: 2rem 0rem 1rem 0rem;
`;

const StyledInnerContainer = styled(StyledContainer)`
  align-items: center;
`;

const StyledResignBtn = styled(Button)`
  display: flex;
  align-items: center;
  margin-top: 3rem;
`;
