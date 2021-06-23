import React from 'react';
import FilterAmount from './FilterAmount';
import ExpirationBlock from './ExpirationBlock';
import RemainBlock from './RemainBlock';
import LastPayment from './LastPayment';
import RepaidDept from './RepaidDept';
import { useSelector } from 'react-redux';
import { SidePanelGeneral } from './styled';
import styled from 'styled-components';
import { allClientsSelector } from '../../../../redux/ducks/selectors/selectors';

const DisabledWrap = styled.div``;

function LeftSidePanel() {
  const clients = useSelector(allClientsSelector);

  return (
    <SidePanelGeneral>
      <FilterAmount>{`Фильтр(${clients.length})`}</FilterAmount>
      <ExpirationBlock />
      <DisabledWrap>
        <RemainBlock />
        <LastPayment />
        <RepaidDept />
      </DisabledWrap>
    </SidePanelGeneral>
  );
}

export default LeftSidePanel;
