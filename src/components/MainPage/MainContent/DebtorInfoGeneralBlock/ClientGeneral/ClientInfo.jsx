import React, { useEffect } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { loadPayments } from '../../../../../redux/ducks/clients';
import { useDispatch, useSelector } from 'react-redux';
import dayjs from 'dayjs';
const Debtor = styled.div`
  width: 100%;
  margin-top: 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 20px 20px;
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: space-between;

  & > .strelka {
    cursor: pointer;
    font-size: 30px;
  }
`;

const BlockWrap = styled.div`
  & > .debtorAndIcon {
    display: flex;
    align-items: center;

    & > .debtorTitle {
      font-weight: 700;
      font-size: 26px;
      color: black;
    }

    & > .debtor_icon {
      margin-left: 10px;
      & > span {
        color: green;
      }
    }
  }

  & > .lastPaymentTitle {
    margin-top: 10px;
    color: #adadad;
    font-size: 20px;
    font-weight: 300;
  }
  & > .leftPaymentTitle {
    margin-top: 10px;
    color: #adadad;
    font-size: 20px;
    font-weight: 300;
  }
`;

function ClientInfo(props) {
  const dispatch = useDispatch();
  const debtorId = props.clients.id;
  const payments = useSelector((state) => state.clients.payments);
  const paymentsFilter = payments
    .reverse()
    .find((item) => item.clientId === debtorId);
  const nowTime = parseInt(dayjs().format('DD'));
  const paymentDate = parseInt(dayjs(paymentsFilter?.date).format('DD'));

  useEffect(() => {
    dispatch(loadPayments());
  }, [dispatch]);

  return (
    <NavLink to={`main/${debtorId}`}>
      <Debtor>
        <BlockWrap>
          <div className="debtorAndIcon">
            <div className="debtorTitle">
              {props.clients.lastname +
                ' ' +
                props.clients.firstname +
                ' ' +
                props.clients.surname}
            </div>
            <div className="debtor_icon">
              <span className="material-icons">done</span>
            </div>
          </div>
          <div className="lastPaymentTitle">
            Последня оплата: {paymentsFilter?.difference - nowTime} дней назад
            на сумму {paymentsFilter?.amount}
          </div>
          <div className="leftPaymentTitle">
            Осталось к оплате: {props.clients.indebtedness}
          </div>
        </BlockWrap>
        <div className="strelka">→</div>
      </Debtor>
    </NavLink>
  );
}

export default ClientInfo;
