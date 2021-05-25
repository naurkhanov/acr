import React from 'react';
import styled from 'styled-components';
import FilterAmount from './FilterAmount';
import ExpirationBlock from './ExpirationBlock';
import RemainBlock from './RemainBlock';
import LastPayment from './LastPayment';
import RepaidDept from './RepaidDept';

const SidePanelGeneral = styled.div`
  width: 300px;
  height: 450px;
  box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.1);
  padding: 20px 20px;
`;

function LeftSidePanel(props) {
  return (
    <SidePanelGeneral>
      <FilterAmount>Фильтр(205)</FilterAmount>
      <ExpirationBlock />
      <RemainBlock />
      <LastPayment />
      <RepaidDept />
    </SidePanelGeneral>
  );
}

export default LeftSidePanel;
