import React from 'react';
import styled from 'styled-components';
import DebtorSearch from './DebtorSearch';

const DebtorInfoGeneralBlockStyles = styled.div`
  width: 100%;
  height: 500px;
  box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.2);
  margin-left: 20px;
  padding: 20px 20px 0 20px;
`;

function DebtorInfoGeneralBlock(props) {
  return (
    <DebtorInfoGeneralBlockStyles>
      <DebtorSearch />
    </DebtorInfoGeneralBlockStyles>
  );
}

export default DebtorInfoGeneralBlock;
