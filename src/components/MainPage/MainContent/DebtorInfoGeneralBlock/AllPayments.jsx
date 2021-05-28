import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import {
  paymentsShow,
  showPaymentsModal,
} from '../../../../redux/ducks/individualdebtor';

const AllPaymentsWrap = styled.div`
  display: flex;
  margin-top: 40px;
  justify-content: space-between;

  & > .AllPaymentsGeneral {
    display: flex;
    align-items: center;

    & > .PaymentsTitle {
      font-weight: 500;
      font-size: 18px;
    }

    & > span {
      cursor: pointer;
    }
  }

  & > .addPayments {
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
    (state) => state.individualdebtor.showModalPayment
  );
  const payment = useSelector((state) => state.individualdebtor.payments);

  const paymentOpen = useSelector(
    (state) => state.individualdebtor.paymentsOpen
  );
  const handleOpenPayments = () => {
    dispatch(paymentsShow(paymentOpen));
  };
  const handleShowPaymentsModal = () => {
    dispatch(showPaymentsModal(paymentsModalShow));
  };

  return (
    <AllPaymentsWrap>
      <div className="AllPaymentsGeneral">
        <div className="PaymentsTitle">{`Все платежи (6)`}</div>
        <span className="material-icons" onClick={handleOpenPayments}>
          {paymentOpen !== true ? 'chevron_right' : 'expand_more'}
        </span>
      </div>
      <div className="addPayments" onClick={handleShowPaymentsModal}>
        + Добавить платёж
      </div>
    </AllPaymentsWrap>
  );
}

export default AllPayments;
