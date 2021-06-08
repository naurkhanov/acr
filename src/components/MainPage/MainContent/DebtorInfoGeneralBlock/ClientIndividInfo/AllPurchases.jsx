import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import {
  openPurchaseList,
  showPurchaseModal,
} from '../../../../../redux/ducks/individualclient';

const AllPaymentsWrap = styled.div`
  display: flex;
  margin-top: 5px;
  justify-content: space-between;

  & > .AllPaymentsGeneral {
    display: flex;
    align-items: center;

    & > .PaymentsTitle {
      font-weight: 500;
      font-size: 18px;
      margin-left: 1px;
    }

    & > span {
      cursor: pointer;
    }
  }

  & > .addPurchase {
    color: #5d54a4;
    font-weight: 400;
    font-size: 18px;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;

function AllPayments(props) {
  const dispatch = useDispatch();
  const paymentsModalShow = useSelector(
    (state) => state.individualclient.showModalPurchase
  );
  const purchase = useSelector((state) => state.individualclient.purchases);

  const purchaseOpen = useSelector(
    (state) => state.individualclient.purchaseListOpen
  );
  const handleOpenPurchase = () => {
    dispatch(openPurchaseList(purchaseOpen));
  };

  const handleShowPurchaseModal = () => {
    dispatch(showPurchaseModal(paymentsModalShow));
  };

  return (
    <AllPaymentsWrap>
      <div className="AllPaymentsGeneral">
        <div className="PaymentsTitle">{`Все покупки (${purchase.length})`}</div>
        <span className="material-icons" onClick={handleOpenPurchase}>
          {purchaseOpen !== true ? 'chevron_right' : 'expand_more'}
        </span>
      </div>
      <div className="addPurchase" onClick={handleShowPurchaseModal}>
        + Добавить покупку
      </div>
    </AllPaymentsWrap>
  );
}

export default AllPayments;
