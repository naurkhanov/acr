import React from 'react';
import FilterAmount from './FilterAmount';
import ExpirationBlock from './ExpirationBlock';
import RemainBlock from './RemainBlock';
import LastPayment from './LastPayment';
import RepaidDept from './RepaidDept';
import { useSelector } from 'react-redux';
import { SidePanelGeneral } from './styled';

function LeftSidePanel() {
  const clients = useSelector((state) => state.clients.items);

  return (
    <SidePanelGeneral>
      <FilterAmount>{`Фильтр(${clients.length})`}</FilterAmount>
      <ExpirationBlock />
      <RemainBlock />
      <LastPayment />
      <RepaidDept />
    </SidePanelGeneral>
  );
}

export default LeftSidePanel;
