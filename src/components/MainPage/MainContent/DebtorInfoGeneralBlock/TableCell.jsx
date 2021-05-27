import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const TableCellWrap = styled.div`
  border-top: 1px solid #f1f1f1;
  border-bottom: 1px solid #f1f1f1;
  display: flex;
  justify-content: space-between;
  padding: 20px 50px 20px 0;
  width: 100%;
  & > div {
    text-align: center;
    font-size: 18px;
    font-weight: 400;
  }
`;

function TableCell(props) {
  const payments = useSelector((state) => state.individualdebtor.payments);
  const paymentMethods = useSelector(
    (state) => state.individualdebtor.paymentMethods
  );
  const date = payments.date;

  const paymentMethod = paymentMethods.find(
    (item) => item.id === payments.methodId
  );

  return (
    <TableCellWrap>
      <div>1</div>
      <div>{payments.amount}</div>
      <div>{date?.substr(5, 2)} сентябрь</div>
      <div>{paymentMethod?.name}</div>
      <div>Остаток скинет на карту</div>
    </TableCellWrap>
  );
}

export default TableCell;
