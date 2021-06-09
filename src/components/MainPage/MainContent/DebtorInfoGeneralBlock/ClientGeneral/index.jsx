import React, { useEffect } from 'react';
import styled from 'styled-components';
import ClientSearch from './ClientSearch';
import ClientInfo from './ClientInfo';
import { useDispatch, useSelector } from 'react-redux';

import ScrollWrap from './ScrollWrap';
import { loadLastPayments } from '../../../../../redux/ducks/clients';
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
    return clientInicial.toLowerCase().indexOf(filterText) > -1;
  });

  useEffect(() => {
    dispatch(loadLastPayments());
  }, [dispatch]);

  return (
    <DebtorInfoGeneralBlockStyles>
      <ClientSearch />
      <ScrollWrap>
        {filteredClients.map((client) => {
          return <ClientInfo client={client} />;
        })}
      </ScrollWrap>
    </DebtorInfoGeneralBlockStyles>
  );
}

export default DebtorInfoGeneralBlock;
