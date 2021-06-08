import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

const CloseWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > .nameDone {
    display: flex;
    align-items: center;

    & > .debtorName {
      font-weight: 500;
      font-size: 36px;
    }

    & > span {
      font-size: 30px;
      margin-left: 10px;
      color: #4bdc26;
    }
  }

  & > .close {
    color: grey;
    cursor: pointer;
    &:hover {
      transition: 1000ms;
      transform: scale(1.2);
    }
  }
`;

function ClientNameClose(props) {
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
