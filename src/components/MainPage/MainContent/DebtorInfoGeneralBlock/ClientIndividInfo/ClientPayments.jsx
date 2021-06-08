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
  const purchase = useSelector((state) => state.individualclient.purchases);
  const payments = useSelector((state) => state.individualclient.payments);
  const lastPayment = payments[payments.length - 1];
  const nowDate = dayjs().format('YYYY-MM-DD');
  const lastPaymentDate = parseInt(dayjs(lastPayment?.date).format('DD'));

  console.log(lastPaymentDate);
  return (
    <DebtorPaymentsWrap>
      <div>Оплатил за последнюю покупку: {lastPayment?.amount}</div>
      <div>Осталось к оплате: {client.indebtedness}</div>
      <div>Следующая оплата: через {30 - lastPaymentDate} дня</div>
      <div>Оплатил за все время: {client.totalPaymentsAmount}</div>
    </DebtorPaymentsWrap>
  );
}

export default ClientPayments;
