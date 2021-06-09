import React, { useEffect } from 'react';
import styled from 'styled-components';
import ClientSearch from './ClientSearch';
import ClientInfo from './ClientInfo';
import { useDispatch, useSelector } from 'react-redux';

import ScrollWrap from './ScrollWrap';
import { loadLastPayments } from '../../../../../redux/ducks/clients';

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

  useEffect(() => {
    dispatch(loadLastPayments());
  }, [dispatch]);

  return (
    <DebtorInfoGeneralBlockStyles>
      <ClientSearch />
      <ScrollWrap>
        {clients.map((client) => {
          return <ClientInfo client={client} />;
        })}
      </ScrollWrap>
    </DebtorInfoGeneralBlockStyles>
  );
}

export default DebtorInfoGeneralBlock;
