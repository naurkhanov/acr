import React from 'react';
import { ExpirationWrap } from './styled';
import { useDispatch, useSelector } from 'react-redux';
import { debtorsshowchange } from '../../../../redux/ducks/clients';

function ExpirationBlock() {
  const dispatch = useDispatch();
  const debtorsShow = useSelector((state) => state.clients.debtorsShow);
  const handleChangeRadio = () => {
    dispatch(debtorsshowchange(debtorsShow));
  };

  return (
    <ExpirationWrap>
      <input
        type="checkbox"
        className="custom-checkbox"
        id="expiration"
        checked={debtorsShow}
        onChange={handleChangeRadio}
      />
      <label for="expiration" className="expiration">
        Показать все просрочки
      </label>
    </ExpirationWrap>
  );
}

export default ExpirationBlock;
