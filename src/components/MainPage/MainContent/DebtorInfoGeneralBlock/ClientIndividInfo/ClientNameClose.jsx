import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { CloseWrap } from './styled';

function ClientNameClose() {
  const history = useHistory();
  const handleClose = () => {
    history.push('/main');
  };
  const individClientInfo = useSelector(
    (state) => state.individualclient.items
  );
  return (
    <CloseWrap>
      <div className="nameDone">
        <div className="debtorName">
          {individClientInfo.lastname +
            ' ' +
            individClientInfo.firstname +
            ' ' +
            individClientInfo.surname}
        </div>
        <span className="material-icons">done</span>
      </div>
      <div className="close">
        <span className="material-icons" onClick={handleClose}>
          close
        </span>
      </div>
    </CloseWrap>
  );
}

export default ClientNameClose;
