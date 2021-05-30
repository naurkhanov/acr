import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  loadIndividualDebtorInfo,
  loadPaymentMethods,
  loadPayments,
} from '../../../../../redux/ducks/individualdebtor';
import DebtorNameClose from './DebtorNameClose';
import DebtorContactInfo from './DebtorContactInfo';
import DebtorPayments from './DebtorPayments';
import AllPayments from './AllPayments';
import PaymentsList from './PaymentsList';
import { CSSTransition } from 'react-transition-group';

const DebtorIndividInfoWrap = styled.div`
  width: 100%;
  height: 600px;
  margin-left: 20px;
  padding: 20px 20px 0 20px;
  overflow: auto;
  position: relative;
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.1);

  &::-webkit-scrollbar {
    width: 0;
  }

  & > .debtorContactInfo {
  }
`;

function DebtorIndividInfo(props) {
  const dispatch = useDispatch();
  const debtorId = useParams().debtorId;

  const paymentsOpen = useSelector(
    (state) => state.individualdebtor.paymentsOpen
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
      <DebtorNameClose />
      <DebtorContactInfo />
      <DebtorPayments />
      <AllPayments />
      <CSSTransition in={paymentsOpen} unmountOnExit>
        <PaymentsList />
      </CSSTransition>
    </DebtorIndividInfoWrap>
  );
}

export default DebtorIndividInfo;
