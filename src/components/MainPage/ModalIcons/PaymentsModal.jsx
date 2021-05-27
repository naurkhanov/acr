import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { closePaymentsModal } from '../../../redux/ducks/individualdebtor';
import Button from '../../Button/button';

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

function PaymentsModal(props) {
  const dispatch = useDispatch();
  const modalClose = useSelector(
    (state) => state.individualdebtor.showModalPayment
  );
  const items = useSelector((state) => state.individualdebtor.items);

  const handleClosePaymentsModal = () => {
    dispatch(closePaymentsModal(modalClose));
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
          <input type="text" placeholder="Сумма" />
          <input type="text" placeholder="Способ оплаты" />
        </SumPaymentsWrap>
        <CommentWrap>
          <input type="text" placeholder="Комментарий" />
        </CommentWrap>
        <TimePay>
          <div className="timePay">Дата оплаты:</div>
          <div className="week">Сегодня</div>
        </TimePay>
        <ButtonWrap>
          <Button addpayments>Добавить</Button>
        </ButtonWrap>
      </ModalWrapper>
    </Background>
  );
}

export default PaymentsModal;
