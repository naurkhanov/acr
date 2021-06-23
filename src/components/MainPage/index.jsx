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
import ClientAddModal from './ModalIcons/ClientAddModal';
import {
  PaymentsModalShowSelector,
  ShowModalPurchaseSelector,
} from '../../redux/ducks/selectors/selectors';

function MainPage() {
  const showPurchasesModal = useSelector(ShowModalPurchaseSelector);
  const showPaymentsModal = useSelector(PaymentsModalShowSelector);
  const showAddClientModal = useSelector(
    (state) => state.clients.showAddClientModal
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
      {showPaymentsModal && <PaymentsModal />}
      {showPurchasesModal && <PurchasesModal />}
      {showAddClientModal && <ClientAddModal />}
    </GeneralWrapper>
  );
}

export default MainPage;
