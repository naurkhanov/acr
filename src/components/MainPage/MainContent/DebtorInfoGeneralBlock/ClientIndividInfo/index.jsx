import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  loadClientPurchases,
  loadIndividualDebtorInfo,
  loadPaymentMethods,
  loadPayments,
} from '../../../../../redux/ducks/individualclient';
import ClientNameClose from './ClientNameClose';
import ClientContactInfo from './ClientContactInfo';
import ClientPayments from './ClientPayments';
import AllPayments from './AllPayments';
import PaymentsList from './PaymentsList';
import { CSSTransition } from 'react-transition-group';
import AllPurchases from './AllPurchases';
import PurchasesList from './PurchasesList';
import {
  PaymentsOpenSelector,
  PurchasesListOpenSelector,
} from '../../../../../redux/ducks/selectors/selectors';

const DebtorIndividInfoWrap = styled.div`
  width: 100%;
  min-height: 600px;
  margin-left: 20px;
  padding: 20px 20px 20px 20px;
  background-color: transparent;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  &::-webkit-scrollbar {
    width: 0;
  }

  & > .debtorContactInfo {
  }
`;

function ClientIndividInfo() {
  const dispatch = useDispatch();
  const debtorId = useParams().debtorId;
  const purchasesOpen = useSelector(PurchasesListOpenSelector);
  const paymentsOpen = useSelector(PaymentsOpenSelector);
  useEffect(() => {
    dispatch(loadIndividualDebtorInfo(debtorId));
  }, [dispatch, debtorId]);

  useEffect(() => {
    dispatch(loadPayments(debtorId));
  }, [dispatch, debtorId]);

  useEffect(() => {
    dispatch(loadPaymentMethods());
  }, [dispatch]);

  useEffect(() => {
    dispatch(loadClientPurchases(debtorId));
  }, [dispatch, debtorId]);

  return (
    <DebtorIndividInfoWrap>
      <ClientNameClose />
      <ClientContactInfo />
      <ClientPayments />
      <AllPayments />
      <CSSTransition in={paymentsOpen} unmountOnExit>
        <PaymentsList />
      </CSSTransition>
      <AllPurchases />
      <CSSTransition in={purchasesOpen} unmountOnExit>
        <PurchasesList />
      </CSSTransition>
    </DebtorIndividInfoWrap>
  );
}

export default ClientIndividInfo;
