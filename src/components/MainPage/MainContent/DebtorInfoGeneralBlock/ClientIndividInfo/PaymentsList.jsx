import React from 'react';
import TableCellPayments from './TableCellPayments';
import { useSelector } from 'react-redux';
import { PaymentsListWrap } from './styled';

function PaymentsList(props) {
  const payments = useSelector((state) => state.individualclient.payments);
  return (
    <PaymentsListWrap>
      <table>
        <thead>
          <tr>
            <th>№</th>
            <th>Сумма</th>
            <th>Дата</th>
            <th>Способ</th>
            <th>Комментарии</th>
          </tr>
        </thead>
      </table>
      <div className="scroll-table-body">
        <table>
          <tbody>
            {payments.map((item, index) => (
              <TableCellPayments payment={item} index={index} />
            ))}
          </tbody>
        </table>
      </div>
    </PaymentsListWrap>
  );
}

export default PaymentsList;
