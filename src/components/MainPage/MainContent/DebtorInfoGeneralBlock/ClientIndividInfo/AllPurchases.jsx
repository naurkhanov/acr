import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  openPurchaseList,
  showPurchaseModal,
} from '../../../../../redux/ducks/individualclient';
import { AllPaymentsWrapPurchase } from './styled';
import {
  PurchaseSelector,
  PurchasesListOpenSelector,
  ShowModalPurchaseSelector,
} from '../../../../../redux/ducks/selectors/selectors';

function AllPayments() {
  const dispatch = useDispatch();
  const paymentsModalShow = useSelector(ShowModalPurchaseSelector);
  const purchase = useSelector(PurchaseSelector);

  const purchaseOpen = useSelector(PurchasesListOpenSelector);
  const handleOpenPurchase = () => {
    dispatch(openPurchaseList(purchaseOpen));
  };

  const handleShowPurchaseModal = () => {
    dispatch(showPurchaseModal(paymentsModalShow));
  };

  return (
    <AllPaymentsWrapPurchase>
      <div className="AllPaymentsGeneral">
        <div className="PaymentsTitle">{`Все покупки (${purchase.length})`}</div>
        <span className="material-icons" onClick={handleOpenPurchase}>
          {purchaseOpen !== true ? 'chevron_right' : 'expand_more'}
        </span>
      </div>
      <div className="addPurchase" onClick={handleShowPurchaseModal}>
        + Добавить покупку
      </div>
    </AllPaymentsWrapPurchase>
  );
}

export default AllPayments;
