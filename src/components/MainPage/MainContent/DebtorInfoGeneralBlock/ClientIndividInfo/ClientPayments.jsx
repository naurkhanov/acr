import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const DebtorPaymentsWrap = styled.div`
  margin-top: 30px;

  & > div {
    font-weight: 400;
    font-size: 18px;
    margin-top: 10px;
  }
`;

function ClientPayments(props) {

  const client = useSelector(state=>state.individualclient.items)



  return (
    <DebtorPaymentsWrap>
      <div>Оплатил за последнюю покупку: 24500₽</div>
      <div>Осталось к оплате: {client.indebtedness}</div>
      <div>Следующая оплата: через 20 дней</div>
      <div>Оплатил за все время: {client.totalPaymentsAmount}</div>
    </DebtorPaymentsWrap>
  );
}

export default ClientPayments;
