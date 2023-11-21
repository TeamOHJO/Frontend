import { useState } from 'react';
import {
  Button,
  Heading,
  Text,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import ToastPopup from '../../components/modal/ToastPopup';

const Test = () => {
  const { onClose } = useDisclosure();

  const [showAlert, setShowAlert] = useState({
    active: false,
    message: '',
  });

  const openFunction = () => {
    const toastData = {
      active: true,
      message: '탈퇴되었습니다.',
    };
    setShowAlert(toastData);
  };

  return (
    <>
      <Heading as="h2">차크라 UI 사용법 예시</Heading>
      <br />
      <Heading as="h3" size="lg">
        타이틀 사용 예시
        {' '}
        {/* 원하는 옵션에 맞춰 쓸 것 */}
      </Heading>

      {/* 18px 타이틀 */}
      <Heading as="h2" size="lg">
        제일 큰 타이틀
      </Heading>

      {/* 16px 타이틀 */}
      <Heading as="h3" size="md">
        서브 타이틀 1
      </Heading>

      {/* 14px 타이틀 + 회색 */}
      <Heading as="h4" size="sm" color="gray.84">
        서브 타이틀 2
      </Heading>

      {/* 12px 타이틀 + 레귤러 폰트 두께 */}
      <Heading as="h5" size="xs" fontWeight="regular">
        서브 타이틀 3
      </Heading>

      <br />

      <Heading as="h3" size="lg">
        텍스트 사용 예시
        {' '}
        {/* 원하는 옵션에 맞춰 쓸 것 */}
      </Heading>

      {/* 18px 타이틀 */}
      <Text as="p" size="lg">
        p 태그 입니다.
      </Text>

      {/* 16px 타이틀 */}
      <Text as="span" size="md">
        span 태그 입니다.
      </Text>

      {/* 14px 타이틀 + 회색 */}
      <Text as="p" size="sm" color="gray.84">
        p 태그 입니다.
      </Text>

      {/* 12px 타이틀 + 볼드 폰트 두께 */}
      <Text as="span" size="xs" fontWeight="bold">
        span 태그 입니다.
      </Text>

      <br />

      <Heading as="h3" size="lg">
        버튼 사용 예시
      </Heading>

      {/* 회원가입 버튼 */}
      <Button variant="blue">회원가입</Button>

      {/* 전체 보기 버튼 */}
      <Button variant="blue" size="lg">
        전체 보기
      </Button>

      {/* 로그인 쪽 작은 버튼 */}
      <Button variant="blue" size="sm" width="60px">
        인증요청
      </Button>

      {/* 내 정보 관리 쪽 작은 버튼 */}
      <Button variant="blue" size="xs">
        수정하기
      </Button>

      {/* 선택 삭제 버튼 */}
      <Button variant="blue" size="mini">
        선택 삭제
      </Button>

      {/* 예약 취소 버튼 */}
      <Button variant="gray" size="sm">
        예약 취소
      </Button>

      {/* 국내 버튼 */}
      <Button variant="navyClicked" size="xs">
        국내
      </Button>

      {/* 국외 버튼 */}
      <Button variant="navy" size="xs">
        국외
      </Button>
      <br />

      <Heading as="h3" size="lg">
        토스트팝업 사용 예시
      </Heading>
      <Button variant="blue" size="sm" width="60px" onClick={openFunction}>
        토스트 팝업
      </Button>
      <ToastPopup status={showAlert} setFunc={setShowAlert} />

      <br />

      <Heading as="h3" size="lg">
        모달 사용 예시
      </Heading>

      <Modal isOpen onClose={onClose} isCentered motionPreset="slideInBottom">
        <ModalOverlay background="none" />
        <ModalContent width="280px" border="1px solid" borderColor="#B8B8B8">
          <ModalHeader fontSize="lg">회원 탈퇴</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text size="md">회원을 탈퇴하시겠습니까?</Text>
          </ModalBody>

          <ModalFooter gap="10px">
            <Button variant="grayFull" onClick={onClose} width="auto">
              아니오
            </Button>
            <Button colorScheme="blue" size="md" onClick={onClose} width="auto">
              예
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Test;
