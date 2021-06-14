import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { loadPayments } from '../../../../../redux/ducks/clients';
import { useDispatch, useSelector } from 'react-redux';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import relativeTime from 'dayjs/plugin/relativeTime';
import { BlockWrap, Debtor } from './styled';

function ClientInfo({ client }) {
  dayjs.extend(duration);
  dayjs.extend(relativeTime);
  const dispatch = useDispatch();
  const debtorId = client?.id;
  const lastPayments = useSelector((state) => state.clients.lastpayments);
  const currentPayment = lastPayments.find(
    (item) => item.clientId === debtorId
  );
  const lastPaymentDate = currentPayment?.date;

  useEffect(() => {
    dispatch(loadPayments());
  }, [dispatch]);

  return (
    <NavLink to={`main/${debtorId}`}>
      <Debtor>
        <BlockWrap>
          <div className="debtorAndIcon">
            <div className="debtorTitle">
              {client?.lastname +
                ' ' +
                client?.firstname +
                ' ' +
                client?.surname}
            </div>
            <div className="debtor_icon">
              <span
                className={`material-icons ${
                  client?.indebtedness === 0 ? 'green' : 'attention'
                }`}
              >
                {client?.indebtedness === 0 ? 'done' : 'error'}
              </span>
            </div>
          </div>
          <div className="lastPaymentTitle">
            Последня оплата: {dayjs(lastPaymentDate).fromNow()} на{' '}
            {currentPayment?.amount}
          </div>
          <div className="leftPaymentTitle">
            Осталось к оплате: {client?.indebtedness}
          </div>
        </BlockWrap>
        <div className="strelka">→</div>
      </Debtor>
    </NavLink>
  );
}

export default ClientInfo;
