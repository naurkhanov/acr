import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
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

const DebtorIndividInfoWrap = styled.div`
  width: 100%;
  height: 640px;
  margin-left: 20px;
  padding: 20px 20px 0 20px;
  background-color: transparent;
  box-shadow: 0 0 10px  rgba(0, 0, 0, 0.1);

  &::-webkit-scrollbar {
    width: 0;
  }

  & > .debtorContactInfo {
  }
`;

function ClientIndividInfo(props) {
  const dispatch = useDispatch();
  const debtorId = useParams().debtorId;

  const paymentsOpen = useSelector(
    (state) => state.individualclient.paymentsOpen
  );
  useEffect(() => {
    dispatch(loadIndividualDebtorInfo(debtorId));
  }, [dispatch, debtorId]);

  useEffect(() => {
    dispatch(loadPayments(debtorId));
  }, [dispatch, debtorId]);

  useEffect(() => {
    dispatch(loadPaymentMethods());
  }, [dispatch]);

  return (
    <DebtorIndividInfoWrap>
      <ClientNameClose />
      <ClientContactInfo />
      <ClientPayments />
      <AllPayments />
      <CSSTransition in={paymentsOpen} unmountOnExit>
        <PaymentsList />
      </CSSTransition>
    </DebtorIndividInfoWrap>
  );
}

export default ClientIndividInfo;
