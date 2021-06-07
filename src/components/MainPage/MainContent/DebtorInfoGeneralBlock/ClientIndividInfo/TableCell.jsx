import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import dayjs from 'dayjs';

const TableCellWrap = styled.tr`
  width: 100%;
 
  & > td{
    font-size: 18px;
  }
`;

function TableCell(props) {

  const paymentMethods = useSelector(
    (state) => state.individualclient.paymentMethods
  );
  const date = props.payment.date;

  const paymentMethod = paymentMethods.find(
    (item) => item.id === props.payment.methodId
  )


  return (
    <TableCellWrap>
        <td>{props.index+1}</td>
        <td>{props.payment.amount}</td>
        <td>{dayjs(date).format("D MMMM")}</td>
        <td>{paymentMethod?.name}</td>
        <td>{props.payment.note}</td>
    </TableCellWrap>
  );
}

export default TableCell;
