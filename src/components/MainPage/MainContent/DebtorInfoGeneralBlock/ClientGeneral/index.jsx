import React, { useEffect } from 'react';
import styled from 'styled-components';
import ClientSearch from './ClientSearch';
import ClientInfo from './ClientInfo';
import { useDispatch, useSelector } from 'react-redux';

import ScrollWrap from './ScrollWrap';
import {
  loadDebtors,
  loadLastPayments,
} from '../../../../../redux/ducks/clients';
import { useParams } from 'react-router-dom';

const DebtorInfoGeneralBlockStyles = styled.div`
  width: 100%;
  height: 850px;
  margin-left: 20px;
  padding: 0 20px 0 20px;
  overflow: auto;
  position: relative;

  &::-webkit-scrollbar {
    width: 0;
  }
`;

function DebtorInfoGeneralBlock(props) {
  const dispatch = useDispatch();
  const clients = useSelector((state) => state.clients.items);
  const filterText = useSelector((state) => state.clients.filter);
  const filteredClients = clients.filter((client) => {
    const clientInicial =
      client.firstname + ' ' + client.lastname + ' ' + client.lastname;
    return clientInicial.toUpperCase().indexOf(filterText.toUpperCase()) > -1;
  });
  const debtors = useSelector((state) => state.clients.debtors);
  const filteredDebtors = debtors.filter((debtor) => {
    const debtorInicial =
      debtor.firstname + ' ' + debtor.lastname + ' ' + debtor.lastname;
    return debtorInicial.toUpperCase().indexOf(filterText.toUpperCase()) > -1;
  });
  const showDebtors = useSelector((state) => state.clients.debtorsShow);
  const choice = showDebtors === true ? filteredDebtors : filteredClients;

  useEffect(() => {
    dispatch(loadLastPayments());
  }, [dispatch]);

  useEffect(() => {
    dispatch(loadDebtors());
  }, [dispatch]);

  return (
    <DebtorInfoGeneralBlockStyles>
      <ClientSearch />
      <ScrollWrap>
        {choice.map((client) => {
          return <ClientInfo client={client} />;
        })}
      </ScrollWrap>
    </DebtorInfoGeneralBlockStyles>
  );
}

export default DebtorInfoGeneralBlock;
