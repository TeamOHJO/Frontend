import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from '@emotion/styled';
import { Text, Button, useDisclosure } from '@chakra-ui/react';
import { theme } from '../../styles/theme';
import { basketCheckedItemsState, getTotalPriceOfCheckedItems } from '../../states/atom';
import DefaultModal from '../../components/Modal/DefaultModal';

function BasketFooter() {
  const navigate = useNavigate();
  const [checkedItems, setCheckedItems] = useRecoilState(basketCheckedItemsState);
  const totalPrice = useRecoilValue(getTotalPriceOfCheckedItems);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const modalData = {
    heading: '예약하기',
    text: '선택한 숙소를 예약하시겠습니까?',
  };
  const modalFunc = () => {
    alert('예약하기 페이지로 이동');
    // roomId를 url에 포함해서 예약하기 페이지로 이동
    navigate(`/reservation?items=${checkedItems.join('&')}`);
    // navigate(`/reservation?items=${encodeURIComponent(checkedItems.join('&'))}`);
    setCheckedItems([]);
  };

  return (
    <StyledBasketFooterWrapper>
      <StyledTextWrapper>
        <Text as="p" size="md" fontWeight="bold">
          결제 예상 금액
        </Text>
        <Text as="p" size="md" fontWeight="bold" color="red.500">
          ₩ {totalPrice.toLocaleString()}
        </Text>
      </StyledTextWrapper>
      <Button variant="blue" size="lg" width="100%" onClick={onOpen}>
        예약하기
      </Button>
      <DefaultModal isOpen={isOpen} onClose={onClose} modalFunc={modalFunc} modalData={modalData} />
    </StyledBasketFooterWrapper>
  );
}

export default BasketFooter;

const StyledBasketFooterWrapper = styled.div`
  width: 768px;
  height: 105px;
  padding: 10px 1rem;
  position: fixed;
  bottom: 58px;
  z-index: 10;

  background-color: ${theme.colors.white};
  box-shadow: ${theme.shadows.shadowTop.shadow};

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const StyledTextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding: 10px 0;
`;
