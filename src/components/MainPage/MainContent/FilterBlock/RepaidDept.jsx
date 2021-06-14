import React from 'react';
import { Repaid } from './styled';
import { useDispatch, useSelector } from 'react-redux';
import { setRepaid } from '../../../../redux/ducks/clients';

function RepaidDept() {
  const repaidDept = useSelector((state) => state.clients.repaidDeptShow);
  const dispatch = useDispatch();

  const handleChangeRepaid = () => {
    dispatch(setRepaid(repaidDept));
  };

  return (
    <Repaid>
      <input
        type="checkbox"
        className="custom-checkbox"
        id="repaid"
        checked={repaidDept}
        onChange={handleChangeRepaid}
      />
      <label htmlFor="repaid" className="expiration">
        Скрыть погасивших долг
      </label>
    </Repaid>
  );
}

export default RepaidDept;
