import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import dayjs from 'dayjs';

const DebtorPaymentsWrap = styled.div`
  margin-top: 30px;

  & > div {
    font-weight: 400;
    font-size: 18px;
    margin-top: 10px;
  }
`;

function ClientPayments(props) {
  const client = useSelector((state) => state.individualclient.items);
  const payments = useSelector((state) => state.individualclient.payments);
  const lastPayment = payments[payments.length - 1];
  const lastPaymentDate = lastPayment?.date;

  return (
    <DebtorPaymentsWrap>
      <div>Оплатил за последнюю покупку: {lastPayment?.amount}</div>
      <div>Осталось к оплате: {client.indebtedness}</div>
      <div>Следующая оплата: {dayjs(lastPaymentDate).to()}</div>
      <div>Оплатил за все время: {client.totalPaymentsAmount}</div>
    </DebtorPaymentsWrap>
  );
}

export default ClientPayments;
