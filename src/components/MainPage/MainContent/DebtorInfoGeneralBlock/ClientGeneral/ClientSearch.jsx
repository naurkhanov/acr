import React from 'react';
import styled from 'styled-components';

const DebtorSearchForm = styled.input`
  width: 100%;
  height: 45px;
  font-size: 18px;
  font-weight: 300;
  padding: 20px 20px 20px 20px;
  outline: #9d65c9;
  border-radius: 5px;

  border: none;
  background-color: transparent;

  &:focus {
    border: 1px solid #9d65c9;
  }

  &:hover {
    border: 1px solid #9d65c9;
  }
`;

const SearchFixed = styled.div`
  position: sticky;
  top: 5px;
  z-index: 1000;
  background-color: #fff;
`;

function ClientSearch(props) {
  return (
    <SearchFixed>
      <DebtorSearchForm type="text" placeholder="Поиск по имени" />
    </SearchFixed>
  );
}

export default ClientSearch;
