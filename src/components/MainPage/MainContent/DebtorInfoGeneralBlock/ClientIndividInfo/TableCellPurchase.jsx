import React from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';

const TableCellPurchaseWrap = styled.tr`
  width: 100%;
  & > td {
    font-size: 18px;
  }
`;

function TableCellPurchase(props) {
  return (
    <TableCellPurchaseWrap>
      <th>{props.index + 1}</th>
      <th>{props.purchase.price}</th>
      <th>{dayjs(props.purchase.date).format('D MMMM')}</th>
      <th>{props.purchase.name}</th>
      <th>{props.purchase?.note}</th>
    </TableCellPurchaseWrap>
  );
}

export default TableCellPurchase;
