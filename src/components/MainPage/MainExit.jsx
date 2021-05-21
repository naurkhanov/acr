import React from 'react';
import styled from 'styled-components';

const ExitButton = styled.div`
  color: #5d54a4;
  font-weight: 400;
  font-size: 18px;
  cursor: pointer;
  margin-left: 30px;
`;

function MainExit(props) {
  return <ExitButton {...props} />;
}

export default MainExit;
