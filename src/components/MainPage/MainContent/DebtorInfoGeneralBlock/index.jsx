import React from 'react';
import styled from 'styled-components';
import DebtorGeneral from './DebtorGeneral';
import { Route, Switch, useParams } from 'react-router-dom';
import DebtorIndividInfo from './DebtorIndividInfo';

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
