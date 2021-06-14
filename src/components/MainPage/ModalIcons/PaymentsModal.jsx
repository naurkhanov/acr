import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addpayment,
  closePaymentsModal,
} from '../../../redux/ducks/individualclient';
import dayjs from 'dayjs';
import {
  Background,
  ButtonAdd,
  ButtonWrap,
  CommentWrap,
  ModalHeaderWrap,
  ModalWrapper,
  NameInputWrap,
  SumPaymentsWrap,
  TimePay,
} from './styled';

function PaymentsModal() {
  const dispatch = useDispatch();
  const modalClose = useSelector(
    (state) => state.individualclient.showModalPayment
  );
  const items = useSelector((state) => state.individualclient.items);
  const handleClosePaymentsModal = () => {
    dispatch(closePaymentsModal(modalClose));
  };
  const [sumPayment, setSumPayment] = useState('');
  const [methodPayment, setMethodPayment] = useState('1');
  const [paymentComment, setPaymentComment] = useState('');
  const date = dayjs().format('YYYY-MM-DD');
  const handleAddPayment = () => {
    setSumPayment('');
    setMethodPayment('');
    setPaymentComment('');

    dispatch(
      addpayment(items.id, sumPayment, paymentComment, methodPayment, date)
    );
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
            disabled
          />
        </NameInputWrap>
        <SumPaymentsWrap>
          <input
            type="text"
            placeholder="Сумма"
            value={sumPayment}
            onChange={(event) => setSumPayment(event.target.value)}
          />

          <select
            className="dropDownWrap"
            name=""
            id=""
            onChange={(event) => setMethodPayment(event.target.value)}
          >
            <option value="1">Наличные</option>
            <option value="2">Сбербанк</option>
          </select>
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
