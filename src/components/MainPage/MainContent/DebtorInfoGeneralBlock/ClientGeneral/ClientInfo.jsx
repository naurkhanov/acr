import React, { useEffect } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { loadPayments } from '../../../../../redux/ducks/clients';
import { useDispatch, useSelector } from 'react-redux';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import relativeTime from 'dayjs/plugin/relativeTime';
import locale_ru from 'dayjs/locale/ru';

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
      & > .green {
        color: #4bdc26;
      }
      & > .attention {
        color: #ed940e;
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

function ClientInfo({ client }) {
  dayjs.extend(duration);
  dayjs.extend(relativeTime);
  const dispatch = useDispatch();
  const debtorId = client.id;
  const lastPayments = useSelector((state) => state.clients.lastpayments);
  const currentPayment = lastPayments.find(
    (item) => item.clientId === debtorId
  );
  const lastPaymentDate = currentPayment?.date;
  console.log(currentPayment?.date);

  useEffect(() => {
    dispatch(loadPayments());
  }, [dispatch]);

  return (
    <NavLink to={`main/${debtorId}`}>
      <Debtor>
        <BlockWrap>
          <div className="debtorAndIcon">
            <div className="debtorTitle">
              {client.lastname + ' ' + client.firstname + ' ' + client.surname}
            </div>
            <div className="debtor_icon">
              <span
                className={`material-icons ${
                  client.indebtedness === 0 ? 'green' : 'attention'
                }`}
              >
                {client.indebtedness === 0 ? 'done' : 'error'}
              </span>
            </div>
          </div>
          <div className="lastPaymentTitle">
            Последня оплата: {dayjs(lastPaymentDate).fromNow()} на{' '}
            {currentPayment?.amount}
          </div>
          <div className="leftPaymentTitle">
            Осталось к оплате: {client.indebtedness}
          </div>
        </BlockWrap>
        <div className="strelka">→</div>
      </Debtor>
    </NavLink>
  );
}

export default ClientInfo;
