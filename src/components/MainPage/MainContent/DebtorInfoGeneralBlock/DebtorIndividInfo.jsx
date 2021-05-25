import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

const DebtorIndividInfoWrap = styled.div`
  width: 100%;
  height: 850px;
  margin-left: 20px;
  padding: 20px 20px 0 20px;
  overflow: auto;
  position: relative;
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.2);

  &::-webkit-scrollbar {
    width: 0;
  }
`;

function DebtorIndividInfo(props) {
  const debtorId = useParams().debtorId;

  return <DebtorIndividInfoWrap>Драсте</DebtorIndividInfoWrap>;
}

export default DebtorIndividInfo;
