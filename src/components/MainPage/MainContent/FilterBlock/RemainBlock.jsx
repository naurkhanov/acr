import React from 'react';
import { Remain } from './styled';
import { useDispatch, useSelector } from 'react-redux';
import { setForm, setOt } from '../../../../redux/ducks/clients';

function RemainBlock() {
  const dispatch = useDispatch();
  const debtors = useSelector((state) => state.clients.debtors);
  const indebtedness = debtors.map((client) => client.indebtedness);
  const minIndebtedness = Math.min(...indebtedness);
  const maxIndebtedness = Math.max(...indebtedness);
  const fromNumbers = useSelector((state) => state.clients.from);
  const toNumbers = useSelector((state) => state.clients.to);
  const handleChangeFrom = (event) => {
    dispatch(setForm(event.target.value));
  };
  const handleChangeTo = (event) => {
    dispatch(setOt(event.target.value));
  };

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
          value={fromNumbers}
          onChange={handleChangeFrom}
        />
        <input
          type="text"
          placeholder={maxIndebtedness}
          value={toNumbers}
          onChange={handleChangeTo}
        />
      </div>
    </Remain>
  );
}
export default RemainBlock;
