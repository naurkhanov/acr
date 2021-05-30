import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
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

function DebtorInfo(props) {
  const debtorId = props.debtor.id;

  return (
    <NavLink to={`main/${debtorId}`}>
      <Debtor>
        <BlockWrap>
          <div className="debtorAndIcon">
            <div className="debtorTitle">
              {props.debtor.lastname +
                ' ' +
                props.debtor.firstname +
                ' ' +
                props.debtor.surname}
            </div>
            <div className="debtor_icon">
              <span className="material-icons">done</span>
            </div>
          </div>
          <div className="lastPaymentTitle">
            Последня оплата: 18 дней назад на сумму 15000₽
          </div>
          <div className="leftPaymentTitle">Осталось к оплате: 40000₽</div>
        </BlockWrap>
        <div className="strelka">→</div>
      </Debtor>
    </NavLink>
  );
}

export default DebtorInfo;
