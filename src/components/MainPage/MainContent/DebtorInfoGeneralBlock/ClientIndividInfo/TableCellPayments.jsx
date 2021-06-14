import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import dayjs from 'dayjs';

const TableCellWrap = styled.tr`
  width: 100%;

  & > td {
    font-size: 18px;
  }
`;

function TableCellPayments({ payment, index }) {
  const paymentMethods = useSelector(
    (state) => state.individualclient.paymentMethods
  );
  const date = payment.date;
  const paymentMethod = paymentMethods.find(
    (item) => item.id === payment.methodId
  );

  return (
    <TableCellWrap>
      <th>{index + 1}</th>
      <th>{payment.amount}</th>
      <th>{dayjs(date).format('D MMMM')}</th>
      <th>{paymentMethod?.name}</th>
      <th>{payment.note}</th>
    </TableCellWrap>
  );
}

export default TableCellPayments;
