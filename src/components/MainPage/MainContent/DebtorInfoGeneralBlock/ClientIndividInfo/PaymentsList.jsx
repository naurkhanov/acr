import React from 'react';
import styled from 'styled-components';
import TableCell from './TableCell';
import { useSelector } from 'react-redux';

const PaymentsListWrap = styled.table`
  width: 100%;
  text-align: center;
  margin-top: 10px;
  
  & > th,td{
    box-sizing: border-box;
    padding: 10px; 
    border-collapse: collapse;
  }
  
  tr {
    & > th{
      font-size: 18px;
      font-weight: 400;
    }
  }
  
`;

function PaymentsList(props) {
  const payments = useSelector((state) => state.individualclient.payments);
  return (
    <PaymentsListWrap>
      <thead>
        <tr>
          <th>№</th>
          <th>Сумма</th>
          <th>Дата</th>
          <th>Способ</th>
          <th>Комментарии</th>
        </tr>
      </thead>
      <tbody>
        {payments.map((item,index)=> <TableCell payment={item} index={index} />)}
      </tbody>
    </PaymentsListWrap>
  );
}

export default PaymentsList;
