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
import { createLogger } from 'redux-logger/src';

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
  const from = useSelector((state) => state.clients.from);
  const to = useSelector((state) => state.clients.to);
  const debtors = useSelector((state) => state.clients.debtors);
  //фильтрация
  const showDebtors = useSelector((state) => state.clients.debtorsShow);

  const getOrDefault = (value, defaultValue) => {
    return value == undefined ? defaultValue : value;
  };

  const fromOpred = getOrDefault(from, 0);
  const toOpred = getOrDefault(to, 100000000);

  const filteredToFrom = clients.filter((client) => {
    return fromOpred && toOpred
      ? client.indebtedness >= fromOpred && toOpred >= client.indebtedness
      : fromOpred
      ? client.indebtedness >= fromOpred
      : toOpred
      ? client.indebtedness <= toOpred
      : client.indebtedness;
  });

  const filteredToFromDebtors = debtors.filter((client) => {
    return fromOpred && toOpred
      ? client.indebtedness >= fromOpred && toOpred >= client.indebtedness
      : fromOpred
      ? client.indebtedness >= fromOpred
      : toOpred
      ? client.indebtedness <= toOpred
      : client.indebtedness;
  });

  const filteredClients = filteredToFrom.filter((client) => {
    const clientInicial =
      client.firstname + ' ' + client.lastname + ' ' + client.lastname;
    return clientInicial.toUpperCase().indexOf(filterText.toUpperCase()) > -1;
  });

  const filteredDebtors = filteredToFromDebtors.filter((debtor) => {
    const debtorInicial =
      debtor.firstname + ' ' + debtor.lastname + ' ' + debtor.lastname;
    return debtorInicial.toUpperCase().indexOf(filterText.toUpperCase()) > -1;
  });

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
