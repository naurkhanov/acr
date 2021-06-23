import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { CloseWrap } from './styled';
import { IndividualClientsSelector } from '../../../../../redux/ducks/selectors/selectors';

function ClientNameClose() {
  const history = useHistory();
  const handleClose = () => {
    history.push('/main');
  };

  const individClientInfo = useSelector(IndividualClientsSelector);
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
        <span
          className={`material-icons ${
            individClientInfo?.indebtedness === 0 ? 'green' : 'attention'
          }`}
        >
          {individClientInfo?.indebtedness === 0 ? 'done' : 'error'}
        </span>
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
