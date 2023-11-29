import { useRecoilState, useRecoilValue } from 'recoil';
import styled from '@emotion/styled';
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Button,
  useDisclosure,
} from '@chakra-ui/react';
import BasketCard from './BasketCard';
import { BasketData } from '../../@types/interface';
import BasketDisabledCard from './BasketDisabledCard';
import {
  basketAvailableListState,
  basketDataState,
  basketUnavailableListState,
  getAvailableIds,
  getUnavailableIds,
} from '../../states/atom';
import DefaultModal from '../../components/Modal/DefaultModal';
import BasketNoProducts from './BasketNoProducts';
import { DeleteBasketItem } from '../../api';

interface ToastData {
  active: boolean;
  message: string;
}

interface BasketTabsProps {
  setShowAlert: (value: ToastData) => void;
}

function BasketTabs({ setShowAlert }: BasketTabsProps) {
  const [basketData, setBasketData] = useRecoilState(basketDataState);
  const availableList = useRecoilValue(basketAvailableListState);
  const unavailableList = useRecoilValue(basketUnavailableListState);
  const unavailableIds = useRecoilValue(getUnavailableIds);
  const availableIds = useRecoilValue(getAvailableIds);

  const toastFunc = (text: string) => {
    const toastData = {
      active: true,
      message: text,
    };
    setShowAlert(toastData);
  };

  // 예약 불가능 숙소 모두 삭제
  const deleteAllUnavailable = () => {
    unavailableIds.forEach((id: number) => DeleteBasketItem(id));
    setBasketData(
      basketData.filter((product: BasketData) => !unavailableIds.includes(product.basketId)),
    );
    toastFunc('예약 불가능한 숙소를 모두 삭제하였습니다.');
  };

  // 예약 가능 숙소 모두 삭제
  const deleteAllAvailable = () => {
    availableIds.forEach((id: number) => DeleteBasketItem(id));
    setBasketData(
      basketData.filter((product: BasketData) => !availableIds.includes(product.basketId)),
    );
    toastFunc('예약 가능한 숙소를 모두 삭제하였습니다.');
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  const modalData = {
    heading: '삭제하기',
    text: '모든 숙소를 삭제하시겠습니까?',
  };
  const modalFunc = () => {
    deleteAllAvailable();
  };

  return (
    <>
      <Tabs variant="solid-rounded" colorScheme="blue" size="md">
        <TabList p="1rem">
          <Tab>예약 가능 숙소</Tab>
          <Tab>예약 불가능 숙소</Tab>
        </TabList>

        <TabPanels paddingTop={3}>
          <TabPanel p={0}>
            {availableList.length > 0 ? (
              <Box px="1rem">
                <Box textAlign="right" pb={5}>
                  <Button variant="blue" size="mini" onClick={onOpen}>
                    모두 삭제
                  </Button>
                </Box>
                <StyledBasketCardWrapper>
                  {availableList.map((item: BasketData) => {
                    return (
                      <BasketCard key={item.basketId} item={item} setShowAlert={setShowAlert} />
                    );
                  })}
                </StyledBasketCardWrapper>
              </Box>
            ) : (
              <BasketNoProducts text="예약 가능한 숙소가 없습니다." />
            )}
          </TabPanel>
          <TabPanel p={0}>
            {unavailableList.length > 0 ? (
              <Box px="1rem">
                <Box textAlign="right" pb={5}>
                  <Button variant="blue" size="mini" onClick={deleteAllUnavailable}>
                    모두 삭제
                  </Button>
                </Box>
                <StyledBasketCardWrapper>
                  {unavailableList.map((item: BasketData) => {
                    return (
                      <BasketDisabledCard
                        key={item.basketId}
                        item={item}
                        setShowAlert={setShowAlert}
                      />
                    );
                  })}
                </StyledBasketCardWrapper>
              </Box>
            ) : (
              <BasketNoProducts text="예약 불가능한 숙소가 없습니다." />
            )}
          </TabPanel>
        </TabPanels>
      </Tabs>
      <DefaultModal isOpen={isOpen} onClose={onClose} modalFunc={modalFunc} modalData={modalData} />
    </>
  );
}

export default BasketTabs;

const StyledBasketCardWrapper = styled.div`
  width: 100%;
  position: relative;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 15px;
`;
