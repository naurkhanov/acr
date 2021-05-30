import React from 'react';
import styled from 'styled-components';

const DebtorPaymentsWrap = styled.div`
  margin-top: 30px;

  & > div {
    font-weight: 400;
    font-size: 18px;
    margin-top: 10px;
  }
`;

function DebtorPayments(props) {
  return (
    <DebtorPaymentsWrap>
      <div>Оплатил за последнюю покупку: 24500₽</div>
      <div>Осталось к оплате: 10000₽</div>
      <div>Следующая оплата: через 20 дней</div>
      <div>Оплатил за все время: 120000₽</div>
    </DebtorPaymentsWrap>
  );
}

export default DebtorPayments;
