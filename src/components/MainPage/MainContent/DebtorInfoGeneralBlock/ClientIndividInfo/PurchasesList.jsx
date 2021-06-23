import React from 'react';
import { useSelector } from 'react-redux';
import TableCellPurchase from './TableCellPurchase';
import { PaymentsListWrap } from './styled';
import { PurchaseSelector } from '../../../../../redux/ducks/selectors/selectors';

function PurchasesList() {
  const purchases = useSelector(PurchaseSelector);
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
