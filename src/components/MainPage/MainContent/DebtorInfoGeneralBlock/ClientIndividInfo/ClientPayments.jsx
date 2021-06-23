import React from 'react';
import { useSelector } from 'react-redux';
import dayjs from 'dayjs';
import { DebtorPaymentsWrap } from './styled';
import {
  IndividualClientsSelector,
  PaymentsSelector,
} from '../../../../../redux/ducks/selectors/selectors';

function ClientPayments() {
  const client = useSelector(IndividualClientsSelector);
  const payments = useSelector(PaymentsSelector);
  const lastPayment = payments[payments.length - 1];
  const lastPaymentDate = dayjs(lastPayment?.date).add(dayjs.duration(30, 'd'));

  return (
    <DebtorPaymentsWrap>
      <div>Оплатил за последнюю покупку: {lastPayment?.amount}</div>
      <div>Осталось к оплате: {client.indebtedness}</div>
      <div>Следующая оплата: {dayjs(lastPaymentDate).fromNow()}</div>
      <div>Оплатил за все время: {client.totalPaymentsAmount}</div>
    </DebtorPaymentsWrap>
  );
}

export default ClientPayments;
