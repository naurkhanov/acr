import React, { useEffect, useState } from 'react';
import { Remain } from './styled';
import { useDispatch, useSelector } from 'react-redux';
import { set } from 'husky';
import { loadToFromDebtors } from '../../../../redux/ducks/clients';

function RemainBlock(props) {
  const dispatch = useDispatch();
  const debtors = useSelector((state) => state.clients.debtors);
  const indebtedness = debtors.map((client) => client.indebtedness);
  const minIndebtedness = Math.min.apply(null, indebtedness);
  const maxIndebtedness = Math.max.apply(null, indebtedness);
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  useEffect(() => {
    dispatch(loadToFromDebtors());
  }, [from, to]);
  return (
    <Remain>
      <div className="remainTitle">Остаток оплаты</div>
      <div className="fromAndTo">
        <div className="from">От</div>
        <div className="to">До</div>
      </div>
      <div className="fromAndToForms">
        <input
          type="text"
          placeholder={minIndebtedness}
          value={from}
          onChange={(event) => setFrom(event.target.value)}
        />
        <input
          type="text"
          placeholder={maxIndebtedness}
          value={to}
          onChange={(event) => setTo(event.target.value)}
        />
      </div>
    </Remain>
  );
}
export default RemainBlock;
