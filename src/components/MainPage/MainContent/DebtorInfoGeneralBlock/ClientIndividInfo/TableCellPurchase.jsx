import React from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';

const TableCellPurchaseWrap = styled.tr`
  width: 100%;
  & > td {
    font-size: 18px;
  }
`;

function TableCellPurchase({ purchase, index }) {
  return (
    <TableCellPurchaseWrap>
      <th>{index + 1}</th>
      <th>{purchase.price}</th>
      <th>{dayjs(purchase.date).format('D MMMM')}</th>
      <th>{purchase.name}</th>
      <th>{purchase?.note}</th>
    </TableCellPurchaseWrap>
  );
}

export default TableCellPurchase;
