import React, { useEffect } from 'react';
import styled from 'styled-components';
import DebtorGeneral from './ClientGeneral';
import { Route, Switch} from 'react-router-dom';
import ClientIndividInfo from './ClientIndividInfo';
import { loadClients } from '../../../../redux/ducks/clients';
import { useDispatch } from 'react-redux';


const DebtorWrap = styled.div`
  width: 100%;
`;

function Index(props) {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadClients());
  }, [dispatch]);

  return (
    <DebtorWrap>
      <Switch>
        <Route exact path="/main/" component={DebtorGeneral} />
        <Route exact path="/main/:debtorId?" component={ClientIndividInfo} />
      </Switch>
    </DebtorWrap>
  );
}

export default Index;
