import React from 'react';
import styled from 'styled-components';
import MainWrap from './MainHeader/MainWrap';
import MainHeader from './MainHeader';
import MainContent from './MainContent';
import PaymentsModal from './ModalIcons/PaymentsModal';
import { useSelector } from 'react-redux';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import locale_ru from 'dayjs/locale/ru';
import duration from 'dayjs/plugin/duration';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import PurchasesModal from './ModalIcons/PurchasesModal';

function MainPage(props) {
  const showPurchasesModal = useSelector(
    (state) => state.individualclient.showModalPurchase
  );
  const showPaymentsModal = useSelector(
    (state) => state.individualclient.showModalPayment
  );

  dayjs.extend(relativeTime, locale_ru);
  dayjs.extend(duration);
  dayjs.extend(isSameOrBefore);
  dayjs.locale('ru');

  const GeneralWrapper = styled.div`
    overflow: hidden;
  `;
  return (
    <GeneralWrapper>
      <MainWrap generalWrapper>
        <MainHeader />
        <MainContent />
      </MainWrap>
      {showPaymentsModal === true ? <PaymentsModal /> : null}
      {showPurchasesModal === true ? <PurchasesModal /> : null}
    </GeneralWrapper>
  );
}

export default MainPage;
