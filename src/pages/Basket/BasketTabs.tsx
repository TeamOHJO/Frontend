import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
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
import BasketFooter from './BasketFooter';
import BasketDisabledFooter from './BasketDisabledFooter';
import BasketCard from './BasketCard';
import { BasketData } from '../../@types/interface';
import BasketDisabledCard from './BasketDisabledCard';
import {
  basketAvailableListState,
  basketCheckedItemsState,
  basketDataState,
  basketUnavailableListState,
  getCheckedIds,
  getUnavailableIds,
} from '../../states/atom';
import DefaultModal from '../../components/Modal/DefaultModal';
import BasketNoProducts from './BasketNoProducts';

function BasketTabs() {
  const [basketData, setBasketData] = useRecoilState(basketDataState);
  const availableList = useRecoilValue(basketAvailableListState);
  const unavailableList = useRecoilValue(basketUnavailableListState);
  const setCheckedItems = useSetRecoilState(basketCheckedItemsState);
  const checkedIds = useRecoilValue(getCheckedIds);
  const unavailableIds = useRecoilValue(getUnavailableIds);

  const deleteAllUnavailable = () => {
    // api 수정 후 주석 제거 예정
    // unavailableIds.forEach((id: number) => DeleteBasketItem(id));
    setBasketData(
      basketData.filter(
        (product: BasketData) => !unavailableIds.includes(product.basketId),
      ),
    );
  };

  const deleteCheckedItems = () => {
    // api 수정 후 주석 제거 예정
    // checkedIds.forEach((checkedId: number) => DeleteBasketItem(checkedId));
    setBasketData(
      basketData.filter(
        (product: BasketData) => !checkedIds.includes(product.basketId),
      ),
    );
    setCheckedItems([]);
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleOpenModal = () => {
    if (checkedIds.length > 0) {
      onOpen();
    } else {
      alert('선택한 숙소가 없습니다.');
    }
  };
  const modalData = {
    heading: '삭제하기',
    text: '선택한 숙소를 삭제하시겠습니까?',
  };
  const modalFunc = () => {
    deleteCheckedItems();
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
              <>
                <Box px="1rem">
                  <Box textAlign="right" pb={5}>
                    <Button
                      variant="blue"
                      size="mini"
                      onClick={handleOpenModal}
                    >
                      선택 삭제
                    </Button>
                  </Box>
                  <StyledBasketCardWrapper>
                    {availableList.map((item: BasketData) => {
                      return <BasketCard key={item.basketId} item={item} />;
                    })}
                  </StyledBasketCardWrapper>
                </Box>
                <BasketFooter />
              </>
            ) : (
              <BasketNoProducts text="예약 가능한 숙소가 없습니다." />
            )}
          </TabPanel>
          <TabPanel p={0}>
            {unavailableList.length > 0 ? (
              <>
                <Box px="1rem">
                  <Box textAlign="right" pb={5}>
                    <Button
                      variant="blue"
                      size="mini"
                      onClick={deleteAllUnavailable}
                    >
                      모두 삭제
                    </Button>
                  </Box>
                  <StyledBasketCardWrapper>
                    {unavailableList.map((item: BasketData) => {
                      return (
                        <BasketDisabledCard key={item.basketId} item={item} />
                      );
                    })}
                  </StyledBasketCardWrapper>
                </Box>
                <BasketDisabledFooter />
              </>
            ) : (
              <BasketNoProducts text="예약 불가능한 숙소가 없습니다." />
            )}
          </TabPanel>
        </TabPanels>
      </Tabs>
      <DefaultModal
        isOpen={isOpen}
        onClose={onClose}
        modalFunc={modalFunc}
        modalData={modalData}
      />
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
