import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadIndividualDebtorInfo } from '../../../../redux/ducks/individualdebtor';
import DebtorNameClose from './DebtorNameClose';
import DebtorContactInfo from './DebtorContactInfo';
import DebtorPayments from './DebtorPayments';
import AllPayments from './AllPayments';

const DebtorIndividInfoWrap = styled.div`
  width: 100%;
  height: 850px;
  margin-left: 20px;
  padding: 20px 20px 0 20px;
  overflow: auto;
  position: relative;
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.1);

  &::-webkit-scrollbar {
    width: 0;
  }

  & > .debtorContactInfo {
  }
`;

function DebtorIndividInfo(props) {
  const dispatch = useDispatch();
  const debtorId = useParams().debtorId;
  const individDebtorInfo = useSelector(
    (state) => state.individualdebtor.items
  );

  useEffect(() => {
    dispatch(loadIndividualDebtorInfo(debtorId));
  }, [dispatch, debtorId]);

  return (
    <DebtorIndividInfoWrap>
      <DebtorNameClose individDebtorInfo={individDebtorInfo} />
      <DebtorContactInfo individDebtorInfo={individDebtorInfo} />
      <DebtorPayments />
      <AllPayments />
    </DebtorIndividInfoWrap>
  );
}

export default DebtorIndividInfo;
