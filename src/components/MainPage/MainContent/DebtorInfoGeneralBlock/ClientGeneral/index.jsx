import React from 'react';
import styled from 'styled-components';
import ClientSearch from './ClientSearch';
import ClientInfo from './ClientInfo';
import {  useSelector } from 'react-redux';

import ScrollWrap from './ScrollWrap';

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
  const clients = useSelector((state) => state.clients.items);
  const payments = useSelector(state=>state.clients.payments)



  return (
    <DebtorInfoGeneralBlockStyles>
      <ClientSearch />
      <ScrollWrap>
        {clients.map((clients) => {
          return <ClientInfo clients={clients} />;
        })}
      </ScrollWrap>
    </DebtorInfoGeneralBlockStyles>
  );
}

export default DebtorInfoGeneralBlock;
