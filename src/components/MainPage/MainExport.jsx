import React from 'react';
import styled from 'styled-components';

const Export = styled.div`
  color: #5d54a4;
  font-weight: 400;
  font-size: 18px;
  cursor: pointer;
`;

function MainExport(props) {
  return <Export {...props} />;
}

export default MainExport;
