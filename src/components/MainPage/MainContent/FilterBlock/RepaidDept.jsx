import React from 'react';
import { Repaid } from './styled';

function RepaidDept() {
  return (
    <Repaid>
      <input type="checkbox" className="custom-checkbox" id="repaid" />
      <label htmlFor="repaid" className="expiration">
        Скрыть погасивших долг
      </label>
    </Repaid>
  );
}

export default RepaidDept;
