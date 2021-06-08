import React from 'react';
import { useSelector } from 'react-redux';
import TableCellPurchase from './TableCellPurchase';
import { PaymentsListWrap } from './styled';

function PurchasesList(props) {
  const purchases = useSelector((state) => state.individualclient.purchases);
  console.log(purchases);
  return (
    <PaymentsListWrap>
      <table>
        <thead>
          <tr>
            <th>№</th>
            <th>Сумма</th>
            <th>Дата</th>
            <th>Название</th>
            <th>Комментарии</th>
          </tr>
        </thead>
      </table>
      <div className="scroll-table-body">
        <table>
          <tbody>
            {purchases.map((purchase, index) => (
              <TableCellPurchase
                purchase={purchase}
                index={index}
                key={purchase.id}
              />
            ))}
          </tbody>
        </table>
      </div>
    </PaymentsListWrap>
  );
}

export default PurchasesList;
