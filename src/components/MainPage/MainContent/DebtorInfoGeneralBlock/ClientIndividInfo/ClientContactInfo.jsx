import React from 'react';
import { useSelector } from 'react-redux';
import { DebtorContactInfoWrap } from './styled';

function ClientContactInfo() {
  const individClientInfo = useSelector(
    (state) => state.individualclient.items
  );
  return (
    <DebtorContactInfoWrap>
      <div className="debtorContactNumber">
        <span className="material-icons">call</span>
        <div className="debtorNumber">
          {individClientInfo.countryCode + ' ' + individClientInfo.phone}
        </div>
        <div className="reminder">отправить напоминание</div>
      </div>
      <div className="debtorLocation">
        <span className="material-icons">location_on</span>
        <div className="debtorAdress">{`г.${individClientInfo.city}`}</div>
      </div>
    </DebtorContactInfoWrap>
  );
}

export default ClientContactInfo;
