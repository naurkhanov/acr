import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addpurchases,
  closePurchaseModal,
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

function PurchasesModal() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.individualclient.items);

  const handleClosePurchaseModal = () => {
    dispatch(closePurchaseModal());
  };

  const [purchasePrice, setPurchasePrice] = useState('');
  const [namePurchase, setNamePurchase] = useState('');
  const [purchaseComment, setPurchaseComment] = useState('');
  const date = dayjs().format('YYYY-MM-DD');
  const handleAddPurchase = () => {
    setPurchasePrice('');
    setNamePurchase('');
    setPurchaseComment('');

    dispatch(
      addpurchases(items.id, purchasePrice, namePurchase, purchaseComment, date)
    );
  };

  return (
    <Background>
      <ModalWrapper>
        <ModalHeaderWrap>
          <div>Добавить покупку</div>
          <span className="material-icons" onClick={handleClosePurchaseModal}>
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
            placeholder="Цена"
            value={purchasePrice}
            onChange={(event) => setPurchasePrice(event.target.value)}
          />
          <input
            type="text"
            placeholder="Название товара"
            value={namePurchase}
            onChange={(event) => setNamePurchase(event.target.value)}
          />
        </SumPaymentsWrap>
        <CommentWrap>
          <input
            type="text"
            placeholder="Комментарий"
            value={purchaseComment}
            onChange={(event) => setPurchaseComment(event.target.value)}
          />
        </CommentWrap>
        <TimePay>
          <div className="timePay">Дата оплаты:</div>
          <div className="week">Сегодня</div>
        </TimePay>
        <ButtonWrap>
          <ButtonAdd onClick={handleAddPurchase}>Добавить</ButtonAdd>
        </ButtonWrap>
      </ModalWrapper>
    </Background>
  );
}

export default PurchasesModal;
