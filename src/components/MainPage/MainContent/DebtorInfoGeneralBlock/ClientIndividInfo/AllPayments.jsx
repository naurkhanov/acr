import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  paymentsShow,
  showPaymentsModal,
} from '../../../../../redux/ducks/individualclient';
import { AllPaymentsWrap } from './styled';

function AllPayments() {
  const dispatch = useDispatch();
  const paymentsModalShow = useSelector(
    (state) => state.individualclient.showModalPayment
  );
  const paymentsAmount = useSelector(
    (state) => state.individualclient.payments
  ).length;

  const paymentOpen = useSelector(
    (state) => state.individualclient.paymentsOpen
  );
  const handleOpenPayments = () => {
    dispatch(paymentsShow(paymentOpen));
  };
  const handleShowPaymentsModal = () => {
    dispatch(showPaymentsModal(paymentsModalShow));
  };

  return (
    <AllPaymentsWrap>
      <div className="AllPaymentsGeneral">
        <div className="PaymentsTitle">{`Все платежи (${paymentsAmount})`}</div>
        <span className="material-icons" onClick={handleOpenPayments}>
          {paymentOpen !== true ? 'chevron_right' : 'expand_more'}
        </span>
      </div>
      <div className="addPayments" onClick={handleShowPaymentsModal}>
        + Добавить платёж
      </div>
    </AllPaymentsWrap>
  );
}

export default AllPayments;
