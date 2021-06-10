import React from 'react';
import { DebtorSearchForm, SearchFixed } from './styled';
import { useDispatch, useSelector } from 'react-redux';
import { filterClientsName } from '../../../../../redux/ducks/clients';

function ClientSearch() {
  const dispatch = useDispatch();

  const filter = useSelector((state) => state.clients.filter);
  console.log(filter);

  const handleChangeFilter = (event) => {
    dispatch(filterClientsName(event.target.value));
  };

  return (
    <SearchFixed>
      <DebtorSearchForm
        type="text"
        placeholder="Поиск по имени"
        value={filter}
        onChange={handleChangeFilter}
      />
    </SearchFixed>
  );
}

export default ClientSearch;
