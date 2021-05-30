import React from 'react';
import styled from 'styled-components';
import DebtorGeneral from './DebtorGeneral/DebtorGeneral';
import { Route, Switch } from 'react-router-dom';
import DebtorIndividInfo from './DebtorIndividInfo/DebtorIndividInfo';

const DebtorWrap = styled.div`
  width: 100%;
`;

function Index(props) {
  return (
    <DebtorWrap>
      <Switch>
        <Route exact path="/main/" component={DebtorGeneral} />
        <Route exact path="/main/:debtorId?" component={DebtorIndividInfo} />
      </Switch>
    </DebtorWrap>
  );
}

export default Index;
