import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import {
  addpayment,
  closePaymentsModal,
} from '../../../redux/ducks/individualdebtor';

const Background = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
  width: 600px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.1);
  background: #fff;
  color: #000;
  position: relative;
  z-index: 10;
  border-radius: 10px;
  padding: 30px 30px;
`;

const ModalHeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;

  & > div {
    font-size: 24px;
    font-weight: 500;
  }

  & > span {
    font-weight: bold;
    cursor: pointer;
  }
`;

const NameInputWrap = styled.div`
  margin-top: 11px;

  & > input {
    width: 100%;
    height: 60px;
    border: 1px solid #f1f1f1;
    border-radius: 4px;
    outline: none;
    padding: 20px 20px;
    font-size: 18px;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.5);
  }
`;

const SumPaymentsWrap = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: space-between;

  & > input {
    width: 48%;
    height: 60px;
    border: 1px solid #f1f1f1;
    border-radius: 4px;
    outline: none;
    padding: 20px 20px;
    font-size: 18px;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.5);
  }
`;

const CommentWrap = styled.div`
  margin-top: 20px;

  & > input {
    width: 100%;
    height: 120px;
    border: 1px solid #f1f1f1;
    border-radius: 4px;
    outline: none;
    padding: 20px 0 70px 20px;
    font-size: 18px;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.5);
  }
`;

const TimePay = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: center;

  & > .timePay {
    font-weight: 400;
    font-size: 18px;
  }

  & > .week {
    margin-left: 10px;
    color: #5d54a4;
    font-size: 18px;
    font-weight: 400;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const ButtonWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ButtonAdd = styled.button`
  width: 170px;
  height: 60px;
  background-color: #9d65c9;
  color: #fff;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  font-size: 20px;
  margin-top: 20px;
  border: 1px solid grey;
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 5px;
`;

function PaymentsModal(props) {
  const dispatch = useDispatch();
  const modalClose = useSelector(
    (state) => state.individualdebtor.showModalPayment
  );
  const items = useSelector((state) => state.individualdebtor.items);

  const handleClosePaymentsModal = () => {
    dispatch(closePaymentsModal(modalClose));
  };

  const [sumPayment, setSumPayment] = useState('');
  const [methodPayment, setMethodPayment] = useState('');
  const [paymentComment, setPaymentComment] = useState('');

  const handleAddPayment = () => {
    setSumPayment('');
    setMethodPayment('');
    setPaymentComment('');

    dispatch(addpayment(items.id, sumPayment, paymentComment, methodPayment));
  };

  return (
    <Background>
      <ModalWrapper>
        <ModalHeaderWrap>
          <div>Добавить платёж</div>
          <span className="material-icons" onClick={handleClosePaymentsModal}>
            close
          </span>
        </ModalHeaderWrap>
        <NameInputWrap>
          <input
            type="text"
            placeholder={`${
              items.lastname + ' ' + items.firstname + ' ' + items.surname
            }`}
          />
        </NameInputWrap>
        <SumPaymentsWrap>
          <input
            type="text"
            placeholder="Сумма"
            value={sumPayment}
            onChange={(event) => setSumPayment(event.target.value)}
          />
          <input
            type="text"
            placeholder="Способ оплаты"
            value={methodPayment}
            onChange={(event) => setMethodPayment(event.target.value)}
          />
        </SumPaymentsWrap>
        <CommentWrap>
          <input
            type="text"
            placeholder="Комментарий"
            value={paymentComment}
            onChange={(event) => setPaymentComment(event.target.value)}
          />
        </CommentWrap>
        <TimePay>
          <div className="timePay">Дата оплаты:</div>
          <div className="week">Сегодня</div>
        </TimePay>
        <ButtonWrap>
          <ButtonAdd onClick={handleAddPayment}>Добавить</ButtonAdd>
        </ButtonWrap>
      </ModalWrapper>
    </Background>
  );
}

export default PaymentsModal;
