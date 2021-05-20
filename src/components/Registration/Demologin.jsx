import React from 'react';
import styled from 'styled-components';

const DemoLoginText = styled.div`
  font-size: 12px;
  color: #d0d0d0;
  font-weight: 300;
  text-align: center;
  margin-top: 5px;
`;

function Demologin(props) {
  return <DemoLoginText {...props} />;
}

export default Demologin;
