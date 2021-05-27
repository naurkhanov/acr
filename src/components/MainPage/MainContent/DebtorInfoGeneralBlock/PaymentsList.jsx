import React, { useEffect } from 'react';
import styled from 'styled-components';
import TableCell from './TableCell';

const PaymentsListWrap = styled.div`
  width: 100%;
  margin-top: 20px;

  & > .tableWrap {
    & > .tableHead {
      width: 80%;
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
      & > div {
        font-size: 18px;
        font-weight: 500;
        text-align: center;
      }
    }
  }
`;

function PaymentsList(props) {
  return (
    <PaymentsListWrap>
      <div className="tableWrap">
        <div className="tableHead">
          <div>№</div>
          <div>Сумма</div>
          <div>Дата</div>
          <div>Способ</div>
          <div>Комментарии</div>
        </div>
        <TableCell />
      </div>
    </PaymentsListWrap>
  );
}

export default PaymentsList;
