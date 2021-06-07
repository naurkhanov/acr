import React from 'react';
import styled from 'styled-components';

const FilterAmountClass = styled.div`
  font-weight: 500;
  font-size: 20px;
`;

function FilterAmount(props) {
  return <FilterAmountClass {...props} />;
}

export default FilterAmount;
